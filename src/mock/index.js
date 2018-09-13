/*
 * @Author: likang xie 
 * @Date: 2018-08-15 11:35:19 
 * @Purpose: 模拟数据
 */

const Mock = require('mockjs');
const domain = 'http://mockjs.com/api';

// 主页
const homeData = require('./index/home');
const pathData = require('./index/path');
const codeData = require('./index/code');
const courseData = require('./index/course');

// 详情
const codeDetail = require('./detail/code');
const courseDetail = require('./detail/course');


// 编写接口
Mock.mock(`${domain}/homeData`, 'get', homeData);
Mock.mock(`${domain}/pathData`, 'get', pathData);
Mock.mock(`${domain}/codeData`, 'get', codeData);
Mock.mock(`${domain}/courseData`, 'get', courseData);
Mock.mock(`${domain}/cdetail`, 'get', codeDetail);
Mock.mock(`${domain}/csdetail`, 'get', courseDetail);
