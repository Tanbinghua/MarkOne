<template>
  <div class="highlight">
    <no-data :loading="loading" :nodata="!loading && nodata"></no-data>
    <ul class="light" v-for="item in data" :key="item.uuid">
      <note-list v-for="section in item.sections" :key="section.uuid"
        :context="section.remark" type="trash" :img="section.image"
        :isHighlight="section.highlight"  @clickShowImg="clickImg(section.image)"
        @reduction="highLight(item.uuid, section.uuid)" :isTrash="section.trash"
        @delete="todelete(item.uuid, section.uuid)"></note-list>
    </ul>
    <big-img v-if="showImg" @clickit="imgShow" :imgSrc="imgSrc"></big-img>
  </div>
</template>

<script>
import NoteList from '../components/NoteList'
import { getTrashList, toHighlight, deleteView } from '../api/interface'
import NoData from '../components/Nodata'
import BigImg from '../components/BigImg'

export default {
  data () {
    return {
      data: [],
      loading: false,
      showImg: false,
      imgSrc: '',
      nodata: true
    }
  },
  methods: {
    getData () {
      this.loading = true
      getTrashList().then(res => {
        if (res.data) {
          this.data = res.data.results
          this.data.every(item => {
            if (item.sections.length) this.nodata = false
          })
          this.loading = false
        }
      }).catch(() => {
        this.loading = false
      })
    },
    clickImg (src) {
      if (!src) return
      this.imgSrc = src
      this.showImg = true
    },
    imgShow () {
      this.showImg = false
    },
    highLight (notesUuid, itemUuid) {
      const data = {
        trash: false,
        notes: notesUuid,
        user: this.$store.getters.uuid
      }
      toHighlight(itemUuid, data).then(res => {
        if (res.status === 200) {
          this.$toast('Mark as not highlight successfully!', 1500)
          this.data = []
          this.getData()
        }
      })
    },
    todelete (notesUuid, itemUuid) {
      const data = {
        notes: notesUuid,
        user: this.$store.getters.uuid
      }
      deleteView(itemUuid, data).then(res => {
        this.$toast('', 1500)
        this.data = []
        this.getData()
      })
    }
  },
  components: {
    NoteList,
    NoData,
    BigImg
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.highlight {
  padding: 0 40px 100px;
}
.light {
  list-style-type: none;
  padding-right: 112px;
  position: relative;
  z-index: 1;
}
</style>
