<template>
  <div class="sign">
    <div class="sign-box">
      <p class="sign-box-title">{{ state === 0 ? 'Join Mark One' : state === 1 ? 'Sign in' : state === 4 ? 'Congratulation!' : 'Reset password'}}</p>
      <div class="sign-box-google" v-if="state === 0 || state === 1">
        <span class="sign-box-google-icon"><icon-svg icon-class="google"></icon-svg></span>
        <button class="sign-box-google-text">Sign in with Google</button>
      </div>
      <div class="sign-box-other" v-if="state === 0 || state === 1">
        <span class="sign-box-other-border left"></span>
        <p class="sign-box-other-text">or</p>
        <span class="sign-box-other-border right"></span>
      </div>
      <div class="sign-box-tip" v-if="state >= 2">
        <p v-if="state === 2">Plesase provide the email you used, we will send an email to reset your password. </p>
        <p v-if="state === 3">An email with password reset instructions has been sent to your email address, if it exists in our system.</p>
        <p v-if="state === 4">You have successfully reset your password :)</p>
      </div>
      <div class="sign-box-form" v-if="state === 0">
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Nickname" v-model="nickname" @keyup.enter="signup"></div>
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Email" v-model="email" @keyup.enter="signup" @input="checkEmail"></div>
        <div class="sign-box-form-input">
          <input :type="eye ? 'text' : 'password'" name="" placeholder="Password" v-model="passworld" @keyup.enter="signup" @input="checkPassword">
          <span class="sign-box-form-input-icon" @click="eye = !eye"><icon-svg :icon-class="eye ? 'eye' : 'no-eye'"></icon-svg></span>
        </div>
        <div class="sign-box-form-warning signup">
          <p v-if="warning === 'email'">
            <span class="sign-box-form-warning-icon"><icon-svg icon-class="warning"></icon-svg></span>
            <span class="sign-box-form-warning-text">Invalid email address</span>
          </p>
          <p v-if="warning === 'password'">
            <span class="sign-box-form-warning-icon"><icon-svg icon-class="warning"></icon-svg></span>
            <span class="sign-box-form-warning-text">Please use 6+ characters</span>
          </p>
        </div>
      </div>
      <div class="sign-box-form signin" v-if="state === 1">
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Eamil" v-model="signinEmail" @keyup.enter="signin"></div>
        <div class="sign-box-form-input">
          <input :type="eye ? 'text' : 'password'" name="" placeholder="Password" v-model="signinPassword" @keyup.enter="signin" @input="warning = null">
          <span class="sign-box-form-input-icon" @click="eye = !eye"><icon-svg :icon-class="eye ? 'eye' : 'no-eye'"></icon-svg></span>
        </div>
        <div class="sign-box-form-tip"><a href="javascript:void(0)" @click="reset(2)">Forgot password?</a></div>
        <div class="sign-box-form-warning signin">
          <p v-if="warning === 'signin'">
            <span class="sign-box-form-warning-icon"><icon-svg icon-class="warning"></icon-svg></span>
            <span class="sign-box-form-warning-text">Incorrect email or password</span>
          </p>
        </div>
      </div>
      <div class="sign-box-form" v-if="state === 2">
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Eamil" v-model="signinEmail" @keyup.enter="signin"></div>
      </div>
      <div class="sign-box-signin" v-if="state === 0">
        <p class="sign-box-signin-text">Already have an account?&nbsp;</p>
        <button class="sign-box-signin-btn" @click="reset(1)">Sign in.</button>
      </div>
      <div class="sign-box-btn">
        <button v-if="state === 0" @click="signup">Register</button>
        <button v-else-if="state === 1" @click="signin">Sign in</button>
        <button v-else-if="state === 2" @click="sendEmail(3)">Send email</button>
      </div>
      <div class="sign-box-footer" v-if="state === 0">
        <p>By creating an account，you agree with our&nbsp;</p>
        <router-link to="/terms">Terms of Service</router-link>
        <p>&nbsp;and&nbsp;</p>
        <router-link to="/privacy">Privacy Policy</router-link>
        <p>.</p>
      </div>
      <div class="sign-box-footer" v-if="state === 1">
        <p>Don't have an account?</p>
        <br>
        <button class="sign-box-signin-btn" @click="reset(0)">Create new account</button>
      </div>
      <div class="sign-box-help" v-if="state === 2 || state === 3">
        <p>Please contact <a href="">markone_support@163.com</a> for help if necessary.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { signUp, signIn, checkUser } from '../api/interface'

export default {
  data () {
    return {
      nickname: null,
      email: null,
      passworld: null,
      signinEmail: null,
      signinPassword: null,
      state: 1,
      warning: null,
      eye: false,
      timer: true
    }
  },
  methods: {
    signup () {
      if (!this.nickname || !this.email || !this.passworld || this.warning) {
        alert('Please make sure your information is complete and correct')
        return
      }
      const data = {
        nickname: this.nickname,
        email: this.email,
        passworld: this.passworld
      }
      signUp(data).then(res => {
        if (res.status === 201) {
          this.reset()
          this.$store.commit({
            type: 'SET_USER_INFO',
            info: JSON.stringify(res.data)
          })
          this.$toast('Sign up successfully!', 1500)
          this.$router.push('/')
        }
      })
    },
    signin () {
      if (!this.signinEmail || !this.signinPassword || this.warning) {
        alert('Please make sure your information is complete and correct')
        return
      }
      const data = {
        email: this.signinEmail,
        password: this.signinPassword
      }
      signIn(data).then(res => {
        if (res.status === 200) {
          this.$store.commit({
            type: 'SET_USER_INFO',
            info: JSON.stringify(res.data)
          })
          this.$toast('Sign in successfully!')
          this.$router.push('/')
        }
      }).catch(() => {
        this.warning = 'signin'
      })
    },
    checkEmail () {
      if (!this.timer) return
      this.timer = false
      setTimeout(() => {
        checkUser({email: this.email}).then(res => {
          if (res.data.result) this.warning = 'email'
          else this.warning = null
        })
        this.timer = true
      }, 1000)
    },
    checkPassword () {
      if (!this.timer) return
      this.timer = false
      setTimeout(() => {
        if (this.passworld.length <= 6) this.warning = 'password'
        else this.warning = null
        this.timer = true
      }, 1000)
    },
    sendEmail (state) {
      this.reset(state)
    },
    reset (state) {
      this.nickname = null
      this.email = null
      this.passworld = null
      this.signinEmail = null
      this.signinPassword = null
      this.warning = null
      this.state = state
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
        vertical-align: middle;
        width: 20px;
        & svg {
          height: 20px;
          vertical-align: top;
          width: 20px;
        }
      }
      &-text {
        background: transparent;
        border: none;
        color: #999;
        font-size: 14px;
        line-height: 20px;
        margin-left: 10px;
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
      &-input {
        & input {
          background: #fff;
          border: none;
          border-radius: 8px;
          color: #999;
          height: 40px;
          margin-top: 16px;
          padding-left: 16px;
          position: relative;
          outline: none;
          width: 304px;
        }
        &-icon {
          margin-top: 27px;
          position: absolute;
          right: 140px;
          & svg {
            height: 18px;
            width: 24px;
          }
          &:hover { cursor: pointer; }
        }
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
      &-warning {
        color: #D81E06;;
        font-size: 14px;
        position: absolute;
        text-align: center;
        width: 100%;
        &-icon svg {
          height: 16px;
          vertical-align: middle;
          width: 16px;
        }
        & P {
          margin: auto;
          width: 320px;
        }
      }
      & .signup {
        margin-top: 8px;
        & P { text-align: left; }
      }
      & .signin {
        margin-top: 24px;
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
    &-tip {
      color: #666;
      font-size: 14px;
      line-height: 20px;
      margin: 40px auto 24px;
      width: 323px;
    }
    &-help {
      bottom: 64px;
      color: #666;
      font-size: 14px;
      position: absolute;
      text-align: center;
      width: 100%;
      & a {
        color: #FF6E03;
        text-decoration: none;
        &:hover { text-decoration: underline; }
      }
    }
    & > .signin { margin-bottom: 54px; }
  }
}
</style>
