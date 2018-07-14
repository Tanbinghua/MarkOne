<template>
  <div class="aside">
    <h3 class="title">Markone</h3>
    <div class="new">
      <button class="new-btn" @click="change"><span class="new-btn-icon">＋</span>New Note</button>
    </div>
    <div class="nav">
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'notes'}" @click="tab = 'notes'">
        <p class="nav-list-text"><span class="nav-list-text-icon"></span><span>Notes</span></p>
      </div>
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'highlights'}" @click="tab = 'highlights'">
        <p class="nav-list-text"><span class="nav-list-text-icon"></span><span>Highlights</span></p>
      </div>
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'trash'}" @click="tab = 'trash'">
        <p class="nav-list-text"><span class="nav-list-text-icon"></span><span>Trash</span></p>
      </div>
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
// @font-face {
//   font-family: Skia-Regular_Bold;
//   src: url("../assets/Skia_Regular.ttf");
// }

.aside {
  box-shadow: 10px 0 15px -6px rgba(0, 0, 0, 0.3);
  background: #fff;
  height: 100%;
  min-width: 260px;
  max-width: 320px;
  text-align: center;
  width: 22.2%;
}
.title {
  color: #1a2270;
  // font-family: Skia-Regular_Bold;
  font-size: 36px;
  margin: 33px 0 68px;
}
.new {
  margin-bottom: 45px;
  &-btn {
    background-image: linear-gradient(-270deg, #FF9524 0%, #FF6E03 100%);
    border: none;
    border-radius: 32px;
    box-shadow: 0 3px 4px 0 #FBB37D;
    color: #fff;
    font-size: 20px;
    line-height: 48px;
    outline: none;
    transition: all .4s ease;
    width: 216px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
    &-icon {
      font-size: 22px;
      margin-right: 25px;
    }
  }
}
.nav {
  &-list {
    color: #1a2270;
    font-size: 20px;
    margin: 0 auto;
    line-height: 66px;
    transition: all .4s ease;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    &-active {
      color: #ff6e03;
    }
    &-text {
      display: inline-block;
      text-align: left;
      width: 216px;
      &-icon {
        background: #ccc;
        display: inline-block;
        height: 30px;
        margin: 0 25px 0 35px;
        vertical-align: sub;
        width: 30px;
      }
    }
  }
}
</style>
