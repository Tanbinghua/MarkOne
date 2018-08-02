import router from '../router'
import store from '../store'
import { userInfo } from '../api/interface'

router.beforeEach((to, from, next) => {
  if (to.path === '/sign') {
    userInfo().then(res => {
      if (res.status === 200) {
        next('/')
      }
    }).catch(() => {
      next()
    })
  } else if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    if (!store.getters.email) {
      userInfo().then(res => {
        if (res.data) {
          store.commit({
            type: 'SET_USER_INFO',
            info: JSON.stringify(res.data)
          })
          next()
        }
      }).catch(err => {
        if (err) {
          next('/index')
        }
      })
    } else {
      next()
    }
  }
})

const whiteList = ['/terms', '/privacy', '/error', '/index', '/faq']
