// //传统方法
// const time = require('../yjl_tools');

// const dt = new Date();
// console.log(dt);

// const newDT = time.dateFormat(dt);
// console.log(newDT);

// //npm方法
// // const moment = require('moment');
// // const dt = moment().format('YYYY-MM-DD HH:mm:ss');
// // console.log(dt);
// // console.log(typeof moment);

// //转义html
// const mytools = require('../yjl_tools');
// const htmlStr = '<h1 title="abc">这是标签<span>123&nbsp;</span></h1>';

// const str = mytools.htmlEscape(htmlStr);
// console.log(str);

// //还原html
// const str2 = mytools.htmlUnEscape(str);
// console.log(str2);

// //导入
// const express = require('express');

// //创建web服务器
// const app = express();

// //监听get请求
// //get
// app.get('/user', function (req, res) {
// 	res.send({ name: 'zs', age: '18', gender: '男' });
// });
// //post
// app.post('/user', function (req, res) {
// 	res.send('请求成功');
// });
// //获取查询参数
// app.get('/', (req, res) => {
// 	console.log(req.query);
// 	res.send(req.query);
// });
// //获取动态参数
// app.get('/user/:id', function (req, res) {
// 	console.log(req.params);
// 	res.send(req.params);
// });
// //对外提供静态资源
// app.use(express.static('./js'));
// //调用app.listen(端口号,回调函数)，启动服务器
// app.listen(8080, () => {
// 	console.log('express server running at http://127.0.0.1:8080');
// });
//导入
// const express = require('express');

// //创建web服务器
// const app = express();

// //调用app.listen(端口号,回调函数)，启动服务器
// app.listen(8080, () => {
// 	console.log('express server running at http://127.0.0.1:8080');
// });
// const mysql = require('mysql');
// const db = mysql.createPool({
// 	host: '127.0.0.1',
// 	user: 'root',
// 	password: '0000',
// 	database: 'test',
// });
// //测试
// db.query('select 1', (err, results) => {
// 	if (err) return console.log(err.message);

// 	console.log(results);
// });

// const user_in = { id: 3, username: 'ccc', password: '2222', status: 1 };
// const sqlStr2 =
// 	'insert into user (id,username,password,status) values(?,?,?,?)';
// db.query(
// 	sqlStr2,
// 	[user_in.id, user_in.username, user_in.password, user_in.status],
// 	(err, results) => {
// 		if (err) return console.log(err.message);
// 		if (results.affectedRows === 1) {
// 			console.log('插入成功');
// 		}
// 	}
// );

// db.query('update user set status =1 where id=?', 3, (err, results) => {
// 	if (err) return console.log(err.message);
// 	if (results.affectedRows === 1) {
// 		console.log('删除成功');
// 	}
// });
