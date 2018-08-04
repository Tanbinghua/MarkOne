<template>
  <div class="sign">
    <div class="sign-box">
      <div class="sign-box-title"><span class="sign-box-title-text">{{ state === 0 ? 'Join Mark One' : state === 1 ? 'Sign in' : state === 5 ? 'Congratulation!' : 'Reset password'}}</span></div>
      <div class="sign-box-google" v-if="state === 0 || state === 1">
        <span class="sign-box-google-icon"><icon-svg icon-class="google"></icon-svg></span>
        <g-signin-button
          class="sign-box-google-text"
          :params="googleSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError">
          Sign in with Google
        </g-signin-button>
      </div>
      <div class="sign-box-other" v-if="state === 0 || state === 1">
        <span class="sign-box-other-border left"></span>
        <p class="sign-box-other-text">or</p>
        <span class="sign-box-other-border right"></span>
      </div>
      <div class="sign-box-tip" v-if="state >= 2">
        <p v-if="state === 2">Plesase provide the email you used, we will send an email to reset your password. </p>
        <p v-if="state === 3">An email with password reset instructions has been sent to your email address, if it exists in our system.</p>
        <p v-if="state === 5">You have successfully reset your password :)</p>
      </div>
      <div class="sign-box-form" v-if="state === 0">
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Nickname" v-model="nickname"></div>
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Email" v-model="email" @input="checkEmail"></div>
        <div class="sign-box-form-input">
          <input :type="eye ? 'text' : 'password'" name="" placeholder="Password" v-model="password" @input="checkPassword(1)">
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
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Eamil" v-model="signinEmail"></div>
        <div class="sign-box-form-input">
          <input :type="eye ? 'text' : 'password'" name="" placeholder="Password" v-model="signinPassword" @input="warning = null">
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
        <div class="sign-box-form-input"><input type="text" name="" placeholder="Eamil" v-model="signinEmail"></div>
        <div class="sign-box-form-warning signup">
          <p v-if="warning === 'forget'">
            <span class="sign-box-form-warning-icon"><icon-svg icon-class="warning"></icon-svg></span>
            <span class="sign-box-form-warning-text">Invalid email address</span>
          </p>
        </div>
      </div>
      <div class="sign-box-form" v-if="state === 4">
        <div class="sign-box-form-text">{{ signinEmail }}</div>
        <div class="sign-box-form-input">
          <input :type="eye ? 'text' : 'password'" name="" placeholder="Password" v-model="resetPassword" @input="checkPassword(2)">
          <span class="sign-box-form-input-icon" @click="eye = !eye"><icon-svg :icon-class="eye ? 'eye' : 'no-eye'"></icon-svg></span>
        </div>
        <div class="sign-box-form-warning signup">
          <p v-if="warning === 'password'">
            <span class="sign-box-form-warning-icon"><icon-svg icon-class="warning"></icon-svg></span>
            <span class="sign-box-form-warning-text">Please use 6+ characters</span>
          </p>
        </div>
      </div>
      <div class="sign-box-signin" v-if="state === 0">
        <p class="sign-box-signin-text">Already have an account?&nbsp;</p>
        <button class="sign-box-signin-btn" @click="reset(1)">Sign in.</button>
      </div>
      <div class="sign-box-btn">
        <button v-if="state === 0" @click="signup">Register</button>
        <button v-else-if="state === 1" @click="signin">Sign in</button>
        <button v-else-if="state === 2" @click="sendEmail">Send email</button>
        <button v-else-if="state === 4" @click="resetPass">Reset password</button>
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
      <div class="sign-box-help" v-if="state === 2 || state === 3 || state === 4">
        <p>Please contact <a href="mailto:markone_support@163.com?subject=Feedback%20for%20Mark%20One">markone_support@163.com</a> for help if necessary.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { signUp, signIn, checkUser, forgetPassword, resetPassword, loginGoogle } from '../api/interface'

export default {
  data () {
    return {
      nickname: null,
      email: null,
      password: null,
      signinEmail: null,
      signinPassword: null,
      state: 1,
      warning: null,
      eye: false,
      timer: true,
      resetPassword: null,
      googleSignInParams: {
        client_id: '728616517590-om5s9j1llfcbaru8t5al706r2tu5faqo.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    signup () {
      if (!this.nickname || !this.email || !this.password || this.warning) {
        alert('Please make sure your information is complete and correct!')
        return
      }
      const data = {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      }
      signUp(data).then(res => {
        if (res.status === 201) {
          this.reset()
          this.$store.commit({
            type: 'SET_USER_INFO',
            info: JSON.stringify(res.data)
          })
          this.$router.push('/notes')
        }
      })
    },
    signin () {
      if (!this.signinEmail || !this.signinPassword || this.warning) {
        alert('Please make sure your information is complete and correct!')
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
          this.$router.push('/notes')
        }
      }).catch(() => {
        this.warning = 'signin'
      })
    },
    onSignInSuccess (googleUser) {
      const profile = googleUser.getBasicProfile()
      const data = {
        email: profile.getEmail(),
        name: profile.getName(),
        avatar: profile.getImageUrl(),
        token: googleUser.getAuthResponse().id_token
      }
      loginGoogle(data).then(res => {
        if (res.status === 200) {
          this.$store.commit({
            type: 'SET_USER_INFO',
            info: JSON.stringify(res.data)
          })
          this.$router.push('/notes')
        }
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
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
    checkPassword (flag) {
      if (!this.timer) return
      this.timer = false
      setTimeout(() => {
        if ((flag === 1 && this.password.length <= 6) || (flag === 2 && this.resetPassword.length <= 6)) this.warning = 'password'
        else this.warning = null
        this.timer = true
      }, 1000)
    },
    sendEmail () {
      if (!this.signinEmail) {
        alert('Please input your email!')
        return
      }
      this.state = 3
      forgetPassword({email: this.signinEmail}).then(res => {
        if (res.data) {
          alert(res.data.msg)
          this.reset(4)
        }
      }).catch(() => {
        this.reset(2)
        this.warning = 'forget'
      })
    },
    resetPass () {
      const data = {
        email: this.signinEmail,
        password: this.resetPassword
      }
      resetPassword(data).then(res => {
        if (res.data) {
          this.reset(5)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    reset (state) {
      this.nickname = null
      this.email = null
      this.password = null
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
    height: 617px;
    left: 50%;
    min-width: 464px;
    padding-top: 64px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 464px;
    &-title {
      margin: auto;
      width: 320px;
      &-text {
        border-bottom: 2px solid #FF6E03;
        color: #1A2270;
        display: inline-block;
        font-family: PingFangSC-Semibold, sans-serif;
        font-size: 18px;
        padding: 6px;
      }
    }
    &-google {
      background: #fff;
      line-height: 48px;
      margin: 50px auto 0;
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
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        margin-left: 10px;
        outline: none;
        &:hover { cursor: pointer; }
      }
    }
    &-other {
      margin-top: 25px;
      text-align: center;
      &-border {
        display: inline-block;
        height: 1px;
        vertical-align: middle;
        width: 114px;
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
      padding: 8px 0 24px 0;
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
      &-text {
        color: #666;
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
    &-signin {
      font-size: 14px;
      margin: 16px 0;
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
    & > .signin { margin-bottom: 44px; }
  }
}
</style>
