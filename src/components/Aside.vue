<template>
  <div class="aside">
    <h3 class="title">Markone</h3>
    <div class="new">
      <button class="new-btn" @click="change"><span class="new-btn-icon"><icon-svg icon-class="new"></icon-svg></span>New Note</button>
    </div>
    <div class="nav">
      <div :class="{'nav-list': true, 'nav-list-active': tab === ''}" @click="tab = ''">
        <router-link class="nav-list-link" to="/">
          <p class="nav-list-text"><span class="nav-list-text-icon"><icon-svg icon-class="notes"></icon-svg></span><span>Notes</span></p>
        </router-link>
      </div>
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'highlight'}" @click="tab = 'highlight'">
        <router-link class="nav-list-link" to="/highlight">
          <p class="nav-list-text"><span class="nav-list-text-icon">
            <icon-svg :icon-class="tab === 'highlight' ? 'highlight-signed' : 'highlight-unsign'" ></icon-svg>
          </span><span>Highlights</span></p>
        </router-link>
      </div>
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'trash'}" @click="tab = 'trash'">
        <router-link class="nav-list-link" to="/trash">
          <p class="nav-list-text"><span class="nav-list-text-icon"><icon-svg icon-class="trash"></icon-svg></span><span>Trash</span></p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: this.$route.path.substring(1)
    }
  },
  methods: {
    change () {
      console.log(this.tab)
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
  z-index: 2;
}
.title {
  color: #1a2270;
  font-family: sans-serif;
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
    font-family: PingFangSC-Semibold, sans-serif;
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
      margin-right: 25px;
      & svg {
        height: 24px;
        vertical-align: sub;
        width: 24px;
      }
    }
  }
}
.nav {
  &-list {
    font-family: PingFangSC-Semibold, sans-serif;
    font-size: 20px;
    margin: 0 auto;
    line-height: 66px;
    transition: all .4s ease;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    &-link {
      color: #1a2270;
      text-decoration: none;
    }
    &-active a {
      color: #ff6e03;
    }
    &-text {
      display: inline-block;
      text-align: left;
      width: 216px;
      &-icon {
        display: inline-block;
        height: 30px;
        margin: 0 25px 0 35px;
        vertical-align: text-bottom;
        width: 30px;
        & svg {
          height: 32px;
          vertical-align: super;
          width: 32px;
        }
      }
    }
  }
}
</style>
