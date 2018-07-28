<template>
  <div class="notes">
    <no-data v-if="loading || !notes.length" :loading="loading" :nodata="!loading && !notes.length"></no-data>
    <div class="note-list" v-for="note in notes" :key="note.id">
      <div class="note-list-header">
        <span class="note-list-header-icon">Copy all</span>
        <h3 :id="note.id"><a :href="'#' + note.title">{{ note.title }}</a></h3>
      </div>
      <sortable-list v-model="note.show" @sortStart="sortstart" @sortEnd="sortend" @sortMove="sortmove"
        :useDragHandle="true" lockAxis="y" helperClass="change-bg">
        <sortable-item v-for="(item, index) in note.show"
          :index="index" :key="item.uuid" :item="item.remark"
          :isHighlight="item.highlight" :img="item.image"
          :isVideo="item.is_video" :origin="item.origin"
          :startTime="item.start_time" @clickShowImg="clickImg(item.image)"
          @tohighlight="highLight(note.uuid, item.uuid, item.highlight)"
          @toTrash="totrash(note.uuid, item.uuid)" :isTrash="item.trash"></sortable-item>
        <collapse-transition>
          <div class="collapse" v-show="note.noteVisible">
            <sortable-item v-for="(item, index) in note.fold"
              :index="index" :key="item.uuid" :item="item.remark"
              :isHighlight="item.highlight" :img="item.image"
              :isVideo="item.is_video" :origin="item.origin"
              :startTime="item.start_time"></sortable-item>
          </div>
        </collapse-transition>
      </sortable-list>
      <div class="note-list-footer">
        <p v-if="note.fold && note.fold.length" class="note-list-footer-box" @click="note.noteVisible = !note.noteVisible">
          {{ note.noteVisible ? 'Fold' : 'More' }}&nbsp;
          <span :class="{'note-list-footer-box-icon': true, rotate: !note.noteVisible}"><icon-svg icon-class="down"></icon-svg></span>
        </p>
        <p class="note-list-footer-time">Edited:&nbsp;{{ note.updated_at | formatDate }}</p>
        <p class="note-list-footer-link">&nbsp;&nbsp;From:&nbsp;<a :href="note.origin" target="_blank"><span>{{ note.origin }}</span></a></p>
      </div>
    </div>
    <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
  </div>
</template>

<script>
import SortableList from '../components/SortableList'
import SortableItem from '../components/SortableItem'
import CollapseTransition from '../components/Collapse'
import NoData from '../components/Nodata'
import BigImg from '../components/BigImg'
import { getNotes, toHighlight } from '../api/interface'
import { formatDate } from '../utils/tools'

export default {
  data () {
    return {
      notes: [],
      loading: false,
      showImg: false,
      imgSrc: ''
    }
  },
  components: {
    SortableList,
    SortableItem,
    CollapseTransition,
    NoData,
    BigImg
  },
  methods: {
    sortstart () {
    },
    sortmove () {
    },
    sortend () {
    },
    getdata () {
      this.loading = true
      getNotes().then(res => {
        if (res.data) {
          res.data.results.every(item => {
            const { sections, ...info } = item
            const mark = {
              show: [],
              fold: []
            }
            if (item.sections.length <= 3) {
              for (let i = 0, len = item.sections.length; i < len; i++) mark.show.push(item.sections[i])
            } else {
              for (let i = 0; i < 3; i++) mark.show.push(item.sections[i])
              for (let i = 3, len = item.sections.length; i < len; i++) mark.fold.push(item.sections[i])
            }
            this.notes.push({...info, ...mark, noteVisible: false, sections})
          })
          this.loading = false
        }
      }).catch(() => {
        this.loading = false
      })
    },
    highLight (notesUuid, itemUuid, flag) {
      const data = {
        highlight: !flag,
        notes: notesUuid,
        user: this.$store.getters.uuid
      }
      toHighlight(itemUuid, data).then(res => {
        if (res.status === 200) {
          this.notes = []
          this.getdata()
          const msg = flag ? 'Marked as not highlight successfully!' : 'Marked as highlight successfully!'
          this.$toast(msg, 1500)
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
          this.notes = []
          this.getdata()
          this.$toast('Put to trash successfully!', 1500)
        }
      })
    },
    clickImg (src) {
      if (!src) return
      this.imgSrc = src
      this.showImg = true
    },
    viewImg () {
      this.showImg = false
    }
  },
  mounted () {
    this.getdata()
  },
  filters: {
    formatDate
  }
}
</script>

<style lang="scss" scoped>
.notes {
  padding: 0 40px 100px;
}
.note {
  &-list {
    margin: auto;
    padding-right: 112px;
    max-width: 810px;
    &-header {
      font-family: PingFangSC-Medium, sans-serif;
      font-size: 20px;
      margin: 64px 0 16px;
      & h3 {
        max-width: 520px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      & a {
        color: #1a2270;
        text-decoration: none;
      }
      &-icon {
        color: #1a2270;
        display: block;
        float: right;
        font-size: 14px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        & svg {
          height: 10px;
          width: 20px;
        }
        &:hover { cursor: pointer; }
      }
    }
    &-footer {
      &-time, &-link {
        color: #999;
        display: inline-block;
        font-family: 'ArialMT', sans-serif;
        font-size: 14px;
      }
      &-link {
        max-width: 287px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        & a {
          color: #999;
          text-decoration: none;
          &:hover { text-decoration: underline; }
        }
      }
      &-box {
        color: #1a2270;
        float: right;
        transition: all .3s ease;
        &-icon {
          display: inline-block;
          text-align: center;
          transform-origin: center;
          transition: all .3s ease;
          width: 20px;
          & svg {
            height: 9px;
            vertical-align: 1px;
            width: 15px;
          }
          &:hover { color: #FF6E03; }
        }
        & .rotate {
          transform: rotate(180deg);
        }
        &:hover {
          color: #FF6E03;
          cursor: pointer;
        }
      }
    }
  }
}
.change-bg {
  background: #fff;
}
</style>
