<template>
  <div class="highlight">
    <ul class="light" v-for="item in data" :key="item.uuid">
      <note-list v-for="section in item.sections" :key="section.uuid"
        :context="section.remark" type="highlight" :img="section.image"
        :isHighlight="section.highlight"  @clickShowImg="clickImg(section.image)"
        @tohighlight="highLight(item.uuid, section.uuid)" :isTrash="section.trash"
        @toTrash="totrash(item.uuid, section.uuid)" :title="item.title"></note-list>
    </ul>
    <no-data v-if="loading || nodata || next" :loading="loading" :nodata="!loading && nodata" :next="next" :loadingmore="loadingmore" :nomoredata="nomoredata" @loadMore="loadMore"></no-data>
    <big-img v-if="showImg" @clickit="imgShow" :imgSrc="imgSrc"></big-img>
  </div>
</template>

<script>
import NoteList from '../components/NoteList'
import { getHighList, toHighlight } from '../api/interface'
import NoData from '../components/Nodata'
import BigImg from '../components/BigImg'

export default {
  data () {
    return {
      data: [],
      loading: false,
      showImg: false,
      imgSrc: '',
      nodata: true,
      next: null,
      previous: null,
      current: 1,
      loadingmore: false,
      nomoredata: false
    }
  },
  methods: {
    getData () {
      this.loading = true
      getHighList({page: this.current}).then(res => {
        if (res.data) {
          this.next = res.data.next
          this.previous = res.data.previous
          if (res.data.next && res.data.next >= 2) this.current = this.next - 1
          this.data = res.data.results
          this.data.forEach(item => {
            if (item.sections.length) {
              item.sections.forEach(section => {
                if (!section.trash) this.nodata = false
              })
            } else this.nodata = true
          })
          this.loading = false
        }
      }).catch(() => {
        this.nomoredata = false
        this.loading = false
      })
    },
    loadMore () {
      this.loadingmore = true
      this.current++
      this.getData()
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
        highlight: false,
        notes: notesUuid,
        user: this.$store.getters.uuid
      }
      toHighlight(itemUuid, data).then(res => {
        if (res.status === 200) {
          this.data = []
          this.getData()
        }
      })
    },
    totrash (notesUuid, itemUuid) {
      const data = {
        trash: true,
        notes: notesUuid,
        user: this.$store.getters.uuid
      }
      toHighlight(itemUuid, data).then(res => {
        if (res.status === 200) {
          this.$toast('Moved to Trash', 1500)
          this.data = []
          this.getData()
        }
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
  padding: 64px 40px 100px;
}
.light {
  list-style-type: none;
  max-width: 810px;
  margin: auto;
  padding-right: 112px;
  position: relative;
  z-index: 1;
}
</style>
