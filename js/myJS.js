//动画函数
function animate(obj, target, callback) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var step = (target - obj.offsetLeft) / 10; //步长值
		if (obj.offsetLeft == target) {
			clearInterval(obj.timer);
			if (callback) callback();
		}
		obj.style.left = obj.offsetLeft + step + 'px';
	}, 15);
}

//Ajax函数

//处理对象
function resolveData(data) {
	var arr = [];
	for (let k in data) {
		var str = k + '=' + data[k];
		arr.push(str);
	}
	return arr.join('&');
}

//
function myAjax(options) {
	var xhr = new XMLHttpRequest();
	//拼接查询字符串
	var qs = resolveData(options.data);

	xhr.timeout = options.timeout;
	xhr.ontimeout = function () {
		console.log('请求超时');
	};

	//判断get 还是post
	if (options.method.toUpperCase() === 'GET') {
		xhr.open(options.method, options.url + '?' + qs);
		xhr.send();
	} else if (options.method.toUpperCase() === 'POST') {
		xhr.open(options.method, options.url);
		xhr.setRequestHeader(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);
		xhr.send(qs);
	}

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var result = JSON.parse(xhr.responseText);
			options.success(result);
		}
	};
}

//格式化时间
function dateFormat(dtStr) {
	const dt = new Date(dtStr);

	const y = dt.getFullYear();
	const m = padZero(dt.getMonth() + 1);
	const d = padZero(dt.getDate());

	const hh = padZero(dt.getHours());
	const mm = padZero(dt.getMinutes());
	const ss = padZero(dt.getSeconds());

	return `${y}-${m}-${d}-${hh}-${mm}-${ss}`;
}

function padZero(n) {
	return n > 9 ? n : '0' + n;
}

module.exports = {
	dateFormat,
};
