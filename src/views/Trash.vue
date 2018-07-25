<template>
  <div class="highlight">
    <no-data v-if="!data.sections"></no-data>
    <ul class="light">
      <note-list v-for="item in data.sections" :key="item.uuid" :context="item.remark" type="trash"></note-list>
    </ul>
  </div>
</template>

<script>
import NoteList from '../components/NoteList'
import { getTrashList } from '../api/interface'
import NoData from '../components/Nodata'

export default {
  data () {
    return {
      data: []
    }
  },
  components: {
    NoteList,
    NoData
  },
  methods: {
    getData () {
      getTrashList().then(res => {
        if (res.data) {
          this.data = res.data.results
        }
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.highlight {
  padding: 6.7% 14.9% 6.7% 6.7%;
}
.light {
  list-style-type: none;
  position: relative;
  z-index: 1;
}
</style>
