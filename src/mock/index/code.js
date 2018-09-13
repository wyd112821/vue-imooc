/*
 * @Author: likang xie 
 * @Date: 2018-08-15 14:33:53 
 * @Purpose: 主页->实战模块数据
 */

const Mock = require('mockjs');
const Random = Mock.Random;
const code = 200;

const codeData = req => {

  let codelist = [];
  for (let i = 0; i < 20; i++) {
    let code = {
      id: i,
      icon: Random.dataImage('160x70', ''),
      title: Random.cword(10, 15),
      intro: Random.cword(20, 25),
      level: '爆炸级',
      people: Random.natural(2000, 3000),
      money: Random.natural(200, 300),
    }
    codelist.push(code);
  }

  return {
    code,
    data: {
      codelist
    }
  }
}

module.exports = codeData;
