<template>
  <div class="notes">
    <div>
      <h3 @click="noteVisible = !noteVisible">The Universe in a Nutshell</h3>
      <transition name="slide">
        <sortable-list v-model="items" @sortStart="sortstart" @sortEnd="sortend" @sortMove="sortmove"
          :useDragHandle="true" lockAxis="y" helperClass="change-bg" v-show="noteVisible">
          <sortable-item v-for="(item, index) in items" :showHandle="showHandle" :showDelete="showDelete"
            :index="index" :key="item.id" :item="item.value"></sortable-item>
        </sortable-list>
      </transition>
      <p>Created:&nbsp;{{ date }}</p>
      <p>From: <a :href="fromUrl" target="_blank"><span>{{ fromUrl }}</span></a></p>
    </div>
  </div>
</template>

<script>
import SortableList from '../components/SortableList'
import SortableItem from '../components/SortableItem'

export default {
  data () {
    return {
      items: [
        { id: 1, value: 'iPhone' },
        { id: 2, value: 'Sansun' },
        { id: 3, value: 'Siaomi' },
        { id: 4, value: 'HuaWei' },
        { id: 5, value: 'Vivio' },
        { id: 6, value: 'Oppo' },
        { id: 7, value: 'Houner' },
        { id: 8, value: 'hello world' }
      ],
      date: 'Jun 11, 2018',
      fromUrl: 'https://baidu.com',
      showHandle: true,
      showDelete: true,
      noteVisible: true
    }
  },
  components: {
    SortableList,
    SortableItem
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

<style>
.change-bg {
  background: #fff;
}

@keyframes identifier {
 from {transform: translateY(100%);}
 to {transform: translateY(0%);}
}
@keyframes against {
 from {transform: translateY(0%);}
 to {transform: translateY(100%);}
}
.slide-enter-active {
  animation: identifier .4s;
}
.slide-leave-active {
  animation: against .4s;
}
</style>
