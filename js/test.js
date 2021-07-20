//传统方法
// const time = require('./myJS');

// const dt = new Date();
// console.log(dt);

// const newDT = time.dateFormat(dt);
// console.log(newDT);

//npm方法
const moment = require('moment');
const dt = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(dt);
