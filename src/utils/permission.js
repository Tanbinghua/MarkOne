import router from '../router/index'

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    if (localStorage.getItem('name')) next()
    else next({ path: '/sign' })
  }
})
