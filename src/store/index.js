import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: null,
    avatar: null,
    created_at: null,
    email: null,
    phone: null,
    last_login: null,
    name: null,
    type: null,
    is_admin: false,
    uuid: null,
    searchVal: null
  },
  mutations: {
    SET_USER_INFO (state, info) {
      let JSONinfo = JSON.parse(info.info)
      state.nickname = JSONinfo.nickname
      state.avatar = JSONinfo.avatar
      state.created_at = JSONinfo.created_at
      state.email = JSONinfo.email
      state.phone = JSONinfo.phone
      state.last_login = JSONinfo.last_login
      state.name = JSONinfo.name
      state.type = JSONinfo.type
      state.is_admin = JSONinfo.is_admin
      state.uuid = JSONinfo.uuid
    },
    SET_SEARCH_VAL (state, val) {
      state.searchVal = val.val
    }
  },
  getters
})
