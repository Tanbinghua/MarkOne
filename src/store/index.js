import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: null,
    avatar: null,
    create_at: null,
    email: null,
    phone: null,
    last_login: null,
    name: null,
    type: null,
    is_admin: false
  },
  mutations: {
    SET_USER_INFO (state, info) {
      let JSONinfo = JSON.parse(info.info)
      state.nickname = JSONinfo.nickname
      state.avatar = JSONinfo.avatar
      state.create_at = JSONinfo.create_at
      state.email = JSONinfo.email
      state.phone = JSONinfo.phone
      state.last_login = JSONinfo.last_login
      state.name = JSONinfo.name
      state.type = JSONinfo.type
      state.is_admin = JSONinfo.is_admin
    }
  },
  getters
})
