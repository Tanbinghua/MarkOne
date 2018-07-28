<template>
  <!-- <transition name="fade"> -->
  <div class="img-view">
    <div class="img-layer" @click="bigImg"></div>
    <div class="img">
      <img :src="imgSrc">
    </div>
  </div>
  <!-- </transition> -->
</template>
<script>
export default {
  props: ['imgSrc'],
  methods: {
    bigImg () {
      this.$emit('clickit')
    }
  }
}
</script>
<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: all .2s linear;
  transform: translate3D(0, 0, 0);
}
.fade-enter,
.fade-leave-active {
  transform: translate3D(100%, 0, 0);
} */

.img-view {
  height: 100%;
  position: inherit;
  width: 100%;
}
.img-view .img-layer {
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 999;
}
.img-view .img {
  display: block;
  left: 50%;
  margin: auto;
  max-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>
