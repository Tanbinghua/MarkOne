<template>
  <div class="search">
    <div v-if="!loading" class="back-to-notes" @click="$router.push('/notes')">
      <span class="back-to-notes-icon"><icon-svg icon-class="down"></icon-svg></span>
      <span>Back to notes</span>
    </div>
    <no-data v-if="loading || nodata" :loading="loading" :nodata="!loading && nodata"></no-data>
    <div class="note-list" v-for="item in data" :key="item.uuid">
      <h4 class="header" v-html="item.title" @click="$router.push(`/detail/${item.uuid}`)"></h4>
      <ul v-if="item.sections.length">
        <li v-for="(section, index) in item.sections" :key="index"
          v-html="section.remark"  @click="$router.push(`/detail/${item.uuid}`)"
          :class="{'list-item': true, 'has-left-radius': section.highlight, 'border-left-radius': section.highlight}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getNotes } from '../api/interface'
import NoData from '../components/Nodata'

export default {
  data () {
    return {
      data: [],
      loading: false,
      nodata: false
    }
  },
  components: {
    NoData
  },
  computed: {
    searchVal: {
      get () {
        return this.$store.getters.searchVal
      },
      set () {}
    }
  },
  watch: {
    searchVal (val) {
      this.searchVal = val
      this.getData()
    }
  },
  methods: {
    getData () {
      if (!this.searchVal) return
      this.loading = true
      getNotes({search: this.searchVal}).then(res => {
        if (res.data) {
          if (res.data.results.length) {
            res.data.results.forEach(item => {
              const sections = []
              const replaceReg = new RegExp(this.searchVal, 'gi')
              const replaceString = '<span style="color: #FF6E03;">' + this.searchVal + '</span>'
              const title = item.title.replace(replaceReg, replaceString)
              for (let i = 0, len = item.sections.length; i < len; i++) {
                if (item.sections[i].remark.indexOf(this.searchVal) !== -1 && !item.trash) {
                  sections.push({remark: item.sections[i].remark.replace(replaceReg, replaceString), highlight: item.sections[i].highlight})
                }
              }
              this.data.push({title, sections, uuid: item.uuid})
            })
          } else {
            this.nodata = true
          }
          this.loading = false
        }
      }).catch(() => {
        this.loading = false
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 0 212px 100px 40px;
}
.note-list {
  margin: auto;
  max-width: 810px;
}
.back-to-notes {
  display: inline-block;
  color: #1A2270;
  font-size: 14px;
  margin-top: 48px;
  transition: all .3s ease;
  &-icon svg {
    height: 6px;
    transform: rotate(-90deg);
    vertical-align: 2px;
    width: 10px;
  }
  &:hover {
    color: #FF6E03;
    cursor: pointer;
  }
}
.has-left-radius {
  border-left: 4px solid #FF6E03;
}
.border-left-radius {
  border-top-left-radius: 4px!important;
  border-bottom-left-radius: 4px!important;
}
.list-item {
  background: #fff;
  border-radius: 8px;
  color: #666;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
  padding: 24px 32px;
  position: relative;
  &:hover { cursor: pointer; }
}
h4.header {
  font-family: PingFangSC-Medium, sans-serif;
  font-size: 18px;
  margin: 64px 0 16px;
  max-width: 520px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: #1a2270;
  text-decoration: none;
  &:hover {  cursor: pointer; }
}
</style>
