/*
 * @Author: likang xie 
 * @Date: 2018-08-15 14:33:53 
 * @Purpose: 主页->路径模块数据
 */

const Mock = require('mockjs');
const Random = Mock.Random;
const code = 200;

const pathData = req => {

  let classlist = [];
  for (let i = 0; i < 20; i++) {
    let clas = {
      id: i,
      icon: Random.dataImage('160x70', ''),
      title: Random.cword(10, 15),
      step: Random.natural(1, 5),
      classnum: Random.natural(1, 20),
      people: Random.natural(2000, 3000),
      money: Random.natural(200, 300),
    }
    classlist.push(clas);
  }

  return {
    code,
    data: {
      classlist
    }
  }
}

module.exports = pathData;
