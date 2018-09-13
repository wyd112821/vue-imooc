/*
 * @Author: likang xie 
 * @Date: 2018-08-15 14:33:53 
 * @Purpose: 课程详情数据
 */

const Mock = require('mockjs');
const Random = Mock.Random;
const code = 200;

const courseData = req => {

  let data = {
    title: Random.cword(15, 20),
    intro: {
      level: '魔鬼',
      people: Random.natural(2000, 5000),
      rate: Random.float(5, 9),
      time: Random.natural(100, 200) + '分钟'
    },
    teacher: {
      avatar: Random.dataImage('50x50', ''),
      name: Random.cname(2, 3),
      type: '无敌工程师'
    },
    know: Random.cword(100, 200)
  }

  return {
    code,
    data: {
      courseData: data
    }
  }
}

module.exports = courseData;
