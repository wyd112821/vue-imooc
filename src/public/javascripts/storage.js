/*
 * @Author: likang xie 
 * @Date: 2018-08-21 19:33:25 
 * @Purpose: 本地存储操作
 */

let storage = (function () {

  let st = null;

  if (!window.localStorage) {
    throw new Error('sorry, your browser is not suport localStorage!')
  } else {
    st = window.localStorage
  }

  let set = function (key, val) {
    if (typeof val == 'object') {
      val = JSON.stringify(val);
    }
    st.setItem(key, val);
  }

  let get = function (key) {
    return st.getItem(key);
  }

  let clear = function () {
    st.clear();
  }

  return {
    set,
    get,
    clear
  }

})()

export default storage
