export const formatDate = (str) => {
  if (!str) return ''
  let date = new Date(str)
  let arr = date.toString().split(' ')
  return arr[1] + ' ' + arr[2] + ', ' + arr[3]
}

export const clickoutside = {
  bind (el, binding, vnode) {
    function documentHandler (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
