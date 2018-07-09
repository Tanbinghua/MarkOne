<template>
  <div class="home">
    <div class="main">
      <my-header></my-header>
      <router-view></router-view>
    </div>
    <my-aside></my-aside>
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
