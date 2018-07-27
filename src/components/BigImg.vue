<template>
  <transition name="fade">
   <div class="img-view">
    <div class="img-layer" @click="bigImg"></div>
    <div class="img">
      <img :src="imgSrc">
    </div>
   </div>
  </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: all .2s linear;
  transform: translate3D(0, 0, 0);
}
.fade-enter,
.fade-leave-active {
  transform: translate3D(100%, 0, 0);
}

.img-view {
  position: inherit;
  width: 100%;
  height: 100%;
}
.img-view .img-layer {
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img-view .img img {
  max-width: 100%;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  z-index: 1000;
}
</style>
