## 安装

```
npm install yjl_tools
```

## 导入

```js
const tools = require('yjl_tools');
```

## 格式化时间

```js
//使用dateFormate对时间进行格式化
const dsStr = tools.dateFormate(new Date());
console.log(dtStr);
```

## 转义 html

```js
//待转换的HTML字符串
const htmlStr = '<h1 title="abc">这是标签<span>123&nbsp;</span></h1>';
//调用htmlEscape方法
const str = mytools.htmlEscape(htmlStr);
console.log(str);
```

## 还原 HTML 中的特殊字符串

```js
const str2 = mytools.htmlUnEscape(str);
console.log(str2);
```

## 开源协议

ISC
