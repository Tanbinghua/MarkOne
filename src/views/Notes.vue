<template>
  <div class="notes">
    <div class="note-list" v-for="note in notes" :key="note.id">
      <div class="note-list-header">
        <h3 @click="note.noteVisible = !note.noteVisible">{{ note.title }}</h3>
      </div>
      <collapse-transition>
        <sortable-list v-model="note.items" @sortStart="sortstart" @sortEnd="sortend" @sortMove="sortmove"
          :useDragHandle="true" lockAxis="y" helperClass="change-bg" v-show="note.noteVisible">
          <sortable-item v-for="(item, index) in note.items"
            :index="index" :key="item.id" :item="item.value"></sortable-item>
        </sortable-list>
      </collapse-transition>
      <p>Created:&nbsp;{{ note.date }}</p>
      <p>From: <a :href="note.fromUrl" target="_blank"><span>{{ note.fromUrl }}</span></a></p>
    </div>
  </div>
</template>

<script>
import SortableList from '../components/SortableList'
import SortableItem from '../components/SortableItem'
import CollapseTransition from '../components/Collapse'

export default {
  data () {
    return {
      notes: [
        {
          title: 'The Universe in a Nutshell',
          items: [ { id: 1, value: 'iPhone' }, { id: 3, value: 'Siaomi' }, { id: 4, value: 'HuaWei' }, { id: 8, value: 'hello world' } ],
          date: 'Jun 11, 2018',
          fromUrl: 'https://baidu.com',
          noteVisible: true
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          items: [ { id: 1, value: 'iPhone' }, { id: 3, value: 'Siaomi' }, { id: 4, value: 'HuaWei' }, { id: 8, value: 'hello world' } ],
          date: 'Jun 11, 2018',
          fromUrl: 'https://baidu.com',
          noteVisible: true
        },
        {
          title: 'Sed tempor nisl a lorem consequat',
          items: [ { id: 1, value: 'iPhone' }, { id: 3, value: 'Siaomi' }, { id: 4, value: 'HuaWei' }, { id: 8, value: 'hello world' } ],
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
    }
  }
}
</script>

<style lang="scss" scoped>
.notes {
  padding: 0 214px 100px 96px;
}
.note {
  &-list {
    &-header {
      background: #ccc;
      color: #fff;
      margin-top: 64px;
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      z-index: 1;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.change-bg {
  background: #fff;
}
</style>
