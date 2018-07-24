import router from '../router/index'
import store from '../store/index'

router.beforeEach((to, from, next) => {
  if (to.path === '/sign') {
    if (sessionStorage.getItem('nickname')) {
      next('/')
    } else {
      next()
    }
  } else if (to.path === '/error') {
    next()
  } else {
    if (!sessionStorage.getItem('nickname') || sessionStorage.getItem('nickname') === '') {
      next('/sign')
    } else {
      if (store.state.user_info.nickname === '') {
        userInfo().then(res => {
          if (res.data) {
            store.commit({
              type: 'setUserInfo',
              info: JSON.stringify(res.data)
            })
          }
        }).catch(err => {
          next('/sign')
        })
      }
      next()
    }
  }
})
