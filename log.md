[toc]

# start

## css3 选择器

1. 属性选择器
   ![](media/img/属性选择器.png)
   类选择器、属性选择器、伪类选择器，权重为 10
2. 结构伪类结构选择器  
   ![](media/img/伪类结构选择器.png)

#### nth-child(n)

![](media/img/nth-child.png)
==能否实现:hover:nth-child(x)?==

## 伪元素选择器

```css
    //在内容前面插入内容
    ::before{
        content="插入的内容";//必需
    }
    //在内容后面插入内容
    ::after{
        content="插入的内容";//必需
    }

    //伪元素创建一个行内元素；
    //伪元素选择器权重为1；
```

## javascript

#### 浏览器执行过程

    js引擎将js语言逐行转为机  器语言。

#### js 组成

-   ECMAScript：规定了 js 编程语法和核心知识
-   DOM：文档模型
-   BOM：浏览器对象模型

#### 输入输出语句

-   prompt("输入框");//得到字符型
-   console.log("控制台输出");
-   alert("输出");

## 变量

用于存放数据的容器；
程序在内存中申请的一块存放数据的空间；

#### 变量的使用

1. 声明变量
    ```javascript
    var age;
    var age = 18;
    ```
2. 赋值
    ```javascript
    var age = 18;
    age = 18;
    ```

#### 声明变量的特殊情况

1. 只声明不赋值
    ```javascript
    var sex;
    console.log(sex);
    --undefined;
    ```
2. 不声明、不直接赋值直接使用
    ```javascript
    console.log(tel);
    --报错;
    ```
3. 不声明直接赋值使用
    ```javascript
        qq=110;
        console.log(qq);
        --110
    ```

#### 变量命名规范

-   由字母、数字、下划线、美元符号组成；
-   严格区分大小写；
-   不能以数字开头；
-   不能是关键字、保留字；
-   变量名必须有意义；
-   遵守驼峰命名法；

## 数据类型

根据占用数据空间区分数据类型；
变量会在程序运行过程中，根据等号右边的值来确定；
变量的数据类型可以变化；

#### 简单数据类型

| 类型      | 默认值    |
| :-------- | :-------- |
| number    | 0         |
| Boolean   | false     |
| String    | ""        |
| Undefined | undefined |
| Null      | null      |

1. Number
    - 数字以 0 开头为八进制；
    - 数字以 0x 开头为十六进制；
    - 数字范围 console.log(Number.MAX_VALUE)~console.log(Number.MIN_VALUE);
    - Infinity:无穷大
    - -Infinity:无穷小；
    - NaN：非数字
    - isNaN();：判断数字；是 false、否 true；
2. String
    - 语法：""\'';
    - 引号嵌套：避免内外同号；
    - 转义符要写到引号中
      |转义符|解释|
      |:---|:---|
      |\n|换行符|
      |\\\\|斜杠\|
      |\\'|单引号'|
      |\\"|双引号"|
      |\t|tab 缩进|
      |\b|空格|
    - 检测字符串长度
        ```javascript
        var str = 'my name is yyjj';
        console.log(str.length); //15
        ```
    - 字符串拼接
        ```javascript
        //字符串类型+任意类型=拼接后的字符串类型
        console.log('我' + 18); //我18
        console.log('12' + 18); //1218
        console.log('我' + 18 + 12); //我1812
        ```
3. Boolean
    - true 当 1 看；false 当 0 看
4. undefind
    - 声明不赋值，就是 undefined 未定义类型；
    - undefined 与数字相加，结果为 NaN；
5. null
    - 值为空；

#### typeof

```javascript
var num = 10;
console.log(typeof num); //number
```

#### 字符类型转换

-   转换为字符串
    |方式|案例|
    |:---|:---|
    |toString()|var num=1;alert(num.toString());|
    |String()强制转换|var num=1;alert(String(num));|
    |**加号拼接字符串**|var num=1;alert(num+'字符串');|
-   **转换为数字型**
    |方式|案例|
    |:---|:---|
    |parseInt(string)函数|parseInt("18");|
    |parseFloat(string)函数|parseFloat("18.8");|
    |Number()强制转换|Number('18')|
    |js 隐式转换（- \* /）|'12'-0|
-   转换为布尔型
    -   Boolean()函数
    -   false：""、0、NaN、null、undefined

## 运算符优先级

| 优先级 | 运算符     | 顺序           |
| :----- | :--------- | :------------- |
| 1      | 小括号     | ()             |
| 2      | 一元运算符 | ++ -- !        |
| 3      | 算术运算符 | ==先\*/%后+-== |
| 4      | 关系运算符 | > >= < <=      |
| 5      | 相等运算符 | == != === !==  |
| 6      | 逻辑运算符 | 先&& 后 \|\|   |
| 7      | 赋值运算符 | =              |
| 8      | 逗号运算符 | ,              |

## 流程控制

1. 顺序结构
   程序依据代码的先后顺序依次执行
2. 分支结构
   根据不同的条件，执行不同的代码，得到不同的结果

    - if

    ```javascript
        if(条件表达式){
            //执行语句
        }else if(){

        }else{

        }
        //三元运算表达式
        //条件表达式 ? 表达式1:表达式2
        //若条件表达式为真，则返回表达式1，否则返回表达式2
    ```

    - switch

    ```javascript
    switch (表达式) {
    	case value1:
    		执行语句1;
    		break;
    	case value2:
    		执行语句2;
    		break;
    	default:
    		执行语句;
    }
    //开发中表达式经常写成变量
    //表达式的结果和case的值相匹配时是全等（数值类型一致）
    //如果当前case没有break，则不会退出switch，继续执行下一个case
    ```

3. 循环结构
    - for
    - while
    - do...while
    - continue
      退出该次循环，执行下一次循环
    - break
      直接退出循环

## 命名规范

1. 标识符
    - 变量、函数的命名必须要有意义
    - 变量的名称一般用名词
    - 函数的名称一般用动词
2. 操作符
    - 操作符两侧各保留一个空格
3. 单行注释
   ’//‘ 后保留一个空格
4. 其他
   小括号外保留空格

## 数组

1. 创建

    1. new

    ```javascript
    var 数组名 = new Array();
    var arr = new Array(); //创建一个空数组；
    ```

    2. 利用数组字面量创建数组

    ```javascript
    var 数组名 = [];
    var 数组名 = ['a', 'b', 'c'];
    ```

2. 访问数组元素

    1. 数组索引（从 0 开始）

    ```javascript
    数组名[索引号];
    //超出的索引输出undefined
    ```

3. 遍历数组
   循环

4. 数组长度
   数组名.length

5. 数组转换为字符串
    ```javascript
    var arr = ['a', 'b', 'c'];
    var str = '';
    for (var i = 0; i < arr.length; i++) {
    	str += arr[i];
    }
    ```
6. 数组新增元素

    1. 修改 length 长度

    ```javascript
    var arr = ['a', 'b', 'c'];
    arr.length = 5;
    ```

    2. 修改索引

    ```javascript
    var arr = ['a', 'b', 'c'];
    arr[3] = 'd';

    arr[0] = 'e'; //也可以替换元素
    ```

    3. push

    ```javascript
    var arr = [1, 2, 3];
    arr.push(4);
    //在数组末尾添加
    ```

    4. unshift
       用法同 push，在数组头部添加新元素

7. 筛选数组

    1.

    ```javascript
    var arr = ['1', '2', '3'];
    var newArr = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
    	if (arr[i] > 1) {
    		newArr.push(arr[i]);
    		j++;
    	}
    }
    ```

    2.

    ```javascript
    var arr = ['1', '2', '3'];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
    	if (arr[i] > 1) {
    		newArr[newArr.length] = arr[i];
    	}
    }
    console.log(newArr);
    ```

8. 数组删除元素（去重）

    [数组去重](https://www.jb51.net/article/176903.htm)

    1. pop()

    ```javascript
    //删除数组最后一个元素
    arr.pop();
    //pop()返回值为删除的元素
    ```

    2. shift()
       用法同 pop()，删除第一个元素
    3. 去重
        ```javascript
        //遍历旧数组，然后拿旧数组去查询新数组
        function unique(arr) {
        	var newArr = [];
        	for (var i = 0; i < arr.length; i++) {
        		if (newArr.indexOf(arr[i]) === -1) {
        			newArr.push(arr[i]);
        		}
        	}
        	return newArr;
        }
        ```

9. 数组排序

    ```javascript
    var arr = [];
    arr.reserse(); //反转数组

    arr.sort(function (a, b) {
    	return a - b;
    	升序;
    	//return b-a;(降序)
    }); //冒泡排序
    ```

10. 获取索引

    ```javascript
    //indexOf(数组元素，[起始位置])
    arr.indexOf(数组元素); //只返回第一个满足条件的元素索引，若找不到返回-1
    lastIndexOf;
    ```

11. 数组转字符串

    ```javascript
        arr.toString();//逗号分隔

        arr.join();//逗号分隔
        arr.join(&);//&分隔
    ```

## arguments

不确定有多少个参数传递时，用 arguments 来获取，arguments 存储了所有传递过来 的实参；

## 函数的两种声明方式

1. 利用函数关键字自定义韩式（命名函数）

    ```javascript
    function fn() {}
    fn();
    ```

2. 函数表达式（匿名函数）

    ```javascript
    var 变量名 = function () {};
    变量名();
    ```

## JavaScript 作用域

    减少命名冲突

1. 全局作用域
   整个 script 标签 或 一个单独的 js 文件

2. 局部作用域
   在函数内部就是局部作用域

## 对象

    对象是一个具体的事物；无序的相关属性和方法的集合

-   属性：事物的特征
-   方法：事物的行为

#### 创建对象

1. 利用字面量创建

```javascript
//里面的属性或者方法我们采用键值对的形式
//多个属性或方法用逗号隔开
//方法冒号后跟一个匿名函数
//调用对象的属性：对象名.属性名、对象名['属性名']
//调用对象的方法：对象名.方法名()
var obj = {}; //创建一个空对象
var obj = {
	uname: '',
	age: '',
	sex: '',
	sauHi: function () {},
};
```

2. new Object 创建

```javascript
var obj = new Object();
obj.uname = '';
obj.age = '';
obj.sex = '';
obj.sayHi = function () {};
//利用等号赋值的方法添加对象的属性和方法
```

3. 利用构造函数创建
   前面的方法一次只能创建一个对象

```javascript
function 构造函数名() {
	this.属性 = 值;
	this.方法 = function () {};
}
new 构造函数名();
//构造函数名的首字母大写
//不需要return就可以返回结果
function Star(uname, age, sex) {
	this.uname = uname;
	this.age = age;
	this.sex = sex;
	this.sing = function (sang) {};
}
var ldh = new Star('刘德华', 18, '男');
ldh.sing('sang');
```

-   new 关键字执行过程
    1. 在内存中创建一个 koongduixinag
    2. this 就会指向刚才创建的空对象
    3. 执行构造函数里面的代码，给空对象添加属性和方法
    4. 返回这个对象
-   遍历对象
    for...in
    ```javascript
    //for (变量 in 对象)
    for (var k in obj) {
    	console.log(k); //输出属性名
    	console.log(obj[k]); //输出属性值
    }
    ```

## 内置对象

-   就是 js 语言自带的一些对象
-   MDN 查阅
-   封装自己的数学对象

```javascript
    var myMath = {
        PI: 3.141592653,
        max:function(){
            var max=arguments[0]
            for (varr i=1;i<arguments.length;i++){
                if(arguments[i]>max){
                    max=arguments[i];
                }
            }
            return max;
        }
    }
```

-   检测数组//instanceof 运算符
    ```javascript
        var arr=[]
        console.log(arr instanceOf Array)
    ```

## 基本包装类型

1. 字符串对象

    ```javascript
    var str = 'andy';
    console.log(str.length);
    //把简单数据类型包装成复杂数据类型
    var temp = new String('andy');
    //把临时变量的值给str
    str = temp;
    //销毁这个临时变量
    temp = null;
    ```

    - 字符串不可变

    ```
        //修改字符串的值时，本质是新开辟一个空间给新字符，原字符不改变
    ```

    - 求某个字符串出现的位置及次数

    ```javascript
    var str = 'abcoefoxyozzopp';
    var index = str.indexOf('o');
    while (index !== -1) {
    	console.log(index);
    	index = str.indexOf('o', index + 1);
    }
    ```

    - 根据位置返回字符

    ```javascript
    var str = 'andy';
    console.log(str.charAt(3));

    str[index]; //h5 新方法
    ```

    - 返回索引字符的 ASCII 值

    ```javascript
    console.log(str.charCodeAt(0)); //97
    ```

    - 拼接、截取字符串

    ```javascript
        concat(str1,str2)//等效于+

        substr('起始位置'，'截取长度')
    ```

    - replace

    ```javascript
    str.replace('被替换的字符', '替换的字符'); //只替换第一个字符
    while (str.indexOf('') !== -1) {}
    ```

    - splice

    ```javascript
    //字符串转数组
    str.splice('分隔符');
    ```

## 简单、复杂类型

1. 值类型：简单数据类型 string,number,boolean,undefined,null
    - null 简单数据类型，返回一个空对象 object
    - 存放在栈：由操作系统自动分配释放函数的参数等；
    - 栈中存放值
    - 传参时将值复制给形参，不影响外部变量
2. 引用类型：复杂数据类型，通过 new 关键字创建
    - 存放在堆：一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收
    - 栈中存放数据在堆中的地址
    - 传参时赋值栈中的地址给形参，外部变量会受到影响

## Web API 和 API

1. api
   给程序员提供的一种工具，以便轻松的实现想要完成的功能
2. Web API
   浏览器提供的一套操作浏览器功能和页面元素的 api（BOM\DOM）

#### DOM

    文档对象模型，处理可扩展标记语言的编程接口

##### DOM 树

1. 文档：一个页面就是一个文档，DOM 中用 document 表示
2. 元素：页面中所有标签都是元素，DOM 中用 element 表示
3. 节点：网页中所有内容都是节点，DOM 中用 node 表示
   ==dom 把以上内容都看作对象==

##### 获取元素

-   根据 id 获取
    document.getElementById(id)方法
    //返回的时元素对象

-   根据标签名获取
    document.getElementsByTagName(标签名)
    //返回的是获取的元素的对象集合，以伪元素形式存储
    element.getElementsByTagName(标签名)
    //获取某个元素内的标签

-   h5 新方法
    document.getElementsByClassName(class);
    document.querySelector();//返回指定选择器的第一个元素对象
    document.querySelectorAll();//指定选择器的所有元素对象集合

-   获取特殊元素
    -   body
        document.body
    -   html
        document.documentElement

##### 事件基础

事件：触发响应的机制

1. 事件三要素：

-   事件源
    事件触发的对象
-   事件类型
    事件如何触发
-   事件处理程序
    通过一个函数赋值的方式完成

2. 执行事件的步骤
    - 获取事件源
    - 注册事件
    - 添加事件处理程序

##### 操作元素

1. 改变元素内容

    - innerText:不识别 html 标签
    - innerHtml:识别 html 标签
    - 获取内容：元素.innerText\元素.innerHtml

2. 修改元素属性

    - 获取元素
    - 注册事件
    - 处理程序
      元素.属性='';

3. 修改样式属性
   元素.style.样式属性（驼峰）= '';

##### 节点操作

1. 父级节点
    ```javascript
    //最近的父节点，找不到返回空
    元素.parentNode;
    ```
2. 子节点

    ```javascript
    //所有的子节点，包含元素、文本节点
    元素.childNodes;

    //所有子元素节点
    元素.children;

    元素.firstElementChild; //ie9+

    元素.lastElementChild; //ie9+

    元素.children[0];
    元素.children[元素.children.length - 1];
    ```

3. 兄弟节点

    ```javascript
    //包含元素、文本节点
    元素.nextSibling;
    元素.previousSibling;

    元素.nextElementSibling; //元素节点
    元素.previousElementSibling; //

    function getNextElementSibling(element) {
    	var el = element;
    	while ((el = el.nextSibling)) {
    		if (el.nodeType == 1) {
    			return el;
    		}
    	}
    	return null;
    }
    ```

4. 节点创建和添加

    ```javascript
    document.createElement('tagName'); //创建

    parent.appendChild(child); //在后面添加

    parent.insertBefore(child, parent.children[0]);

    //效率best
    var array = [];
    for (var i = 0; i < 1000; i--) {
    	array.push('<div></div>');
    }
    document.body.innerHtml = array.join('');
    ```

5. 删除节点

    ```javascript
    element.removeChild(element.child[0]);
    ```

6. 复制节点

    ```javascript
    element.cloneNode(element.child[0]);
    ```

## 事件

#### 注册事件

    两种方式：传统、方法监听
    传统DOM绑定只有第一个生效；脚本绑定只有最后一个生效
    方法监听都生效

1. addEventListener//i9+
    ```javascript
        eventTarget.addEventListener('type',listener[,useCapture])
    ```
    - type:事件类型，如 click 、mouseover
    - listener:事件处理函数，事件发生时会监听函数
    - useCapture:可选参数，默认是 false
2. 删除事件(解绑)

    ```javascript
       eventTarget.removeEventListener('type',listener[,useCapture])
    ```

#### DOM 事件流

事件传播的过程
三阶段：

-   捕获
-   当前目标
-   冒泡

    **js 代码只能执行捕获或者冒泡的其中一个阶段**
    **onclick 和 attachEvent 只能得到冒泡阶段**

#### 常见的对象属性和方法

| 方法               | 说明                           |
| :----------------- | :----------------------------- |
| e.target           | 返回触发事件的对象             |
| e.strElement       | 返回触发事件的对象 //ie6-8     |
| e.type             | 返回事件类型                   |
| e.cancelBubble     | 阻止冒泡 //ie6-8               |
| e.returnValue      | 阻止默认事件如链接跳转 //ie6-8 |
| e.preventDefault() | 阻止默认事件如链接跳转         |
| e.stopPropagation  | 阻止冒泡                       |

#### 事件委托

注册事件写在父元素，利用 e.属性完成事件

```
// 给父层元素绑定事件
document.getElementById('list').addEventListener('click', function (e) {
  // 兼容性处理
  var event = e || window.event;
  var target = event.target || event.srcElement;
  // 判断是否匹配目标元素
  if (target.nodeName.toLocaleLowerCase === 'li') {
    console.log('the content is: ', target.innerHTML);
  }
});
```

#### 鼠标事件对象

| 鼠标事件对象 | 说明                          |
| :----------- | :---------------------------- |
| e.clientX    | 相对于浏览器的 X 坐标         |
| e.clientY    | 相对于浏览器的 Y 坐标         |
| e.pageX      | 相对于文档页面的 X 坐标//ie9+ |
| e.pageY      | 相对于文档页面的 Y 坐标//ie9+ |
| e.screenX    | 相对于电脑屏幕的 X 坐标       |
| e.screenY    | 相对于电脑屏幕的 Y 坐标       |

## BOM

-   浏览器对象模型
-   把浏览器当作对象看待
-   BOM 的顶级对象是 window
-   BOM 学习的是浏览器窗口交互的一些对象
-   BOM 是浏览器厂商在各自浏览器上定义的，兼容性差

#### 常用事件

1. 窗口加载事件

```javascript
window.onload = function () {}; //只能写一次，多次以最后一个为准

window.addEventListenner('load', function () {}); //没有限制

document.addEventListener('DOMContentLoaded', function () {});
//仅DOM加载完成，不包括样式表，图片，flash等  ie9+
```

2. 调整窗口大小

```javascript
window.addEventListener('resize', function () {});
```

#### 定时器

1. setTimeout()

```javascript
    window.setTimeout(function(){},2000)
    //页面中可能有多个定时器
    var timee1=setTimeout(,);
```

2. 回调函数

3. 定制定时器

```javascript
window.clearTimer(timer);
```

4. setInterval()
   使用同 setTimer()
   反复调用一个函数
5. clearInterval
   同 clearTimer()

##### this 指向问题

指向调用者

```javascript
//全局作用域或普通函数中指向window
console.log(this);
function fn() {
	console.log(this);
}

//指向调用者
var o = {
	sauHi: function () {
		console.log(this); //指向对象o
	},
};
var btn = document.querySeletor('button');
btn.onclick = function () {
	console.log(this); //指向btn
};

function Fun() {
	console.log(this); //指向fun
}
var fun = new fun();
```

#### js 执行队列

##### 同步、异步

1. 同步任务
   同步任务在主线程上执行，形成一个执行栈
2. 异步任务
   js 异步通过回调函数实现，异步任务会添加到任务队列（消息队列）中
    - 普通事件，click、resize 等
    - 资源加载，load、error 等
    - 定时器，setInterval、setTimer 等

##### 执行机制

1. 先执行栈中的同步任务
2. 异步任务（回调函数）放入任务队列
3. 同步任务执行完毕，依次执行任务队列中的任务，被读取的任务结束等待状态，进入执行栈

#### location 对象

用于获取或设置窗体的 URL，并且可以解析 URL

| location 对象属性 | 返回值                         |
| :---------------- | :----------------------------- |
| location.herf     | 获取或设置整个 URL             |
| location.host     | 返回主机（域名）               |
| location.port     | 返回端口号 若未写返回 空字符串 |
| location.pathname | 返回路径                       |
| location.search   | 返回参数                       |
| location.hash     | 返回片段 # 后面的内容          |

| location 对象方法  | 返回值                                 |
| :----------------- | :------------------------------------- |
| location.assign()  | 跟 href 一样，可以跳转页面             |
| location.replace() | 替换当前页面，不记录历史，不能后退页面 |
| location.reload()  | 刷新页面 参数为 true 时 强制刷新       |

#### navigator 对象

包含浏览器的相关信息

#### histor

| history 对象方法 | 作用                                                         |
| :--------------- | :----------------------------------------------------------- |
| back()           | 后退功能                                                     |
| forward()        | 前进功能                                                     |
| go(参数)         | 前进后退功能，参数是 1 ，前进一个页面；参数是-1 后退一个页面 |

## offset\client\scroll

#### offset

动态的得到元素的偏移量

| offset 系列属性      | 作用                                             |
| :------------------- | :----------------------------------------------- |
| element.offsetParent | 返回该元素的有定位的父元素                       |
| element.offsetTop    |                                                  |
| element.offsetLeft   |                                                  |
| element.offsetWidth  | 返回自身包括 padding、边框、内容区的宽度，无单位 |
| element.offsetHeight | 返回自身包括 padding、边框、内容区的高度，无单位 |

##### client

与 offset 相似，不包含边框

##### 立即执行函数

独立创建了一个作用域，里面所有的变量都是局部变量，不会命名冲突

```javascript
(function () {})();
```

##### scroll

| scroll 属性          | 作用                      |
| :------------------- | :------------------------ |
| element.scrollTop    | 返回被卷去的上侧距离      |
| element.scrollLeft   | 返回被卷去的左侧距离      |
| element.scrollWidth  | 返回自身实际宽度/不含边框 |
| element.scrollHeight | 返回自身实际高度/不含边框 |

## 动画函数

1. 匀速动画

```javascript
function animate(obj, target) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		if (obj.offsetLeft >= target) {
			clearInterval(obj.timer);
		}
		obj.style.left = obj.offsetLeft + 1 + 'px';
	}, 30);
}
```

2. 缓动动画

```javascript
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
```

## 移动端网页特效

#### 触屏事件

1.  | 触屏 touch 事件 |                                 |
    | :-------------- | :------------------------------ |
    | touchstart      | 手指触摸到一个 DOM 元素时触发   |
    | touchmove       | 手指在一个 DOM 上滑动时触发     |
    | touchend        | 手指从一个 DOM 元素上移开时触发 |

2.  触摸事件对象

| 触摸列表               | 说明                                           |
| :--------------------- | :--------------------------------------------- |
| touches                | 正在触摸屏幕的手指的一个列表                   |
| targetTouches //最常用 | 正在触摸当前 DOM 元素上的手指的一个列表        |
| changedTouches         | 手指状态发生了改变队列，从无到有，从有到无变化 |

```javascript
element.addEventListener('touchstar', function (e) {
	console.log(e.targetTouches[o]);
});
```

3. 拖到元素

```javascript
var startX = 0; //手指的初始坐标
var startY = o;
var x = 0; //盒子的原位置
var y = 0;

element.addEventListener('touchstart', function (e) {
	startX = e.targetTouches[o].pageX;
	startY = e.targetTouches[o].pageY;
	x = this.offsetLeft;
	y = this.offsetTop;
});
element.addEventListener('touchmove', function (e) {
	var moveX = e.targetTouches[o].pageX - startX; //移动的距离
	var moveY = e.targetTouches[o].pageX - startY;
	this.style.left = x + moveX + 'px'; //移动
	this.style.top = y + moveY + 'px';
});
```

4. 移动端点击事件延迟问题

解决方案

-   禁止缩放//user-scalable=no
-   重新封装 touch 函数
-   fastclick 插件

5. 常用插件

    1. swiper//轮播插件
    2. zy.media.js//视频插件
    3. superSlide//tab 切换
    4. iscroll

## 本地存储

1.  -   数据存储在用户浏览器
    -   设置、读取方便、页面刷新不丢失数据
    -   容量较大
    -   只能存储字符串

2.  sessionStorage

        - 生命周期为关闭浏览器
        - 在同一个窗口、页面下数据可以共享
        - 以键值对的形式存储使用

        ```javascript
            // 存储数据
            //sessionStorage.setItem(key,value)
            sessionStorage.setItem('uname',input.value)

            //获取数据
            sessionStorage.getItem('uname')

            //删除数据
            sessionStorage.removeItem('uname')

            //清除所有数据
            sessionStorage.clear()
        ```

3.  localStorage

        - 生命周期永久生效，除非手动删除，否则页面关闭也会存在
        - 可以多窗口、页面共享数据
        - 以键值对的形式存储使用

        ```javascript
            // 存储数据
            //localStorage.setItem(key,value)
            localStorage.setItem('uname',input.value)

            //获取数据
            localStorage.getItem('uname')

            //删除数据
            localStorage.removeItem('uname')

            //清除所有数据
            localStorage.clear()
        ```

## 数据可视化

#### 什么是数据可视化

1. 目的
    - 借助图形化手段，清晰有效的表达与沟通信息
    - 把数据图形化
2. 场景

3. 常见的数据可视化库
    - D3.js Web 端评价最高的库（上手难）
    - ECharts.js 百度出品
    - Highcharts.js 国外库，非商用免费
    - AntV 蚂蚁金服

#### ECharts

1. 基本使用
    - 引入文件
    - 准备一个 DOM 容器
    - 初始化 echarts 实例对象
    - 指定配置和数据
    - 将配置给 echarts 实例对象

## es6

#### 面向对象概述

-   pop/面向过程：按照步骤解决问题
    1. 优点：性能较高，适合跟硬件联系紧密的东西
    2. 缺点：没有面向对象以维护、复用、扩展
-   oop/面向对象：以对象的功能来划分问题

-   面向对象的特征

    -   封装性
    -   继承性
    -   多态性

#### 类和对象

-   类：设计图
-   对象：通过设计图产生的具体物品

1. 创建类

    ```javascript
    class Star {}
    new Star();
    ```

2. 类 constructor 构造函数
    ```javascript
    class Star {
    	constructor(uname, age) {
    		this.uname = uname;
    		this.age = age;
    	}
    }
    var ldh = new Star('ldh');
    var zxy = new Star('zxy');
    //通过calss关键字创建类，类名首字母大写
    //constructor对象可以接受传递过来的参数，同时返回实例对象
    //生成实例new不能略
    ```
3. 类中添加公有方法

    ```javascript
    class Star {
    	constructor(uname, age) {
    		this.uname = uname;
    		this.age = age;
    	}
    	sing(sang) {
    		console.log(sang);
    	}
    }
    var ldh = new Star('ldh', 18);
    var zxy = new Star('zxy', 18);
    ldh.sing('a');
    //多个函数方法之间不需要逗号
    ```

4. 类的继承

    ```javascript
    class Father {
    	constructor(x, y) {
    		this.x = x;
    		this.y = y;
    	}
    	sum() {
    		console.log(this.x + this.y);
    	}
    }
    class Son extends Father {
    	constructor(x, y) {
    		super(x, y); //调用父类的constructor
    	}
    }
    var son = new Son(1, 2);
    son.sum();
    ```

5. super 关键字

    ```javascript
    class Father {
    	say() {
    		return 'f';
    	}
    }
    class Son extends Father {
    	say() {
    		console.log(super.say() + 's');
    	}
    }
    var son = new Son();
    son.say();

    //执行子类方法采用就近原则

    class Father {
    	constructor(x, y) {
    		this.x = x;
    		this.y = y;
    	}
    	sum() {
    		console.log(this.x + this.y);
    	}
    }
    class Son extends Father {
    	constructor(x, y) {
    		super(x, y); //必须在子类this前调用
    		this.x = x;
    		this.y = y;
    	}
    	subtract() {
    		console.log(this.x - this.y);
    	}
    }
    var son = new Son(1, 2);
    son.subtract();
    son.sum();
    ```

6. 注意点
    - 必须先定义类，才能实例化对象
    - 类里面的共有属性和方法一定要加 this 使用
    - this 的指向问题
        1. constructor 里面的 this 指向创建的实例对象
        2. 方法里面的 this，指向方法的调用者//解决：用变量存储 this

## 构造函数和原型

#### 概述

**构造函数存在浪费内存的问题**

```javascript
//创建函数
var obj1 = new Object();

var obj2 = {};

function Star(uname) {
	this.uname = uname; //实例成员
}
Star.sex = '男'; //静态成员
var ldh = new Star('ldh');

//实例成员只能通过实例对象来访问
//静态成员只能通过构造函数访问
```

#### 原型 prototype

```javascript
//  共享的函数可以存放在 原型对象 内
function Star(uname) {
	this.uname = uname; //实例成员
}
Star.prototype.sing = function () {};
Star.sex = '男'; //静态成员
var ldh = new Star('ldh');
//一般公共的属性定义到构造函数里，公共的方法定义在prototype中

//在实例对象身上系统自己添加一个__proto__指向我们构造函数的原型对象
//方法的查找原则：首先看实例对象身上是否有查找的方法，若没有，因为有__proto__存在，则去构造函数原型对象prototype上去找
```

##### 构造函数 constructor

用于记录该对象引用于哪个构造函数

```javascript
function Star(uname) {
	this.uname = uname;
}
var ldh = new Star('ldh');
Star.prototype = {
	constructor: Star,
}; //该方法会覆盖constructor对象
console.log(Star.prototype.constructor); //Star(uname){}
console.log(ldh.__proto__.constructor); //Star(uname){}
```

##### 构造函数、实例、原型对象三者关系

![](/media/img/构造函数.PNG)

##### 原型链

![](/media/img/原型链.PNG)

##### js 的成员查找机制

1. 当访问一个对象的属性（包括方法）时，首先查找这个==对象自身==有没有该属性
2. 如果没有就查找它的原型（也就是**proto**指向的==prototype 原型对象==）
3. 如果还没有就查找原型对象的原型（==Object 的原型对象==）
4. 依次类推一直找到 Object 为止（==null==）
5. **proto**对象原型的意义就在于为对象成员查找机制提供一个方向

##### 原型对象的 this 指向

1. 在构造函数中，里面的 this 指向对象实例
2. 原型对象函数里面的 this 指向实例对象

##### 扩展内置对象

```javascript
Array.prototype.sum = function () {
	var sum = 0;
	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	}
	return sum;
};
var arr = [1, 2, 3];
console.log(arr.sum());
```

#### 继承

##### call

```javascript
// 调用函数，并修改this指向
function fn(x, y) {
	console.log(this);
	console.log(x + y);
}
var o = {
	name: 'andy',
};
//fn.call();
fn.call(o, 1, 2); //此时this指向o
```

##### 利用父构造函数继承属性

```javascript
function Father(uname, age) {
	//this指向父构造函数的实例对象
	this.uname = uname;
	this.age = age;
}
Father.prototype.money = function () {
	console.log('100000');
};
function Son(uname, age) {
	//this指向子构造函数的实例对象
	Father.call(this, uname, age);
}
Son.prototype = Father.prototype;
```

##### 利用原型对象继承方法

```javascript
function Father(uname, age) {
	//this指向父构造函数的实例对象
	this.uname = uname;
	this.age = age;
}
Father.prototype.money = function () {
	console.log('100000');
};
function Son(uname, age) {
	//this指向子构造函数的实例对象
	Father.call(this, uname, age);
}
//Son.prototype=Father.prototype//这种方法会同时修改父原型对象
Son.prototype = new Father();
Son.prototype.constructor = Son;
```

## 函数进阶

#### 函数定义

1. 声明函数
2. 匿名函数
3. new Function()
    ```javascript
    var f = new Function('a', 'b', 'console.log(a+b)');
    //所有函数都是Function的实例
    //函数也属于对象
    ```

#### 函数调用方式

1. 普通函数
    ```javascript
    fn();
    fn.call();
    ```
2. 对象的方法

    ```javascript
    var o = {
    	sayHi: function () {},
    };
    o.sayHi();
    ```

3. 构造函数

    ```javascript
    function Star() {}
    new Star();
    ```

4. 绑定事件函数

    ```javascript
    btn.onclick = function () {};
    //触发事件调用
    ```

5. 定时器函数

    ```javascript
    setInterval(function () {}, 1000); //定时器自动调用
    ```

6. 立即执行函数

    ```javascript
    (function () {})();
    //自动调用
    ```

#### 函数内部 this 指向

1. 普通函数
    ```javascript
    fn();
    fn.call();
    //指向window
    ```
2. 对象的方法

    ```javascript
    var o = {
    	sayHi: function () {},
    };
    o.sayHi();
    //指向对象o
    ```

3. 构造函数

    ```javascript
    function Star() {}
    var ldh = new Star();
    //指向ldh实例对象
    ```

4. 绑定事件函数

    ```javascript
    btn.onclick = function () {};
    //触发事件调用
    //指向btn
    ```

5. 定时器函数

    ```javascript
    setInterval(function () {}, 1000); //定时器自动调用

    //指向window
    ```

6. 立即执行函数

    ```javascript
    (function () {})();
    //自动调用
    //指向window
    ```

#### call 方法

```javascript
var o = {
	name: 'andy',
};
function fn() {}
fn.call(o);
//call可以改变函数内部this的指向
//call可以实现继承
function Father() {}
function Son() {
	Father.call(this);
}
```

#### apply 方法

```javascript
var o = {
	name: 'andy',
};
function fn() {}
fn.apply(o);
//apply可以改变函数内部this的指向
//apply的参数必须是数组
var arr = [1, 12, 33];
Math.max.apply(Math, arr);
```

#### bind 方法

-   改变函数的调用者
-   语法规范同 apply，不会调用函数
-   返回值为函数的拷贝

##### bind 应用

```javascript
btn.onclick = function () {
	setTimerout(function () {}.bind(this), 1000);
};
```

#### 严格模式//ie10+

1. 消除了 js 语法的一些不合理之处
2. 消除了一些不安全之处
3. 提高了编译效率
4. 禁用了一些未来可能会定义的语法，为新版本铺垫

##### 开启严格模式

-   为整个脚本
    写在开头'use strict'
-   为个别函数
    写在函数内部'use strict'

##### 严格模式的变化

1. 变量必须先声明再使用
2. 严禁删除已经声明的变量
3. 全局模式下函数 this 指向 undefined
4. 构造函数不加 new 调用，this 会报错
5. 函数不能有重名参数
6. 函数必须声明在顶层

#### 高阶函数

-   作为参数的或 return 的是函数

#### 闭包

##### 定义

> 闭包指有权访问另一个函数作用域中变量的函数。

简单理解：一个作用域可以访问另一个函数内部的局部变量

```javascript
function fn() {
	var num = 10;
	function fun() {
		console.lo(num);
	}
	fun();
}
fn();
```

##### 作用

**主要作用：延伸变量的作用范围**

```javascript
function fn() {
	var num = 10;
	function fun() {
		console.lo(num);
	}
	return fun();
}
var f = fn();
```

##### 案例

1.  ```javascript
    for (var i = 0; i < lis.length; i++) {
    	(function (i) {
    		lis[i].omclick = function () {
    			console.log(i);
    		};
    	})(i);
    	//立即执行函数也称为小闭包
    }
    ```
2.  ```javascript
    for (var i = 0; i < lis.ength; i++) {
    	(function (i) {
    		setTimerout(function () {
    			console.log(i);
    		}, 3000);
    	})(i);
    }
    ```
3.  出租车计费

```javascript
var car = function () {
	var start = 13;
	var total = 0;
	return {
		price: function (n) {
			if (n <= 3) {
				total = start;
			} else {
				total = start + (n - 3) * 5;
			}
			return total;
		},
		yd: function (flag) {
			return flag ? total + 10 : total;
		},
	};
};
car.price();
```

#### 递归

如果一个函数在内部可以调用其本身，那么就是递归函数。
**为避免栈溢出，要添加推出条件 return**

##### 根据 id 返回数据对象

```javascript
var data = [
	{
		id: 1,
		name: '家电',
		goods: [
			{
				id: 11,
				gname: '冰箱',
			},
			{
				id: 12,
				gname: '洗衣机',
			},
		],
	},
	{
		id: 2,
		name: '服饰',
	},
];

function getID(json, id) {
	var o = [];
	json.forEach(function (item) {
		//console.log(item)
		if (item.id == id) {
			o = item;
			return item;
		} else if (item.goods && item.goods.length > 0) {
			o = getID(item.goods, id);
		}
	});
	return o;
}
console.log(getID(data, 11));
```

#### 拷贝

##### 浅拷贝

```javascript
var obj = {
	id: 1,
	name: 'andy',
};
var o = {};
// for (var k in obj) {
// 	o[k] = obj[k]
// }
// console.log(o)
Object.assign(o, obj);
console.log(o);
```

##### 深拷贝

```javascript
var obj = {
	id: 1,
	name: 'andy',
	msg: {
		age: '18',
	},
	color: ['a', 'b', 'c'],
};
var o = {};
function deepCopy(newobj, oldobj) {
	for (var k in oldobj) {
		//判断属性值属于哪种数据类型
		var item = oldobj[k];
		//判断是否数组
		if (item instanceof Array) {
			newobj[k] = [];
			deepCopy(newobj[k], item);
		}
		//判断是否对象
		else if (item instanceof Object) {
			newobj[k] = {};
			deepCopy(newobj[k], item);
		} else {
			newobj[k] = item;
		}
	}
}
deepCopy(o, obj);
console.log(o);
```

## 正则表达式

用于匹配字符串中字符组合，匹配、替换、提取字符

-   灵活性
-   可以简单的达到字符串的复杂控制
-   对新人来说晦涩难懂
-   实际开发一般直接复制写好的正则表达式

#### 使用

1. 通过 RegExp 创建

```javascript
var regexp = new RegExp(/123/);
```

2. 字面量创建

```javascript
var rg = /123/;
```

##### 测试正则

```javascript
var rg = /123/;
console.log(rg.test(123));
```

#### 正则表达式中的特殊字符

##### 边界符

| 边界符 | 说明     |
| :----- | :------- |
| ^      | 以谁开始 |
| $      | 以谁结束 |

##### 字符类

| 符号     | 说明                                   |
| :------- | :------------------------------------- |
| []       | 可供选择的字符，多选一，有任意一个即可 |
| [a-z]    | 表示 26 个小写字母                     |
| [a-zA-Z] | 大小写字母都可                         |
| [^a-z]   | 取反，不能包含小写字母                 |

##### 量词符

|       |                   |
| :---- | :---------------- |
| \*    | 重复零次或更多次  |
| +     | 重复一次或更多次  |
| ？    | 重复零次或一次    |
| {n}   | 重复 n 次         |
| {n,}  | 重复 n 次或更多次 |
| {n,m} | 重复 n 到 m 次    |

```javascript
var reg = /^[a-zA-Z0-9_-]{6,16}$/;
console.log(reg.test('aaaaaa')); //true
```

##### 预定义类

| 预定类 | 说明                |
| :----- | :------------------ |
| \d     | 相当于[0-9]         |
| \D     | 相当于[^0-9]        |
| \w     | 相当于[a-zA-Z0-9]   |
| \W     | 相当于[^a-za-z0-9]  |
| \s     | 相当于[\t\r\n\v\f]  |
| \S     | 相当于[^\t\r\n\v\f] |

#### 正则替换

```javascript
var str = 'andy和red';
var newstr = str.replace(/andy|red/gi, 'dady');
//正则后加g，全局匹配
//加i，忽略大小写
```

## es6 新增语法

#### let

-   let 声明的变量只在所在块级有效

```javascript
if (true) {
	let a = 10;
}
console.log(a);
```

-   let 声明的变量,不存在提升

```javascript
console.log(a);
let a = 100;
```

-   暂时性死区

```javascript
var num = 10;
if (true) {
	console.log(num);
	let num = 20;
}
```

##### 经典面试题

```javascript
var arr = [];
for (var i = 0; i < 2; i++) {
	arr[i] = function () {
		console.log(i);
	};
}
arr[0](); //2
arr[1](); //2
//退出循环时全局变量i=2
```

```javascript
var arr = [];
for (let i = 0; i < 2; i++) {
	arr[i] = function () {
		console.log(i);
	};
}
arr[0](); //0
arr[1](); //1
```

#### const

作用：声明常量

-   块级作用域
-   声明时必须赋初始值
-   声明的常量值不能修改，数组内部值可以修改,不能重新赋值

#### 解构赋值

```javascript
let ary = [1, 2, 3];
let [a, b, c] = ary;
```

##### 对象解构

```javascript
let ary = { name: 'zs', age: 18 };
let { name, age } = ary;
console.log(name);
console.log(age);

let { name: myname, age: myage } = ary;
console.log(myname);
console.log(myage);
```

#### 箭头函数

```javascript
const fn = () => {};
```

##### 箭头函数 this

指向函数定义位置的上下文 this

##### 箭头函数面试题

```javascript
age = 100;
var obj = {
	age: 20,
	say: () => {
		alert(this.age);
	},
};
obj.say(); //100
//对象不能产生作用域
```

#### 剩余参数

剩余参数语法允许我们将一个不定数量的参数表示为一个数组

```javascript
const sum = (...args) => {
	let total = 0;
	args.forEach((item) => (total += item));

	return total;
};
sum(10, 20);
sum(10, 20, 30);
```

##### 剩余参数和结构

```javascript
let students = ['a', 'b', 'c'];
let [s1, ...s2] = students;
console.log(s1);
console.log(s2);
//a
//(2) ["b", "c"]
```

#### 扩展运算符

允许运算符可以将数组或者对象转为用逗号分隔的参数序列

```javascript
let ary = [1, 2, 3]
...ary//1,2,3
console.log(...ary) //1 2 3
```

##### 运用

```javascript
//数组合并
//1.
let ary1 = [1, 2, 3];
let ary2 = [4, 5, 6];
let ary3 = [...ary1, ary2];
//2.
ary1.push(...ary2);

//将伪数组转化为真数组
```

#### Array 扩展方法

```javascript
//将伪数组转化为真数组
var arrayLike = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3,
};
var ary = Array.from(arrayLike, (item) => item + 'd');
console.log(ary);
```

```javascript
//find方法
var ary = [
	{
		id: 1,
		name: 'zs',
	},
	{
		id: 2,
		name: 'ls',
	},
];
var target = ary.find((item, index) => item.id == 2);
console.log(target); //{id: 2, name: "ls"}
```

```javascript
//findIndex方法
var ary = [
	{
		id: 1,
		name: 'zs',
	},
	{
		id: 2,
		name: 'ls',
	},
];
var target = ary.findIndex((item, index) => item.id == 2);
console.log(target); //1
```

```javascript
//includes方法
[1, 2, 3].includes(2);
```

#### String 扩展方法

##### 模板字符串

-   以`字符串`表示
-   内部可以换行
-   可以调用函数

```javascript
let name = `zs`;
let sayHello = `hello,i'm zs`;
console.log(sayHello);
```

##### startsWith()\endsWith()

-   startsWith(),判断参数字符串是否在原字符串头部
-   endsWith(),判断参数字符串是否在原字符串结尾

##### repeat()

'x'.repeat(3)//'xxx'

-   将原字符串重复 x 次，输出新字符串

#### Set

**类似数组，没有重复值**

```javascript
var ary = [1, 1, 2, 3];
var s1 = new Set(ary);
console.log(s1); //Set(3) {1, 2, 3}
console.log(s1.size); //3
//利用Set去重
var ary2 = [...s1];
console.log(ary2); //(3) [1, 2, 3]

//Set方法
s1.add(4).add(5);
console.log(s1);
s1.delete(1);
console.log(s1);
s1.has(1);
console.log(s1.has(1));
s1.clear();
console.log(s1);

//Set遍历
s1.forEach((value) => {
	console.log(value);
});
```

## 请按后端交互

#### 服务器和客户端

##### 服务器

负责存放对外提供资源的电脑叫服务器

##### 客户端

负责获取和消费资源的电脑叫服务器

#### URL

-   统一资源定位符

##### 组成

1. 客户端和服务器之间的==通信协议==
2. 存有资源的==服务器名称==
3. 资源在服务器上==具体的存放位置==
   http://www.cnblogs.com/lll/p/2222.html

-   http：通信协议
-   www.cnblogs.com：服务器名称
-   lll/p/2222.html：资源在服务器上具体的存放位置

#### 网页打开的过程

-   客户端
    1. 打开浏览器
    2. 输入要访问的网站网址
    3. 回车，向服务器发起资源请求
-   服务器
    1. 服务器接收到客户端收到客户端发来的资源请求
    2. 服务器在内部处理这次请求，找到相关的资源
    3. 服务器把找到的资源，响应（发送）给客户端

**过程分为请求-处理-响应三个过程**
**网页中的每一个资源都是通过请求-处理-响应的方式从服务器获取回来的**

##### 网页如何请求数据

1. 发起数据请求
2. 服务器处理请求
3. 服务器发送数据

##### 资源请求方式

-   get :用于获取服务器数据
-   push:用于提交数据

#### Ajax

##### $.get()

```javascript
$.get('url', { data }, callback);
```

| 参数名   | 参数类型 | 必选 | 说明       |
| :------- | :------- | :--- | :--------- |
| url      | string   | 是   | 资源地址   |
| data     | object   | 否   | 携带的参数 |
| callbacl | function | 否   | 回调函数   |

##### $.post()

```javascript
$.post('url', { data }, function (res) {});
```

| 参数名   | 参数类型 | 必选 | 说明           |
| :------- | :------- | :--- | :------------- |
| url      | string   | 是   | 提交数据的地址 |
| data     | object   | 否   | 携带的数据     |
| callbacl | function | 否   | 回调函数       |

##### $.ajax()

```javascript
$.ajax({
	type: '', //请求的方式
	url: '', //请求的url地址
	data: '', //这次请求要携带的数据
	success: function (res) {}, //成功后的回调函数
});
```

#### 接口

**使用 ajax 请求数据时，被请求的 url 地址，就叫做接口**

##### 接口的测试工具

-   postman

##### 接口文档

-   组成
    1. 接口名称
    2. 接口 URL
    3. 调用方式
    4. 参数格式
    5. 响应格式
    6. 返回实例（可选）

## form 表单

表单在网页中负责数据采集功能

#### 表单的组成

-   表单标签
-   表单域
-   表单按钮

#### <form>标签

1. action：向何处发送表单，默认为当前 url
   提交后，立即跳转到 action 指定的 url
2. target：在何处打开 action URL

    | 值        | 描述                     |
    | :-------- | :----------------------- |
    | \_blank   | 在新窗口打开             |
    | \_self    | 默认。在相同框架中打开   |
    | \_parent  | 在父框架打开 /很少用     |
    | \_top     | 在整个窗口打开 /很少用   |
    | framename | 在指定的框架打开 /很少用 |

3. method：以何种方式把表单提交到 action URL
    - 默认为 get
    - get 适合提交少量、简单的数据，post 适合提交大量的、复杂的或包含文件上传的数据
4. enctype：发送数据前如何对数据进行编码

    | 值                                | 描述                                     |
    | :-------------------------------- | :--------------------------------------- |
    | application/x-www-form-urlencoded | 发送前编码所有字符（默认）               |
    | multipart/form-data               | 不对字符编码//上传文件时，必填该值       |
    | text/plain                        | 空格转化为加号，不对特殊字符编码//很少用 |

#### 表单同步提交

-   缺点
    1. 提交后，页面后跳转，用户体验差
    2. 页面之前的状态和数据会丢失
-   解决
    表单只采集数据，ajax 负责将数据提交到服务器

#### ajax 提交表单

##### 监听表单提交事件

```javascript
$('#form').submit(function (e) {});

$('#form').on('submit', function (e) {});
```

##### 阻止表单默认提交行为

```javascript
$('#form').submit(function (e) {
	e.preventDefault();
});

$('#form').on('submit', function (e) {
	e.preventDefault();
});
```

##### 快速获取表单数据

**$(selector).serialize()**
可以一次性获取表单的所有数据
==使用 serialize()时，必须为每个表单元素添加 name 属性==

```javascript
$('#form').submit(function (e) {
	e.preventDefault();
	var data = $(this).serialize();
});
```

#### 模板引擎

根据指定的模板结构和数据，自动生成一个完整的 HTML 页面

-   好处：
    1. 减少字符串拼接操作
    2. 使代码结构更清晰
    3. 使代码更易于阅读与维护

##### art-template

-   使用步骤
    1. 导入 art-template
    2. 定义数据
    3. 定义模板
    4. 调用 template 函数
    5. 渲染 HTML 结构
-   标准语法

    1. 输出

        |                |
        | :------------- |
        | {{value}}      |
        | {{obj.key}}    |
        | {{obj['key']}} |
        | {{a?b:c}}      |
        | {{a\| \|b}}    |
        | {{a+b}}        |

    2. 原文输出
       {{@ value}}
       //输出的内容包含 html 语句时使用
    3. 条件输出
       {{if v1}} {{else if v2}} {{/if}}
    4. 循环输出
       {{each arr}}
       {{$index}} {{$value}}
       {{/each}}
    5. 过滤器
       {{value|**filterName**}}
       template.defaults.imports.**filterName**=function(value){ return 处理的结果}

        ```javascript
        template.defaults.imports.dataFormat = function (date) {
        	var y = date.getFullYear();
        	var m = date.getMonth() + 1;
        	var d = date.getDate();
        	return y + '-' + m + '-' + d;
        };
        ```

## XMLHttpRequest

#### xhr get 请求

1. 创建 xhr 对象
2. 调用 xhr.open()函数
3. 调用 xhr.send()函数
4. 监听 xhr.onreadystatechange 事件

```javascript
var xhr =new XHRHttpRequest()

xhr.open('GET'，'http://www.liulongbin.top:3006/api/getbooks')

xhr.send()

xhr.onreadystatechange=function(){

    if(xhr.readyState===4&&xhr.status===200){
        //数据获取成功
        console.log(xhr.requestText)
    }
}

```

#### xhr readyState 属性

| 值  |       状态       | 描述                                              |
| :-: | :--------------: | :------------------------------------------------ |
|  0  |      UNSENT      | XMLHttpRequest 对象已创建，但未调用 open 方法     |
|  1  |      OPENED      | open()方法已经被调用                              |
|  2  | HEADERS_RECEIVED | send()方已经被调用，响应头也已经被接收            |
|  3  |     LOADING      | 数据接收中，此时 response 属性已经包含部分数据    |
|  4  |       DONE       | Ajax 请求完成，这意味着数据传输已经彻底完成或失败 |

#### xhr 带参数的 get 请求

在 url 后拼接参数

```javascript
xhr.open('GET'，'http://www.liulongbin.top:3006/api/getbooks?id=1')
```

#### xhr 查询字符串

-   定义：查询字符串（URL 参数）是指在 url 的末尾加上用于向服务器发送信息的字符串（变量）

-   格式：将英文的 **?** 放在 url 末尾，再加上 **参数=值** ，想加上多个参数的话，以 **&**进行分隔

#### 什么是 url 编码

-   **原则**：使用安全的字符（没有特殊用途或特殊意义的可打印字符）去表示不安全的字符

#### 如何进行 url 编码

-   encodeURI()
-   decodeURI()

```javascript
console.log(encodeURI('你好')); //%E4%BD%A0%E5%A5%BD

console.log(decodeURI('%E4%BD%A0%E5%A5%BD')); //你好
```

#### xhr post 请求

1. 创建 xhr 对象
2. 调用 xhr.open()函数
3. 设置 Content-Type 属性（固定写法）
4. 调用 xhr.send()函数，同时指定发送数据
5. 监听 xhr.onreadystatechange 事件

```javascript
var xhr = new XMLHttpRequest();

xhr.open('post', 'http://www.liulongbin.top:3006/api/addbook');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('bookname=xxx&author=xxx');
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.state === 200) {
		console.log(xhr.responseText);
	}
};
```

## 数据交换格式

服务器端与客户端之间进行数据传输与交换的格式

#### json

-   概念 JSON 全称 JavaScript Object Notation，即 JavaScript 对象表示法，json 本质是字符串

##### json 的两种结构

-   对象结构：对象结构在 json 中表示为{ }括起来的内容。数据结构为{key:value,key:value,...}的键值对结构。其中，key 必须是使用英文的双引号包裹的字符串，value 的数据类型可以是数字、字符串、布尔值、null、数组、对象 6 种类型

-   数组结构：数组结构在 json 中表示为{ }括起来的内容。数据结构为{"java","javascript",30,true...},数组中数据的类型可以是数字、字符串、布尔值、null、数组、对象 6 种类型

##### json 注意事项

1. 属性名必须使用双引号包裹
2. 字符串类型的值必须使用双引号包裹
3. json 中不允许使用单引号表示字符串
4. json 中不允许写注释
5. json 的最外层必须是对象或数组格式
6. 不能使用 undefined 或函数作为 json 的值

-   作用：在计算机与网络之间存储和传输数据
-   本质：用字符串表示 javascript 对象或数组数据

##### json 和 js 对象的转换

```javascript
var obj = JSON.parse('{"a":"hello"}');
console.log(obj);

var json = JSON.stringify({ a: 'hello' });
console.log(json);
```

##### 序列化、反序列化

把数据对象转化为字符串的过程，叫做序列化
把字符串转化为数据对象的过程，叫做反序列化

#### xhr level2

旧版缺点

1. 支支持文本数据的传输，无法用来读取和上传文件
2. 传送和接收数据时，没有进度信息，只能提示有没有完成

level2 新特性

1. 可以设置 HTTP 请求的时限
2. 可以使用 FormData 对象管理表单数据
3. 可以上传文件
4. 可以获取数据传输的进度信息

##### 设置请求时限

```javascript
xhr.timeout = 3000;
xhr.ontimeout = function (event) {
	alert('请求超时');
};
```

##### FormData 管理表单数据

```javascript
var fd = new FormData();

fd.append('uname', 'zs');
fd.append('upwd', '123');
var xhr = new XMLHttpRespect();
xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata');
xhr.send(fd);

////
var form = document.querySeletor('form1');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	var fd = new FormData(form);
	myAjax({});
});
```

##### 上传文件

1. 定义 UI 结构
2. 验证是否选择了文件
3. 向 FormData 中追加文件
4. 向 xhr 发起上传文件的请求
5. 监听 onreadystatechange 事件

```javascript
var fd = new FormData();
fd.append('', files[0]);
```

#### jQuery 高级用法

##### 上传文件

```javascript
$.ajax({
	method: 'POST',
	url: 'http://....',
	data: fd,
	contentType: false,
	processData: false,
	success: function (res) {},
});
```

##### loading 效果

```javascript
$(document).ajaxStart(function () {
	$('#loading').show();
});
$(document).ajaxStop(function () {
	$('#loading').hide();
});
// $(document).ajaxStart()会监听当前文档内所有Ajax请求
```

#### axios

专注于网络数据请求的库

##### axios GET\POST 请求

```javascript
axios.get('地址'?key=value&key2=value2).then(function(res){response},function(err){err})

axios.post('地址',{key:value,key2:value2}).then(function(res){response},function(err){err})

```

## 跨域和 jsonp

#### 同源策略

同源：如果两个页面的**协议、域名**和**端口**都相同，则两个页面具有相同的源
同源策略：浏览器提供的一个安全功能

1. 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB
2. 无法接触非同源的 DOM
3. 无法向非同源地址发送 Ajax 请求

#### 跨域

不同源就是跨域

##### 拦截跨域请求

-   跨域请求可以正常发起
-   浏览器能正常接收跨域响应的数据
-   同源策略拦截数据

##### 实现跨域数据请求

-   jsonp：临时解决方案，只支持 get
-   cors：官方方法，部分低版本浏览器不支持

#### jsonp

**原理：sctipt 标签不受同源策略影响**

## 防抖和节流

-   防抖策略：当事件被触发后，延迟 n 秒后再执行回调，如果在这 n 秒内事件再次触发，则重新计时
-   节流策略：减少一段时间内事件的触发频率

#### 输入框防抖

```javascript
var timer = null;
function debounceSearch(keyup) {
	timer = setTimeout(function () {
		setSuggestList(keywords);
	}, 500);
}
$('#ipt').on('keyup', function () {
	clearTimeout(timer);
	debounceSearch(keywords);
});
```

#### 输入框缓存建议列表

```javascript
var cacheObj = {};
function renderSuggestList(res) {
	var k = $('#ipt').val().trim();
	cacheObj[k] = res;
}
$('#ipt').on('keyup', function () {
	if (cacheObj[keywords]) {
		return renderSuggestList(cacheObj[keywords]);
	}

	debounceSearch(keywords);
});
```

#### 节流和防抖的区别

-   防抖：如果事件频繁触发，防抖能保证只有最后一次触发生效
-   节流：如果事件频繁触发，节流能够减少事件触发的频率，节流是有选择的执行一部分事件

## http 协议

-   通信三要素：
    1. 主体
    2. 内容
    3. 方式
-   通信协议：通信双方必须遵守的规则和约定
-   http 协议：规定了客户端与服务器之间进行网页内容传输时必须遵守的传输协议

#### HTTP 请求消息

客户端发起的请求叫做 HTTP 请求，客户端发送到服务器的消息叫做 HTTP 请求消息

-   组成：
    1. 请求行：请求方式、URL、HTTP 协议版本
    2. 请求头部：描述客户端的基本信息，从而把客户端相关的信息告知服务器
    3. 空行：通知服务器请求头部至此结束
    4. 请求体：存放 post 方式提交到服务器的数据

#### HTTP 响应消息

-   组成：
    1. 状态行：HTTP 协议版本、状态码、状态码的描述，三者之间以空格分开
    2. 响应头部：描述服务器的基本信息，由多行键/值对组成
    3. 空行：响应头部至此结束
    4. 响应体：存放服务器响应给客户端的资源内容

#### 请求方法

表明要对服务器上的资源执行的操作

| 序号 |  方法   | 描述 |
| :--: | :-----: | :--- |
|  1   |   GET   | 查询 |
|  2   |  POST   | 新增 |
|  3   |   PUT   | 修改 |
|  4   | DELETE  | 删除 |
|  5   |  HEAD   |      |
|  6   | OPTIONS |      |
|  7   | CONNECT |      |
|  8   |  TRACE  |      |
|  9   |  PATCH  |      |

#### http 响应状态码

-   组成：三个十进制数字，第一个定义了状态码的类型，后两个用来对状态码进行细分

| 分类  | 描述                                         |
| :---: | :------------------------------------------- |
| 1\*\* | 信息，服务器收到请求，需要请求者继续执行操作 |
| 2\*\* | 成功                                         |
| 3\*\* | 重定向，需要进一步的操作以完成请求           |
| 4\*\* | 客户端错误                                   |
| 5\*\* | 服务器错误                                   |

## NODE

#### fs 文件系统模块

-   fs.readFile():用来读取指定文件中的内容
-   fs.writeFile():用来向指定的文件中写入内容

```javascript
//在js中使用fs
const fs = require('fs');

//fs.readFile(path[,options],callback)
//path：必选参数，字符串，表示文件路径
//options：可选参数，表示什么编码格式来读取文件
//callback：必选参数，文件读取完成后，通过回调函数拿到读取的结果

// -------------------
//fs.writeFile(file,data[,options],callback)
//file：必选，指定一个文件路径的字符串，表示文件的存放路径
//data：必选，表示要写入到内容
//options：可选，表示写入格式，默认utf8
//callback：必选，文件写入完成后的回调函数
```

##### fs-路径动态拼接问题

代码在执行的时候，会以执行 node 命令时所处的目录，动态拼接处被操作文件的完整路径

-   解决方法：
    1. 提供完整路径
    2. \_\_dirname 表示当前文件路径

#### path 路径模块

-   path.join()，用来将多个路径片段拼接成一个完整的路径字符串
-   path.basename()，用来从路径字符串中，将文件名解析出来

```javascript
//导入path
const path = require('path');
```

##### 路径拼接

```javascript
path.join('/a', '/b/c', '../', './d', 'e');
//\a\b\d\e
```

##### 获取路径名

```javascript
path.basename(path[,ext])
//path<string>必选，表示一个路径字符串
//ext<string>可选，表示移除的文件扩展名
//返回：<string>表示路径的最后一部分
```

##### 获取文件扩展名

```javascript
path.extname(path);
//path<string>，必选，表示一个路径的字符串
//返回：<string>返回得到的扩展名字符串
```

#### HTTP 模块

http 模块是 node.js 提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer()方法，就能方便的把一台普通电脑，变成一台 web 服务器，从而对外提供资源服务

```javascript
const http = require('http');
```

##### 服务器相关概念

1. IP 地址：互联网上每台电脑的唯一标识
2. 域名和域名服务器：域名服务器就是提供 IP 地址和域名之间的转换服务的服务器
3. 端口号：相当于门牌号

#### 创建基本服务器

1. 导入 HTTP 模块
2. 创建服务器实例
3. 为服务器绑定 request 事件，监听客户端请求
4. 启动服务器

```javascript
const http = require('http');
const server = http.createServer();

server.on('request', function (req, res) {
	//console.log('Someone visit our web server.');
	const url = req.url;
	const method = req.method;
	const str = `Your request url is ${url},and request method is ${method}`;
	//解决乱码
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	console.log(str);
	res.end(str);
});

server.listen(8080, function () {
	console.log('server running at http://127.0.0.1:8080');
});
```

##### 根据不同的 url 响应不同的 html 内容

1. 获取 url 地址
2. 设置默认响应内容
3. 判断用户请求
4. 设置 Content-Type 响应头，防止乱码
5. 使用 res.end()把内容响应给客户端

```javascript
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
```

### 模块化

遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块

好处：

1. 提高代码的复用性
2. 提高了代码的可维护性
3. 可以实现按需加载

#### 相关概念

-   使用什么样的语法格式来引用模块
-   在模块中使用什么样的语法格式向外暴露成员

#### 模块分类

-   内置模块：
-   自定义模块
-   第三方模块

##### 加载模块

```javascript
//内置模块
const fs = require('fs');
//自定义模块
const custom = require('./custom.js');
//第三方模块
const moment = require('moment');
//使用require()方法加载其他模块时，会执行被加载模块中的代码
```

##### require()注意点

-   .js 后缀名可以省略

#### 模块作用域

1. module 对象：在每个.js 自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息
2. modele.exports：将模块内的成员共享出去，供外界使用；外界用 require()方法导入自定义模块时，得到的就是 module.exports 所指向的对象
3. exports 对象：exports 和 module.exports 指向同一对象

##### modele.exports

```javascript
module.exports.username = 'zs';
module.exports.sayHello = function () {
	console.log('hi');
};
```

**使用 require()方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准**

#### CommonJS

1. 每个模块内部，module 变量代表当前模块
2. module 变量是一个对象，它的 exports 属性是对外接口
3. 加载某个模块，其实是加载该模块的 module.exports 属性。require()方法用于加载模块

## 包

node 模块中第三方模块叫做包

-   www.npmjs.com 搜索
-   registry.npmjs.org 下载

## npm

1. 使用 npm 包管理工具，在项目中安装格式化时间的包 moment
2. 使用 require()导入格式化时间的包
3. 参考 moment 的官方 API 文档对时间进行格式化

#### npm 安装

-   npm install 包的完整名称
-   简写：npm i 包的完整名称

-   npm_modules 文件夹用来存放已安装到项目中的包。require()导入第三方包时，就是从这个目录下查找并加载包
-   package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息
-   安装指定版本的包 **npm i moment@2.22.2**
-   版本号：
    1. 第一位数字：大版本
    2. 第二位数字：功能版本
    3. 第三位数字：Bug 修复版本
    4. 前面的版本号增长了，后面的版本号归零

#### 包管理文件

package.json:

1. 项目的名称、版本号、描述
2. 项目中用到了哪些包
3. 哪些包只在开发期间会用到
4. 哪些包在开发和部署时都会用到

##### dependencies 节点

记录安装的包

##### 一次性安装所有包

-   npm install:一次性下载所有包

##### 卸载包

-   npm uninstall 包名

##### devDependencies 节点

记录只在开发阶段会用到的包

##### 包的分类

-   开发依赖包：被记录到 devDependencies 节点中，只在开发期间使用
-   核心依赖包：被记录到 dependencies 节点中，在开发和项目上线后都会用到
-   全局包：-g 参数

##### 发布包

```
//包目录下
npm publish
```

##### 模块的加载机制

-   模块第一次加载后会被缓存。优先从缓存加载模块
-   内置模块的加载优先级最高
-   没有"./"或者"../"开头，会被当作内置模块或者第三方模块进行加载
-   省略后缀名的加载顺序：
    1. 按照确切的文件名进行加载
    2. 补全.js 扩展名进行加载
    3. 补全.json
    4. 补全.node
    5. 终端报错
-   第三方模块会在父目录/node_modules 文件中加载，如果没找到会移动到再上一层进行加载，直到文件的根目录
-   目录作为模块加载时：
    1. 在加载目录下查找 package.json 文件，并寻找 main 属性，作为 require()加载到入口
    2. 如果没找到 package 文件，或者 main 入口无法解析，则会试图加载 index.js 文件
    3. 上两步都失败，则报告模块缺失：Error:Cannot find module 'xxx'

## express

用来创建 Web 服务器

#### 安装

```
npm i express@4.17.1
```

#### 使用

```js
//导入
const express = require('express');
//创建web服务器
const app = express();
//调用app.listen(端口号,回调函数)，启动服务器
app.listen(80, () => {
	console.log('express server running at http://127.0.0.1:8080');
});
```

#### 监听请求

```js
//get
app.get('请求url', function (req, res) {
	res.send({ name: 'zs', age: '18', gender: '男' });
});
//post
app.post('请求url', function (req, res) {
	res.send('请求成功');
});
```

#### 获取 url 中的参数

```js
//req.query对象可以访问到客户端通过查询字符串的形式，发送到服务器的查询参数
app.get('/', (req, res) => {
	console.log(req.query);
});

//获取动态参数
app.get('/user:id', function (req, res) {
	console.log(req.params);
});
```

**通过 req.params 对象，可以访问到 url 中，通过:（冒号）匹配到的动态参数**

#### 托管静态资源

```js
app.use(express.static('public'));

//添加前缀地址
app.use('/static', express.static('public'));
```

#### nodemon

自动重启项目

#### express 中的路由

-   在 Express 中，路由指的是客户端的请求和服务器处理函数之间的映射关系
-   组成：
    1. 请求类型
    2. 请求的 url 地址
    3. 处理函数
-   格式
    ```js
    app.METHOD(PATH, HANDLER);
    ```

##### 路由的匹配过程

每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功才会处理对应函数

##### 最简单用法

```js
//挂载路由
app.get('/', (req, res) => {});
```

##### 模块化路由

1. 创建路由模块对应的.js 文件
2. 调用 express.Router()函数创建路由对象
3. 向路由对象上挂载具体的路由
4. 使用 module.esports 向外共享路由对象
5. 使用 app.use()函数注册路由模块

```js
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {});

module.exports = router;
```

##### 注册路由模块

```js
//导入路由模块
const router = require('./router.js');
app.use(router);
```

**app.use 的作用就是注册全局中间件**

##### 为路由模块添加访问前缀

```js
app.use('/api', router);
```

## 中间件

#### Express 中间件的调用流程

当一个请求到达 express 服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理

#### Express 中间件格式

Express 的中间件，本质上就是一个 function 处理函数，**中间件函数的形参列表中，必须包含 next 参数。而路由处理函数中只包含 req、res**

##### next 函数

是实现多个中间件连续调用的关键，它表示把流派关系转交给下一个中间件或路由

#### 定义中间件函数

```js
const mw = function (req, res, next) {
	next();
};
```

#### 全局生效中间件

客户端发起任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。

```js
const mw = function (req, res, next) {
	next();
};
app.use(mw);

//简化形式
app.use(function (req, res, next) {
	next();
};)
```

#### 中间件的作用

多个中间件之间，共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中，统一为 req、res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用。

#### 局部生效的中间件

不使用 app.use()定义的中间件，叫做局部生效中间件

```js
const mw1 = function (req, res, next) {
	next();
};
const mw2 = function (req, res, next) {
	next();
};
app.get('/', mw1, mw2, function (req, res) {});
```

#### 中间件的注意事项

1. 要在路由之前注册中间件
2. 不要忘记调用 next 函数

#### Express 中间件的分类

1. 应用级别的中间件：
   通过 app.use()或 app.get()、app.post()，绑定到 app 实例上的中间件，叫应用级别中间件
2. 路由级别的中间件：
   绑定到 app.Router()的中间件，叫做路由级别的中间件。与应用级别中间件无异
3. 错误级别的中间件：
   专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃问题。
   必须有 4 个参数(err,erq,ers,next)
4. Express 内置中间件：
    1. express.static
    2. express.json 解析 json 格式请求数据 req.body
    3. express.urlencoded 解析 URL-encoded 格式的请求数据
5. 第三方中间件

#### 自定义中间件

1. 定义中间件
2. 监听 req 的 data 事件
3. 监听 req 的 end 事件
4. 使用 querystring 模块解析请求体数据
5. 将解析出来的数据对象挂载为 req.body
6. 将自定义中间件封装为模块

#### 使用 Express 写接口

1. 创建基本服务器
2. 创建 api 路由模块
3. 编写 get 接口
4. 编写 post 请求

## cors+jsonp

#### 接口跨域问题

解决方法：

1. cors（主流）
2. jsonp

#### cors 中间件

-   使用：
    1. 运行 npm i cors 安装中间件
    2. 使用 const cors = require('cors')导入
    3. 在路由前调用 app.use(cors())配置中间件
-   注意事项：
    1. cors 主要在服务器进行配置。客户端无需任何额外的配置
    2. cors 只有在支持 XMLHttpRequest Level2 的浏览器中可以使用（ie10+,chrome4+,firfox3.5+）

##### cors 响应头部

-   Access-Cintrol-Allow-Origin：指定允许访问的外域资源 URL
    **\***代表允许任何域的请求

    ```js
    res.setHeader('Access-Cintrol-Allow-Origin', 'http://itcast.cn');
    ```

-   Access-Cintrol-Allow-Header：对额外的请求头进行声明，否则请求失败
    ```js
    res.setHeader(
    	'Access-Cintrol-Allow-Header',
    	'Content-type,X-Custom-Header'
    );
    ```
-   Access-Cintrol-Allow-Methods：默认只支持 GET、POST、HEAD 请求，若希望通过其他方式请求资源，则需要指明所允许使用的 HTTP 方法
    ```js
    res.setHeader('Access-Cintrol-Allow-Methods', 'GET,POST,HEAD,DELETE');
    ```
    **\***代表支持任何请求方式

##### cors 请求分类

-   简单请求：
    1. 请求方式：get、post、head 三者之一
    2. http 头部信息不超过以下几种：无自定义头部字段\ Accept\Accept-Language\DPR\Downlink\Save-Data\Viewport-Width\Width\Content-Type
-   预检请求：

    1. 请求方式：get、post、head 之外的 method 类型
    2. 请求头部包含自定义头部
    3. 向服务器发送了 application/json 格式的数据

-   区别：
    1. 简单：客户端与服务器之间只会发生一次请求
    2. 预检：发生两次请求，OPTION 预检请求成功之后，才会发起真正的请求

## 数据库

#### 常见数据库及分类

1. MySQL 数据库（Community+Enterprise）
2. Oracle（收费）
3. SQL Server 数据库（收费）
4. Mongodb 数据库（Community+Enterprise）
   其中 Mysq、Oracle、SQL Server 属于传统数据库，用法相似
   Mongodb 属于新型数据库，弥补了传统型数据库的缺陷

## sql

#### select 语句

```sql
select username,password from user
```

#### insert into 语句

```sql
insert into table_name(list1,list2,...) values(value1,value2)
```

#### update 语句

```sql
update table_name set list_name = new_value where list_name = xxx
```

#### delete 语句

```sql
delete from table_name where list_name = xxx
```

#### where 子句

```sql
... where list_name 运算符 xxx
```

| 操作符  | 描述         |
| :------ | :----------- |
| =       | 等于         |
| <>、!=  | 不等于       |
| >       | 大于         |
| <       | 小于         |
| >=      | 大于等于     |
| <=      | 小于等于     |
| between | 在某个范围   |
| like    | 搜索某种模式 |

#### and\or 运算符

在 where 子句中把多个条件结合起来

#### order by 子句

```sql
... order by desc --降序，asc为升序
-- 多重排序,先按status降序，再按username升序排列
select * form user order by status DESC,username ASC
```

#### count 函数

```sql
select count(*) from table_name where ...
--as 关键字，起别名
select count(*) as total from table_name where ...
```
