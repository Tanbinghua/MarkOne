<template>
  <transition name="fade">
    <div class="toast" v-show="show">{{ message }}</div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  background-color: rgba(26,34,112,0.80);
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  left: 50%;
  margin-left: -50px;
  padding: 15px;
  position: fixed;
  text-align: center;
  bottom: 160px;
  width: 160px;
  z-index: 999;
}

.fade-enter-active, .fade-leave-active{
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
.fade-leave-active {
  opacity: 0;
  transform: scale(0.8);
}
@media screen and (max-width: 752px) {
  .toast {
    margin-left: -230px;
  }
}
</style>
