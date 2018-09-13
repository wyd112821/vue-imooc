/*
 * @Author: likang xie 
 * @Date: 2018-08-15 14:33:53 
 * @Purpose: 实战详情数据
 */

const Mock = require('mockjs');
const Random = Mock.Random;
const code = 200;

const classData = req => {

  let data = {
    icon: Random.dataImage('100x100', ''),
    title: Random.cword(15, 20),
    content: Random.cword(30, 40),
    money: Random.natural(200, 300),
    intro: {
      level: Random.natural(5, 40) + '小时',
      people: Random.natural(2000, 5000),
      rate: Random.float(5, 9),
      disccount: Random.natural(100, 200)
    },
    teacher: {
      avatar: Random.dataImage('50x50', ''),
      name: Random.cname(2, 3),
      type: 'Web全栈工程师'
    },
    rate: {
      rate: [Random.float(5, 9), Random.float(5, 9), Random.float(5, 9), Random.float(5, 9)],
      commentlist: []
    }
  }

  // 图片介绍
  // let imagelist = [];
  // let len = Random.natural(1, 2);

  // for (let i = 0; i <= len; i++) {
  //   var image = Random.dataImage('300x400', '');
  //   imagelist.push(image);
  // }

  // data.imagelist = imagelist;

  // 章节
  let chapterlist = [];
  let clen = Random.natural(5, 10);

  for (let i = 1; i <= clen; i++) {
    let chapter = {
      title: `第${i}章 ${Random.cword(2, 10)}`,
    }

    let classlist = [];
    let calen = Random.natural(5, 10);
    for (let j = 1; j <= calen; j++) {
      let clas = `${i}-${j} ${Random.cword(2, 10)}`;
      classlist.push(clas)
    }

    chapter.classlist = classlist;
    chapterlist.push(chapter);
  }

  data.chapterlist = chapterlist;

  // 评价
  let rlen = Random.natural(1, 4);
  for (let i = 0; i <= rlen; i++) {
    let comment = {
      avatar: Random.dataImage('50x50', ''),
      name: Random.cname(2, 3),
      rate: Random.float(5, 9),
      comment: Random.cword(50, 70)
    }
    data.rate.commentlist.push(comment)
  }

  return {
    code,
    data: {
      classData: data
    }
  }
}

module.exports = classData;
