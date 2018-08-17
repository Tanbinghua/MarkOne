import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: _import('Index') },
    {
      path: '',
      component: _import('Home'),
      children: [
        { path: '/notes', name: 'Notes', component: _import('Notes') },
        { path: '/detail/:uuid', name: 'NoteDetailUuid', component: _import('Notes') },
        { path: '/highlight', name: 'HighLight', component: _import('Highlight') },
        { path: '/trash', name: 'Trash', component: _import('Trash') },
        { path: '/search', name: 'Search', component: _import('Search') }
      ]
    },
    { path: '/sign', name: 'Sign', component: _import('Sign') },
    { path: '/faq', name: 'Account', component: _import('Account') },
    { path: '/terms', name: 'Terms', component: _import('Terms') },
    { path: '/privacy', name: 'Privacy', component: _import('Privacy') },
    { path: '*', redirect: '/error' },
    { path: '/error', name: 'Error', component: _import('Error') }
  ]
})
