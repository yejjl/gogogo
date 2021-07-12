//动画函数
function animate(obj, target, callback) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function () {
		var step = (target - obj.offsetLeft) / 10 //步长值
		if (obj.offsetLeft == target) {
			clearInterval(obj.timer)
			if (callback) callback()
		}
		obj.style.left = obj.offsetLeft + step + 'px'
	}, 15)
}
