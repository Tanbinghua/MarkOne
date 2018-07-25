<template>
  <li :class="{'list-item': true, 'has-left-radius': isHighlight, 'border-left-radius': isHighlight}">
    <img v-if="img" :src="img" alt="Markone" :class="{'list-item-img': true, 'border-left-radius': isHighlight}">
    <p v-else class="list-item-text">{{item}}</p>
    <div class="list-item-box">
      <span class="list-item-box-icon">
        <icon-svg :icon-class="isHighlight ? 'highlighted' : 'highlight'"></icon-svg>
      </span>
      <span class="list-item-box-icon">
        <icon-svg icon-class="back-to-video"></icon-svg>
      </span>
      <!-- <span class="list-item-box-icon" v-handle></span> -->
    </div>
  </li>
</template>

<script>
import { ElementMixin, HandleDirective } from 'vue-slicksort'

export default {
  mixins: [ElementMixin],
  props: ['item', 'isHighlight', 'img'],
  directives: { handle: HandleDirective }
}
</script>

<style lang="scss" scoped>
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
  position: relative;
  &-text {
    padding: 24px 32px;
  }
  &-img {
    border-radius: 8px;
    display: block;
    width: 100%;
    &:hover {
      cursor: zoom-in;
    }
  }
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
      position: relative;
      text-align: center;
      transition: all .3s ease;
      &:hover {
        background: #FEECDC;
        cursor: pointer;
        opacity: 1;
      }
      & svg {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &-icon:nth-of-type(1) svg {
      height: 28px;
      width: 22px;
    }
    &-icon:nth-of-type(2) svg {
      height: 26px;
      width: 30px;
    }
  }
  &:hover {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:hover > &-img {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:hover > &-box {
    border-radius: 0;
    right: -112px;
  }
}
</style>
