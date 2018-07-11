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
  width: 320px;
  text-align: center;
  box-shadow: 10px 0 15px -6px rgba(0, 0, 0, 0.3);
}
.title {
  margin: 33px 0 68px;
  font-size: 36px;
  color: #1a2270;
}
.new {
  margin-bottom: 45px;
  &-btn {
    width: 216px;
    line-height: 48px;
    background: #ff6e03;
    border: none;
    outline: none;
    border-radius: 32px;
    font-size: 20px;
    color: #fff;
    &:hover {
      cursor: pointer;
      background: rgba(255, 110, 3, 0.8);
    }
  }
}
.nav {
  &-list {
    line-height: 66px;
    font-size: 20px;
    color: #1a2270;
    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1);
    }
    &-active {
      color: #ff6e03;
    }
  }
}
</style>
