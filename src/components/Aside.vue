<template>
  <div :class="{aside: true, 'slide-to-left': slide && screenWidth <= 752}" v-clickoutside="handleClose">
    <div class="aside-logo"><img src="../assets/logo.png" alt=""></div>
    <!-- <div class="new">
      <button class="new-btn" @click="change"><span class="new-btn-icon"><icon-svg icon-class="new"></icon-svg></span>New Note</button>
    </div> -->
    <div class="nav">
      <div :class="{'nav-list': true, 'nav-list-active': tab === ''}" @click="toLink('')">
        <router-link class="nav-list-link" to="/">
          <p class="nav-list-text"><span class="nav-list-text-icon"><icon-svg icon-class="notes"></icon-svg></span><span>Notes</span></p>
        </router-link>
      </div>
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'highlight'}" @click="toLink('highlight')">
        <router-link class="nav-list-link" to="/highlight">
          <p class="nav-list-text"><span class="nav-list-text-icon">
            <icon-svg :icon-class="tab === 'highlight' ? 'highlight-signed' : 'highlight-unsign'" ></icon-svg>
          </span><span>Highlights</span></p>
        </router-link>
      </div>
      <div :class="{'nav-list': true, 'nav-list-active': tab === 'trash'}" @click="toLink('trash')">
        <router-link class="nav-list-link" to="/trash">
          <p class="nav-list-text"><span class="nav-list-text-icon"><icon-svg icon-class="trash"></icon-svg></span><span>Trash</span></p>
        </router-link>
      </div>
    </div>
    <div class="nav-icon" @click="slide = !slide">
      <span class="nav-icon-box"><icon-svg icon-class="menu"></icon-svg></span>
    </div>
  </div>
</template>

<script>
import { clickoutside } from '../utils/tools'

export default {
  data () {
    return {
      screenWidth: document.body.clientWidth,
      slide: false,
      timer: false
    }
  },
  computed: {
    tab: {
      get () {
        return this.$route.path.substring(1)
      },
      set () {}
    }
  },
  methods: {
    handleClose () {
      if (this.slide) this.slide = false
    },
    toLink (str) {
      this.tab = str
      this.slide = false
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        if (this.screenWidth > 752) this.slide = false
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 1000)
      }
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  directives: {
    clickoutside
  }
}
</script>

<style lang="scss" scoped>
.aside {
  box-shadow: 10px 0 15px -6px rgba(0, 0, 0, 0.2);
  background: #fff;
  font-size: 18px;
  height: 100%;
  min-width: 288px;
  text-align: center;
  width: 288px;
  z-index: 2;
  &-logo { margin-bottom: 97px; }
}

.slide-to-left {
  transform: translate(0, 0);
  transition: all 0.4s ease;
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
      background: rgba(26,34,112,0.10);
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
        height: 24px;
        margin: 0 25px 0 35px;
        vertical-align: text-bottom;
        width: 24px;
        & svg {
          height: 24px;
          vertical-align: top;
          width: 24px;
        }
      }
    }
  }
  &-icon {
    box-shadow: 10px 0 15px -6px rgba(0, 0, 0, 0.2);
    display: none;
    left: 288px;
    position: absolute;
    top: 85px;
    &-box {
      background: #fff;
      border-radius: 0 8px 8px 0;
      display: inline-block;
      padding: 10px 12px;
      & svg {
        height: 14px;
        width: 14px;
      }
    }
    &:hover { cursor: pointer; }
  }
}
</style>
