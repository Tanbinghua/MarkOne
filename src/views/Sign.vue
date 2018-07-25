<template>
  <div class="sign">
    <div class="sign-box">
      <p class="sign-box-title">{{ state ? 'Join Mark One' : 'Sign in'}}</p>
      <div class="sign-box-google">
        <span class="sign-box-google-icon"></span>
        <button class="sign-box-google-text" @click="signout">Sign in with Google</button>
      </div>
      <div class="sign-box-other">
        <span class="sign-box-other-border left"></span>
        <p class="sign-box-other-text">or</p>
        <span class="sign-box-other-border right"></span>
      </div>
      <div class="sign-box-form" v-if="state">
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Nickname" v-model="nickname"></div>
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Email" v-model="email"></div>
        <div class="sign-box-form-input"><input type="password" name="" placeholder="Password" v-model="passworld"></div>
      </div>
      <div class="sign-box-form" v-if="!state">
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Eamil" v-model="signinEmail"></div>
        <div class="sign-box-form-input"><input type="password" name="" placeholder="Password" v-model="signinPassword"></div>
        <div class="sign-box-form-tip"><a href="javascript:void(0)">Forgot password?</a></div>
      </div>
      <div class="sign-box-signin" v-if="state">
        <p class="sign-box-signin-text">Already have an account?&nbsp;</p>
        <button class="sign-box-signin-btn" @click="reset">Sign in.</button>
      </div>
      <div class="sign-box-btn">
        <button v-if="state" @click="signup">Register</button>
        <button v-else @click="signin">Sign in</button>
      </div>
      <div class="sign-box-footer" v-if="state">
        <p>By creating an account，you agree with our&nbsp;</p>
        <a href="javascript:void(0)">Terms of Service</a>
        <p>&nbsp;and&nbsp;</p>
        <a href="javascript:void(0)">Privacy Policy</a>
        <p>.</p>
      </div>
      <div class="sign-box-footer" v-if="!state">
        <p>Don't have an account?</p>
        <br>
        <button class="sign-box-signin-btn" @click="reset">Create new account</button>
      </div>
    </div>
  </div>
</template>

<script>
import { signUp, signIn, signOut } from '../api/interface'

export default {
  data () {
    return {
      nickname: null,
      email: null,
      passworld: null,
      signinEmail: null,
      signinPassword: null,
      state: false
    }
  },
  methods: {
    signup () {
      const data = {
        nickname: this.nickname,
        email: this.email,
        passworld: this.passworld
      }
      signUp(data).then(res => {
        if (res.data) {
          alert('Success!')
          this.reset()
        }
      })
    },
    signin () {
      const data = {
        email: this.signinEmail,
        password: this.signinPassword
      }
      signIn(data).then(res => {
        if (res.data) {
          alert('Success!')
          localStorage.setItem('name', res.data.name)
          this.$router.push('/')
        }
      })
    },
    signout () {
      signOut().then(res => {
        console.log(res)
      })
    },
    reset () {
      this.nickname = ''
      this.email = ''
      this.passworld = ''
      this.signinEmail = ''
      this.signinPassword = ''
      this.state = !this.state
    }
  }
}
</script>

<style lang="scss" scoped>
.sign {
  height: 100vh;
  &-box {
    background: #f8f8f8;
    box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.2);
    border-radius: 32px;
    height: 634px;
    left: 50%;
    min-width: 560px;
    padding-top: 166px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 560px;
    &-title {
      color: #1A2270;
      font-family: PingFangSC-Semibold, sans-serif;
      font-size: 36px;
      text-align: center;
    }
    &-google {
      background: #fff;
      line-height: 48px;
      margin: 54px auto 0;
      width: 320px;
      text-align: center;
      &-icon {
        background: #fff;
        display: inline-block;
        height: 20px;
        vertical-align: bottom;
        width: 20px;
      }
      &-text {
        background: transparent;
        border: none;
        color: #999;
        font-size: 14px;
        outline: none;
        &:hover { cursor: pointer; }
      }
    }
    &-other {
      margin-top: 38px;
      text-align: center;
      &-border {
        display: inline-block;
        height: 1px;
        vertical-align: middle;
        width: 175px;
        &.left { background: linear-gradient(to right, #f8f8f8 , #999); }
        &.right { background: linear-gradient(to right, #999 , #f8f8f8); }
      }
      &-text {
        color: #999;
        display: inline-block;
        font-size: 14px;
        margin: auto 40px;
      }
    }
    &-form {
      padding: 8px 0 40px 0;
      text-align: center;
      & input {
        background: #fff;
        border: none;
        border-radius: 8px;
        color: #999;
        height: 40px;
        margin-top: 16px;
        padding-left: 16px;
        outline: none;
        width: 304px;
      }
      ::-webkit-input-placeholder {
        color: rgba(153,153,153,0.50);
        font-size: 14px;
      }
      &-tip {
        margin: 8px auto;
        text-align: right;
        width: 320px;
        & a {
          color: #999;
          text-decoration: none;
          &:active { color: #999; }
        }
      }
    }
    &-signin {
      font-size: 14px;
      margin: 24px 0;
      text-align: center;
      &-text {
        color: #999;
        display: inline-block;
      }
      &-btn {
        background: transparent;
        border: none;
        color: #FF6E03;
        outline: none;
        &:hover { cursor: pointer; }
      }
    }
    &-btn {
      text-align: center;
      & button {
        background: #FF6E03;
        border: 1px solid #FF6E03;
        border-radius: 8px;
        color: #fff;
        font-size: 18px;
        height: 48px;
        outline: none;
        width: 320px;
        &:hover { cursor: pointer; }
      }
    }
    &-footer {
      color: #999;
      font-size: 14px;
      margin: 16px auto;
      text-align: center;
      width: 300px;
      & p { display: inline-block; }
      & a {
        color: #999;
        &:active { color: #999; }
      }
    }
  }
}
</style>
