/*
 * @Author: likang xie 
 * @Date: 2018-08-15 14:33:53 
 * @Purpose: 主页->课程模块数据
 */

const Mock = require('mockjs');
const Random = Mock.Random;
const code = 200;

const courseData = req => {

  let typelist = ['前沿技术', '前端开发', '后端开发', '移动开发', '算法&数学', '云计算&大数据', '人工智能'];
  let courselist = [];

  // 生成标签
  for (let i = 0; i < typelist.length; i++) {
    let data = {
      title: typelist[i],
      content: {
        typelist: [],
        courselist: []
      }
    }
    // 生成类型
    let tlen = Random.natural(0, 10);
    for (let i = 0; i < tlen; i++) {
      let type = {
        icon: Random.dataImage('40x40', ''),
        text: Random.word(5, 10)
      }
      data.content.typelist.push(type)
    }

    // 生成课程
    let clen = Random.natural(2, 10);
    for (let i = 0; i < clen; i++) {
      let course = {
        icon: Random.dataImage('100x90', ''),
        title: Random.title(3, 10),
        type: '免费课程',
        level: '中级',
        people: Random.natural(1000, 4000)
      }
      data.content.courselist.push(course)
    }
    courselist.push(data);
  }

  return {
    code,
    data: {
      courselist
    }
  }
}

module.exports = courseData;
