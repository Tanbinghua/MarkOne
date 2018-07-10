<template>
  <div class="home">
    <my-aside></my-aside>
    <div class="main">
      <my-header></my-header>
      <router-view class="container"></router-view>
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
.aside {
  width: 200px;
}
.main {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.header {
  height: 100px;
}
.container {
  flex: 1;
}
</style>
