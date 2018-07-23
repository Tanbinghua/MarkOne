<template>
  <div class="notes">
    <div class="note-list" v-for="note in notes" :key="note.id">
      <div class="note-list-header">
        <span class="note-list-header-icon"><icon-svg icon-class="option"></icon-svg></span>
        <h3 :id="note.id"><a :href="'#' + note.id">{{ note.title }}</a></h3>
      </div>
      <collapse-transition>
        <sortable-list v-model="note.items" @sortStart="sortstart" @sortEnd="sortend" @sortMove="sortmove"
          :useDragHandle="true" lockAxis="y" helperClass="change-bg" v-show="note.noteVisible">
          <sortable-item v-for="(item, index) in note.items"
            :index="index" :key="item.id" :item="item.value"></sortable-item>
        </sortable-list>
      </collapse-transition>
      <div class="note-list-footer">
        <p class="note-list-footer-box" @click="note.noteVisible = !note.noteVisible">{{ note.noteVisible ? 'Fold' : 'More' }} <span :class="{'note-list-footer-box-icon': true, rotate: !note.noteVisible}"><icon-svg icon-class="down"></icon-svg></span></p>
        <p class="note-list-footer-time">Created:&nbsp;{{ note.date }}</p>
        <p class="note-list-footer-link">&nbsp;&nbsp;From:&nbsp;<a :href="note.fromUrl" target="_blank"><span>{{ note.fromUrl }}</span></a></p>
      </div>
    </div>
  </div>
</template>

<script>
import SortableList from '../components/SortableList'
import SortableItem from '../components/SortableItem'
import CollapseTransition from '../components/Collapse'
import { getNotes } from '../api/interface'

export default {
  data () {
    return {
      notes: [
        {
          id: '1',
          title: 'The Universe in a Nutshell',
          items: [
            { id: 1, value: 'Labeling involves putting a name to something. Instead of thinking, "He made a mistake," you might label your neighbor as "an idiot."' },
            { id: 3, value: 'Siaomi' },
            { id: 4, value: 'Sometimes we see things as being black or white: Perhaps you have two categories of coworkers in your mind—the good ones and the bad ones. It\'s easy to take one particular event and generalize it to the rest of our life. If you failed to close one deal, you may decide, "I\'m bad at closing deals." Labeling involves putting a name to something. ' },
            { id: 8, value: 'hello world' }
          ],
          date: 'Jun 11, 2018',
          fromUrl: 'https://baidu.com',
          noteVisible: true
        },
        {
          id: '2',
          title: 'Lorem ipsum dolor sit amet',
          items: [
            { id: 1, value: 'Labeling involves putting a name to something. Instead of thinking, "He made a mistake," you might label your neighbor as "an idiot."' },
            { id: 3, value: 'Siaomi' },
            { id: 4, value: 'Sometimes we see things as being black or white: Perhaps you have two categories of coworkers in your mind—the good ones and the bad ones. It\'s easy to take one particular event and generalize it to the rest of our life. If you failed to close one deal, you may decide, "I\'m bad at closing deals." Labeling involves putting a name to something. ' },
            { id: 8, value: 'hello world' }
          ],
          date: 'Jun 11, 2018',
          fromUrl: 'https://baidu.com',
          noteVisible: true
        },
        {
          id: '3',
          title: 'Sed tempor nisl a lorem consequat',
          items: [
            { id: 1, value: 'Labeling involves putting a name to something. Instead of thinking, "He made a mistake," you might label your neighbor as "an idiot."' },
            { id: 3, value: 'Siaomi' },
            { id: 4, value: 'Sometimes we see things as being black or white: Perhaps you have two categories of coworkers in your mind—the good ones and the bad ones. It\'s easy to take one particular event and generalize it to the rest of our life. If you failed to close one deal, you may decide, "I\'m bad at closing deals." Labeling involves putting a name to something. ' },
            { id: 8, value: 'hello world' }
          ],
          date: 'Jun 11, 2018',
          fromUrl: 'https://baidu.com',
          noteVisible: true
        }
      ]
    }
  },
  components: {
    SortableList,
    SortableItem,
    CollapseTransition
  },
  methods: {
    sortstart () {
    },
    sortmove () {
    },
    sortend () {
    },
    getdata () {
      getNotes().then(res => {
        if (res.data) {
          console.log(res.data)
        }
      })
    }
  },
  mounted () {
    // this.getdata()
  }
}
</script>

<style lang="scss" scoped>
.notes {
  padding: 0 16% 6.7% 6.7%;
}
.note {
  &-list {
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
        display: block;
        float: right;
        height: 31px;
        text-align: center;
        width: 30px;
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
        color: #1a2270;
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
            height: 6px;
            vertical-align: middle;
            width: 10px;
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
