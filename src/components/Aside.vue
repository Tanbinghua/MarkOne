<template>
  <div class="aside">
    <h3 class="title">Markone</h3>
    <div class="new">
      <button class="new-btn" @click="change">＋&nbsp;&nbsp;&nbsp;&nbsp;New Note</button>
    </div>
    <div class="nav">
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'notes'}" @click="tab = 'notes'"><p>Notes</p></div>
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'highlights'}" @click="tab = 'highlights'"><p>Highlights</p></div>
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'trash'}" @click="tab = 'trash'"><p>Trash</p></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'notes'
    }
  },
  methods: {
    change () {
      console.log('hello')
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  box-shadow: 10px 0 15px -6px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 320px;
}
.title {
  color: #1a2270;
  font-size: 36px;
  margin: 33px 0 68px;
}
.new {
  margin-bottom: 45px;
  &-btn {
    background: #ff6e03;
    border: none;
    border-radius: 32px;
    color: #fff;
    font-size: 20px;
    line-height: 48px;
    outline: none;
    transition: all .4s ease;
    width: 216px;
    &:hover {
      background: rgba(255, 110, 3, 0.8);
      cursor: pointer;
    }
  }
}
.nav {
  &-list {
    color: #1a2270;
    font-size: 20px;
    line-height: 66px;
    transition: all .4s ease;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    &-active {
      color: #ff6e03;
    }
  }
}
</style>
