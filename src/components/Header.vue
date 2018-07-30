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
            <p>Help Center</p>
            <p>Feedback</p>
            <p>About us</p>
            <p @click="signout">Sign out</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="search">
      <div class="search-box">
        <span class="search-box-icon"><icon-svg icon-class="search"></icon-svg></span>
        <input class="search-box-input" type="text" placeholder="Search">
        <span class="search-box-border"></span>
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
      selectShow: false
    }
  },
  methods: {
    signout () {
      signOut().then(res => {
        if (res.status === 204) {
          this.$store.commit({
            type: 'SET_USER_INFO',
            info: JSON.stringify({})
          })
          this.$toast('Sign out successfully!', 1500)
          this.$router.push('sign')
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
    margin: 23px 40px 23px 30px;
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
    margin: 12px auto;
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
      top: 68px;
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
