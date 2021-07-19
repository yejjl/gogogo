const http = require('http');
const server = http.createServer();

server.on('request', function (req, res) {
	//console.log('Someone visit our web server.');
	const url = req.url;
	let content = '404 Not Found';
	if (url === '/' || url === '/index.html') {
		content = '<h1>首页</h1>';
	} else if (url === '/about.html') {
		content = '<h1>关于页面</h1>';
	}
	const method = req.method;
	const str = `Your request url is ${url},and request method is ${method}`;
	//解决乱码
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	console.log(str);
	res.end(content);
});

server.listen(8080, function () {
	console.log('server running at http://127.0.0.1:8080');
});
