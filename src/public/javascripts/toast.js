/*
 * @Author: likang xie 
 * @Date: 2018-08-21 19:33:25 
 * @Purpose: toast提示组件操作
 */

import store from '../../store'

let toast = (function () {

  let timer = null

  let show = function (content) {

    // 清除定时器
    clearTimeout(timer)

    // 提交set_toast方法
    store.commit('set_toast', content)

    // 只显示3秒
    timer = setTimeout(() => {
      store.commit('set_toast', '')
    }, 3000)

  }

  return {
    show
  }

})()

export default toast
