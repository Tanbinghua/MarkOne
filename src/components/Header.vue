<template>
  <div class="header">
    <div class="avatar">
      <div class="avatar-box" v-clickoutside="hideSelect">
        <div class="avatar-div">
          <div class="avatar-box-shadow"></div>
          <img class="avatar-box-img" :src="avatar" alt="User's avatar" @click="selectShow = true">
        </div>
        <transition name="fade">
          <div class="avatar-box-option" v-show="selectShow">
            <p @click="$router.push('/faq')">Help Center</p>
            <p @click="$router.push('/faq')">Feedback</p>
            <p @click="$router.push('/faq')">About us</p>
            <p @click="signout">Sign out</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="search">
      <div class="search-box">
        <span class="search-box-icon"><icon-svg icon-class="search"></icon-svg></span>
        <input class="search-box-input" type="text" placeholder="Search" v-model="searchVal" @keyup.enter="searchNote">
        <span class="search-box-border"></span>
        <span class="search-box-clear" v-if="searchVal" @click="searchVal = ''">✕</span>
      </div>
    </div>
  </div>
</template>

<script>
import { signOut } from '../api/interface'
import { clickoutside } from '../utils/tools'

export default {
  data () {
    return {
      avatar: this.$store.getters.avatar,
      email: this.$store.getters.email,
      selectShow: false,
      searchVal: null,
      timer: true
    }
  },
  methods: {
    searchNote () {
      if (!this.searchVal) return
      this.$store.commit({
        type: 'SET_SEARCH_VAL',
        val: this.searchVal
      })
      this.searchVal = ''
      if (this.$router.path !== '/search') this.$router.push('/search')
    },
    signout () {
      signOut().then(res => {
        if (res.status === 204) {
          this.$router.push('sign')
          this.$store.commit({
            type: 'SET_USER_INFO',
            info: JSON.stringify({})
          })
        }
      })
    },
    hideSelect () {
      if (this.selectShow) this.selectShow = false
    }
  },
  directives: { clickoutside }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 60px 0 40px;
}
.search {
  margin: auto;
  padding-right: 92px;
  max-width: 800px;
  &-box {
    border-bottom: 1px solid #ccc;
    display: flex;
    height: 32px;
    margin: 16px 40px 23px 16px;
    position: relative;
    transition: all .3s ease;
    &-icon {
      height: 24px;
      margin: 4px 16px 4px 0;
      text-align: center;
      width: 24px;
      & svg {
        height: 16px;
        vertical-align: -4px;
        width: 16px;
      }
    }
    &-input {
      border: none;
      color: #555;
      flex: 1;
      font-size: 14px;
      line-height: 32px;
      outline: none;
      &:focus { border-color: #ff6e03; }
      &:focus + .search-box-border { transform: scaleX(1); }
    }
    &-clear {
      line-height: 32px;
      position: absolute;
      right: 10px;
      &:hover { cursor: pointer; }
    }
    &-border {
      background: #ff6e03;
      bottom: -1px;
      height: 1px;
      left: 0%;
      position: absolute;
      transform: scaleX(0);
      transition: all .5s ease;
      width: 100%;
      z-index: 1;
    }
    &:hover { border-color: #aaa; }
  }
}
.avatar {
  float: right;
  &-box {
    border-radius: 28px;
    height: 56px;
    margin: 7px auto;
    position: relative;
    width: 56px;
    &-shadow {
      background-image: radial-gradient(50% 50%, #FF6E03 50%, #FFFFFF 100%);
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: all .3s ease;
      width: 100%;
      z-index: -1;
    }
    &-img {
      border-radius: 20px;
      height: 40px;
      margin: 8px;
      width: 40px;
    }
    &-option {
      background: #fff;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      font-family: PingFangSC-Light, sans-serif;
      left: -52px;
      overflow: hidden;
      position: absolute;
      top: 65px;
      width: 160px;
      z-index: 9;
      & p {
        color: #666;
        font-size: 14px;
        padding: 10px 20px;
        text-align: center;
        transition: all .3s ease;
        &:hover {
          background: rgba(26,34,112,0.10);
          color: #FF6E03;
          cursor: pointer;
        }
      }
      & p:last-child { border-top: 1px solid rgba(0, 0, 0, 0.1); }
    }
  }
  &-div {
    &:hover {
      cursor: pointer;
    }
    &:hover > .avatar-box-shadow { opacity: 1; }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
