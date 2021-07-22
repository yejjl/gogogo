//传统方法
const time = require('../yjl_tools');

const dt = new Date();
console.log(dt);

const newDT = time.dateFormat(dt);
console.log(newDT);

//npm方法
// const moment = require('moment');
// const dt = moment().format('YYYY-MM-DD HH:mm:ss');
// console.log(dt);
// console.log(typeof moment);

//转义html
const mytools = require('../yjl_tools');
const htmlStr = '<h1 title="abc">这是标签<span>123&nbsp;</span></h1>';

const str = mytools.htmlEscape(htmlStr);
console.log(str);

//还原html
const str2 = mytools.htmlUnEscape(str);
console.log(str2);
