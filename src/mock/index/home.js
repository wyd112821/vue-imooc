/*
 * @Author: likang xie 
 * @Date: 2018-08-15 14:33:53 
 * @Purpose: 主页->首页模块的数据
 */

const Mock = require('mockjs');
const Random = Mock.Random;
const code = 200;

const homeData = req => {

  // 轮播图数据
  let bannerlist = [];
  for (let i = 0; i < 5; i++) {
    let banner = {
      image: Random.dataImage('900x300', '')
    }
    bannerlist.push(banner);
  }

  // 实战推荐数据
  let reclist = [];
  for (let i = 0; i < 5; i++) {
    let istop = i <= 1 ? true : false;
    let rec = {
      id: i,
      icon: Random.dataImage('300x200', ''),
      title: Random.cword(20, 30),
      level: '中级',
      people: Random.natural(2000, 3000),
      money: Random.natural(200, 300),
      istop
    }
    reclist.push(rec);
  }

  // 新上好客数据
  let newlist = [];
  for (let i = 0; i < 9; i++) {
    let istop = i <= 1 ? true : false;
    let ne = {
      id: i,
      icon: Random.dataImage('300x200', ''),
      title: Random.cword(20, 30),
      level: '入门',
      people: Random.natural(2000, 3000),
      money: Random.natural(200, 300),
    }
    newlist.push(ne);
  }

  // 猿问精选数据
  let wendalist = [];
  for (let i = 0; i < 3; i++) {
    let wenda = {
      id: i,
      title: Random.cword(20, 30),
      num: Random.natural(10, 20)
    }
    wendalist.push(wenda);
  }

  return {
    code,
    data: {
      bannerlist,
      reclist,
      newlist,
      wendalist
    }
  }
}

module.exports = homeData;
