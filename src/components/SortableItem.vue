<template>
  <li class="list-item">
    <!-- <span class="delete">X</span> -->
    {{item}}
    <!-- <span v-handle class="handle">三</span> -->
  </li>
</template>

<script>
import { ElementMixin, HandleDirective } from 'vue-slicksort'

export default {
  mixins: [ElementMixin],
  props: ['item'],
  directives: { handle: HandleDirective }
}
</script>

<style lang="scss" scoped>
.list-item {
  background: #fff;
  border-radius: 8px;
  color: #666;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 16px 0;
  position: relative;
  padding: 24px 50px;
  &:hover .handle, &:hover .delete {
    background: #eee;
    display: inline-block;
  }
}
.handle, .delete {
  display: none;
  color: #666;
  background: transparent;
  transition: all 3s ease;
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
