<template>
  <div class="home">
    <my-aside></my-aside>
    <div class="main">
      <my-header></my-header>
      <transition name="fade" mode="out-in">
        <router-view class="container"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/Header'
import MyAside from '../components/Aside'

export default {
  data () {
    return {}
  },
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.main {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.container {
  background: #f8f8f8;
  flex: 1;
  overflow-y: scroll;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
