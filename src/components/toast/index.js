import ToastComponent from './Toast'

const Toast = {}

/**
 * @method 注册插件
 * @param {Function}
 */
Toast.install = (Vue) => {
  const ToastConstructor = Vue.extend(ToastComponent)
  const instance = new ToastConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  /**
   * @method 提示框
   * @param {String} msg
   * @param {Number} duration
   */
  Vue.prototype.$toast = (msg, duration = 2000) => {
    instance.message = msg
    instance.show = true
    setTimeout(() => {
      instance.show = false
    }, duration)
  }
}

export default Toast
