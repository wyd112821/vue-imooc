/*
 * @Author: likang xie 
 * @Date: 2018-08-22 11:32:14 
 * @Purpose: 状态管理
 */

import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(vuex)

export default new vuex.Store({
  state,
  actions,
  mutations
})
