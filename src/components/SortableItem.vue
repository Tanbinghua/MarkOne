<template>
  <li v-if="!isTrash" :class="{'list-item': true, 'has-left-radius': isHighlight, 'border-left-radius': isHighlight}">
    <div v-if="img" :class="{'list-item-img-box': true, 'border-left-radius': isHighlight}">
      <img :src="img" alt="Markone" class="list-item-img" @click="$emit('clickShowImg')">
    </div>
    <p v-else class="list-item-text">{{item}}</p>
    <div class="list-item-delete" @click="$emit('toTrash')" title="Move to trash"><span>✖</span></div>
    <div class="list-item-box">
      <span class="list-item-box-icon" @click="highlight" :title="isHighlight ? 'Unmark' : 'Mark'">
        <icon-svg :icon-class="isHighlight ? 'highlighted' : 'highlight'"></icon-svg>
      </span>
      <span :class="{'list-item-box-icon': true, 'ban': !isVideo}" title="Return to video">
        <a v-if="isVideo" :href="jumpLink" class="list-item-box-icon-link" target="_blank"></a>
        <icon-svg icon-class="back-to-video"></icon-svg>
      </span>
      <!-- <span class="list-item-box-icon" v-handle></span> -->
    </div>
  </li>
</template>

<script>
// import { ElementMixin, HandleDirective } from 'vue-slicksort'

export default {
  // mixins: [ElementMixin],
  props: ['item', 'isHighlight', 'img', 'isVideo', 'origin', 'startTime', 'isTrash'],
  // directives: { handle: HandleDirective },
  methods: {
    highlight () {
      this.$emit('tohighlight')
    }
  },
  computed: {
    jumpLink () {
      if (this.origin.indexOf('?') !== -1) return this.origin + '&t=' + this.startTime + 's'
      else return this.origin + '?t=' + this.startTime + 's'
    }
  }
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
    display: block;
    width: 100%;
    &:hover {
      cursor: zoom-in;
    }
    &-box {
      border-radius: 8px;
      max-height: 200px;
      overflow: hidden;
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
      &-link {
        height: 100%;
        display: inline-block;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
      }
    }
    & .ban { cursor: not-allowed; }
    &-icon:nth-of-type(1) svg {
      height: 28px;
      width: 22px;
    }
    &-icon:nth-of-type(2) svg {
      height: 26px;
      width: 30px;
    }
  }
  &-delete {
    background: rgba(26,34,112,0.10);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.3);
    display: none;
    height: 25px;
    line-height: 25px;
    right: 4px;
    position: absolute;
    text-align: center;
    top: 4px;
    width: 25px;
    &:hover { cursor: pointer; }
  }
  &:hover {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:hover > &-img-box {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:hover > &-box {
    background: rgba(26,34,112,0.10);
    border-radius: 0;
    right: -112px;
  }
  &:hover > &-delete { display: block; }
}
</style>
