const express = require('express');
const qs = require('querystring');
//创建web服务器
const app = express();

app.use((req, res, next) => {
	let str = '';
	req.on('data', (chunk) => {
		str += chunk;
	});
	req.on('end', () => {
		const body = qs.parse(str);
		req.body = body;
		next();
	});
});
app.post('/user', (req, res) => {
	res.send(req.body);
});
//调用app.listen(端口号,回调函数)，启动服务器
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080');
});
