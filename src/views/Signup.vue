<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <label for="name">Name: </label><input type="text" name="name" id="name" v-model="name">
    <label for="nickName">NickName: </label><input type="text" name="nickname" id="nickName" v-model="nickname">
    <label for="email">Email: </label><input type="email" name="email" id="email" v-model="email">
    <label for="phone">Phone: </label><input type="tel" name="phone" id="phone" v-model="phone">
    <button @click="signup">Submit</button>
  </div>
</template>

<script>
import { signUp } from '../api/interface'

export default {
  data () {
    return {
      name: '',
      nickname: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    signup () {
      const data = {
        name: this.name,
        nickname: this.nickname,
        email: this.email,
        phone: this.phone
      }
      signUp(data).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
