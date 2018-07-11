<template>
  <li class="list-item">
    <span class="delete" v-if="showDelete">X</span>
    {{item}}
    <span v-handle class="handle" v-if="showHandle">三</span>
  </li>
</template>

<script>
import { ElementMixin, HandleDirective } from 'vue-slicksort'

export default {
  mixins: [ElementMixin],
  props: ['item', 'showHandle', 'showDelete'],
  directives: { handle: HandleDirective }
}
</script>

<style scoped>
.list-item {
  border: 1px solid #fff;
  display: block;
  position: relative;
  padding: 15px 0 15px 50px;
}
.handle, .delete {
  background: #eee;
  display: inline-block;
  color: #666;
  padding: 5px 10px;
  position: absolute;
}
.handle {
  right: 5px;
  top: 8px;
}
.delete {
  left: 5px;
  top: 8px;
}
.handle:hover {
  cursor: move;
}
.delete:hover {
  cursor: pointer;
}
</style>
