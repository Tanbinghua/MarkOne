<template>
  <li :class="{'list-item': true, 'has-left-radius': isHighlight}">
    <p>{{item}}</p>
    <div class="list-item-box">
      <span class="list-item-box-icon"></span>
      <span class="list-item-box-icon"></span>
      <!-- <span class="list-item-box-icon" v-handle></span> -->
    </div>
  </li>
</template>

<script>
import { ElementMixin, HandleDirective } from 'vue-slicksort'

export default {
  mixins: [ElementMixin],
  props: ['item', 'isHighlight'],
  directives: { handle: HandleDirective }
}
</script>

<style lang="scss" scoped>
.has-left-radius {
  border-left: 4px solid #FF6E03;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.list-item {
  background: #fff;
  border-radius: 8px;
  color: #666;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
  position: relative;
  padding: 24px 50px;
  &-box {
    border-radius: 0 10px 10px 0;
    display: flex;
    height: 100%;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .3s ease;
    width: 112px;
    z-index: -1;
    &-icon {
      background: rgba(26,34,112,0.10);
      flex: 1;
      transition: all .3s ease;
      &:hover {
        background: #FEECDC;
        cursor: pointer;
        opacity: 1;
      }
    }
  }
  &:hover {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:hover > &-box {
    border-radius: 0;
    right: -112px;
  }
}
</style>
