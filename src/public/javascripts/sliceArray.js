/*
 * @Author: likang xie 
 * @Date: 2018-08-15 16:27:55 
 * @Purpose: 将数组拆成几个同等长度的数组
 */

export default function sliceArray(arr, size) {
  var result = [];
  for (var x = 0; x < Math.ceil(arr.length / size); x++) {
    var start = x * size;
    var end = start + size;
    result.push(arr.slice(start, end));
  }
  return result;
}
