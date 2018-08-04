<template>
  <div class="google">
    <button ref="customBtn" type="button">Google登录</button>
    <div id="name"></div>
    <button type="button" @click="signOut()">Sign out</button>
  </div>
</template>

<script>
import { loginGoogle } from '../api/interface'

export default {
  data () {
    return {
      auth2: null
    }
  },
  methods: {
    startApp () {
      window.gapi.load('auth2', () => {
        this.auth2 = window.gapi.auth2.init({
          client_id: '728616517590-om5s9j1llfcbaru8t5al706r2tu5faqo.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile'
        })
        this.attachSignin()
      })
    },
    attachSignin () {
      this.auth2.attachClickHandler(this.$refs.customBtn, {}, (googleUser = {}) => {
        document.getElementById('name').innerHTML = 'Signed in: ' + googleUser.getBasicProfile().getName()
        const profile = this.auth2.currentUser.get().getBasicProfile()
        // console.log('ID Token: ' + idToken)
        const data = {
          email: profile.getEmail(),
          name: profile.getName(),
          avatar: profile.getImageUrl(),
          token: googleUser.getAuthResponse().id_token
        }
        loginGoogle(data).then(res => {
          if (res.data) {
            console.log(res.data)
          }
        })
      }, (err) => {
        console.log(JSON.stringify(err, undefined, 2))
      })
    },
    signOut () {
      const auth = window.gapi.auth2.getAuthInstance()
      auth.signOut().then(() => {
        console.log('Uer signed out.')
      })
    }
  },
  mounted () {
    this.startApp()
  }
}
</script>
