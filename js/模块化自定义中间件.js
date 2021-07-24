const express = require('express');
//创建web服务器
const app = express();

const customBodyParser = require('./custom-body-parser');
app.use(customBodyParser);
app.post('/user', (req, res) => {
	res.send(req.body);
});
//调用app.listen(端口号,回调函数)，启动服务器
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080');
});
