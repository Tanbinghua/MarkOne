<template>
  <div class="notes">
    <no-data v-if="loading || !notes.length" :loading="loading" :nodata="!loading && !notes.length"></no-data>
    <div class="note-list" v-for="note in notes" :key="note.id">
      <div class="note-list-header">
        <span class="note-list-header-icon">
          Copy all
          <!-- <icon-svg icon-class="option"></icon-svg> -->
        </span>
        <h3 :id="note.id"><a :href="'#' + note.id">{{ note.title }}</a></h3>
      </div>
      <collapse-transition>
        <sortable-list v-model="note.sections" @sortStart="sortstart" @sortEnd="sortend" @sortMove="sortmove"
          :useDragHandle="true" lockAxis="y" helperClass="change-bg" v-show="true">
          <sortable-item v-for="(item, index) in note.sections"
            :index="index" :key="item.uuid" :item="item.remark"
            :isHighlight="item.highlight" :img="item.image"></sortable-item>
        </sortable-list>
      </collapse-transition>
      <div class="note-list-footer">
        <p class="note-list-footer-box" @click="note.noteVisible = !note.noteVisible">{{ note.noteVisible ? 'Fold' : 'More' }} <span :class="{'note-list-footer-box-icon': true, rotate: !note.noteVisible}"><icon-svg icon-class="down"></icon-svg></span></p>
        <p class="note-list-footer-time">Edited:&nbsp;{{ note.updated_at | formatDate }}</p>
        <p class="note-list-footer-link">&nbsp;&nbsp;From:&nbsp;<a :href="note.origin" target="_blank"><span>{{ note.origin }}</span></a></p>
      </div>
    </div>
  </div>
</template>

<script>
import SortableList from '../components/SortableList'
import SortableItem from '../components/SortableItem'
import CollapseTransition from '../components/Collapse'
import NoData from '../components/Nodata'
import { getNotes } from '../api/interface'
import { formatDate } from '../utils/tools'

export default {
  data () {
    return {
      notes: [],
      loading: false
    }
  },
  components: {
    SortableList,
    SortableItem,
    CollapseTransition,
    NoData
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
          this.notes = res.data.results
          this.loading = false
        }
      }).catch(() => {
        this.loading = false
      })
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
      // position: sticky;
      // position: -webkit-sticky;
      // top: 0;
      // z-index: 1;
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
        // width: 30px;
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
      &-link a {
        color: #999;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      &-box {
        color: #1a2270;
        float: right;
        transition: all .3s ease;
        &-icon {
          display: inline-block;
          height: 20px;
          text-align: center;
          transform-origin: center;
          transition: all .3s ease;
          vertical-align: bottom;
          width: 20px;
          & svg {
            height: 9px;
            vertical-align: middle;
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
