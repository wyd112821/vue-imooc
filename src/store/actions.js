/*
 * @Author: likang xie 
 * @Date: 2018-08-22 11:34:50 
 * @Purpose: 分发
 */

export default {
  set_userInfo(context, userInfo) {
    context.commit('set_userInfo', userInfo)
  },
  set_shopCartInfo(context, shopCartInfo) {
    context.commit('set_shopCartInfo', shopCartInfo)
  },
  set_toast(context, toast) {
    context.commit('set_toast', toast)
  },
  // add(context) {
  //   context.commit('add')
  // },
  // delete(context, index) {
  //   context.commit('delete', index)
  // },
  // clear(context) {
  //   context.commit('clear')
  // }
}
