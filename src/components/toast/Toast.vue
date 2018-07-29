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
  background-color: rgba(26,34,112,0.60);
  border-radius: 25px;
  color: #fff;
  font-size: 16px;
  left: 50%;
  margin-left: -200px;
  padding: 15px;
  position: fixed;
  text-align: center;
  top: 70%;
  width: 400px;
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
</style>
