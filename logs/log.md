[toc]

### css3 选择器

1. 属性选择器
   ![](media/img/属性选择器.png)
   类选择器、属性选择器、伪类选择器，权重为 10
2. 结构伪类结构选择器  
   ![](media/img/伪类结构选择器.png)

##### nth-child(n)

![](media/img/nth-child.png)
==能否实现:hover:nth-child(x)?==

### 伪元素选择器

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

### javascript

##### 浏览器执行过程

    js引擎将js语言逐行转为机  器语言。

##### js 组成

-   ECMAScript：规定了 js 编程语法和核心知识
-   DOM：文档模型
-   BOM：浏览器对象模型

##### 输入输出语句

-   prompt("输入框");//得到字符型
-   console.log("控制台输出");
-   alert("输出");

---

### 变量

用于存放数据的容器；
程序在内存中申请的一块存放数据的空间；

##### 变量的使用

1. 声明变量
    ```
        var age;
        var age=18;
    ```
2. 赋值
    ```
        var age=18;
        age = 18;
    ```

##### 声明变量的特殊情况

1. 只声明不赋值
    ```
        var sex;
        console.log(sex);
        --undefined
    ```
2. 不声明、不直接赋值直接使用
    ```
        console.log(tel);
        --报错
    ```
3. 不声明直接赋值使用
    ```
        qq=110;
        console.log(qq);
        --110
    ```

##### 变量命名规范

-   由字母、数字、下划线、美元符号组成；
-   严格区分大小写；
-   不能以数字开头；
-   不能是关键字、保留字；
-   变量名必须有意义；
-   遵守驼峰命名法；

### 数据类型

根据占用数据空间区分数据类型；
变量会在程序运行过程中，根据等号右边的值来确定；
变量的数据类型可以变化；

##### 简单数据类型

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
        ```
            var str="my name is yyjj";
            console.log(str.length);//15
        ```
    - 字符串拼接
        ```
            字符串类型+任意类型=拼接后的字符串类型
            console.log('我'+18);//我18
            console.log('12'+18);//1218
            console.log("我"+18+12);//我1812
        ```
3. Boolean
    - true 当 1 看；false 当 0 看
4. undefind
    - 声明不赋值，就是 undefined 未定义类型；
    - undefined 与数字相加，结果为 NaN；
5. null
    - 值为空；

##### typeof

```
    var num=10;
    console.log(typeof num); //number
```

##### 字符类型转换

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

### 运算符优先级

```
|优先级|运算符|顺序|
|:---|:---|:---|
|1|小括号|()|
|2|一元运算符|++ -- !|
|3|算术运算符|==先*/%后+-==|
|4|关系运算符|> >= < <=|
|5|相等运算符|== != === !==|
|6|逻辑运算符|先&& 后|||
|7|赋值运算符|=|
|8|逗号运算符|,|
```

### 流程控制

1. 顺序结构
   程序依据代码的先后顺序依次执行
2. 分支结构
   根据不同的条件，执行不同的代码，得到不同的结果

    - if

    ```
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

    ```
        switch(表达式){
            case value1:
                执行语句1;
                break;
            case  value2:
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

### 命名规范

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

### 数组

1. 创建

    1. new

    ```
        var 数组名=new Array();
        var arr=new Array();//创建一个空数组；
    ```

    2. 利用数组字面量创建数组

    ```
        var 数组名=[];
        var 数组名=['a','b','c'];
    ```

2. 访问数组元素

    1. 数组索引（从 0 开始）

    ```
        数组名[索引号];
        //超出的索引输出undefined
    ```

3. 遍历数组
   循环

4. 数组长度
   数组名.length

5. 数组转换为字符串
    ```
        var arr=['a','b','c'];
        var str='';
        for(var i=0; i<arr.length; i++){
            str+=arr[i];
        }
    ```
6. 数组新增元素

    1. 修改 length 长度

    ```
        var arr=['a','b','c'];
        arr.length=5;
    ```

    2. 修改索引

    ```
        var arr=['a','b','c'];
        arr[3]='d';

        arr[0]='e';//也可以替换元素
    ```

    3. push

    ```
        var arr = [1, 2, 3]
        arr.push(4)
        //在数组末尾添加
    ```

    4. unshift
       用法同 push，在数组头部添加新元素

7. 筛选数组

    1.

    ```
        var arr=['1','2','3'];
        var newArr=[];
        var j=0;
        for(var i=0; i<arr.length; i++){
            if(arr[i]>1){
                newArr.push(arr[i])
                j++;
            }
        }
    ```

    2.

    ```
        var arr=['1','2','3'];
        var newArr=[];
        for(var i=0; i<arr.length; i++){
            if(arr[i]>1){
                newArr[newArr.length  ]=arr[i];
            }
        }
        console.log(newArr);
    ```

8. 数组删除元素（去重）

    [数组去重](https://www.jb51.net/article/176903.htm)

    1. pop()

    ```
        //删除数组最后一个元素
        arr.pop();
        //pop()返回值为删除的元素
    ```

    2. shift()
       用法同 pop()，删除第一个元素
    3. 去重
        ```
            //遍历旧数组，然后拿旧数组去查询新数组
            function unique(arr){
                var newArr=[];
                for(var i=0;i<arr.length;i++){
                    if(newArr.indexOf(arr[i])===-1){
                        newArr.push(arr[i])
                    }
                }
                return newArr;
            }
        ```

9. 数组排序

    ```
        var arr= [];
        arr.reserse();//反转数组

        arr.sort(function(a,b){
            return a-b;(升序)
            //return b-a;(降序)
        });//冒泡排序


    ```

10. 获取索引

    ```
    //indexOf(数组元素，[起始位置])
    arr.indexOf(数组元素)//只返回第一个满足条件的元素索引，若找不到返回-1
    lastIndexOf
    ```

11. 数组转字符串

    ```
        arr.toString();//逗号分隔

        arr.join();//逗号分隔
        arr.join(&);&分隔
    ```

### arguments

不确定有多少个参数传递时，用 arguments 来获取，arguments 存储了所有传递过来 的实参；

## 7.11

### 函数的两种声明方式

1. 利用函数关键字自定义韩式（命名函数）

    ```
        function fn(){

        }
        fn();
    ```

2. 函数表达式（匿名函数）

    ```
        var 变量名 = function(){

        }
        变量名();

    ```

### JavaScript 作用域

    减少命名冲突

1. 全局作用域
   整个 script 标签 或 一个单独的 js 文件

2. 局部作用域
   在函数内部就是局部作用域

### 对象

    对象是一个具体的事物；无序的相关属性和方法的集合

-   属性：事物的特征
-   方法：事物的行为

##### 创建对象

1. 利用字面量创建

```
   //里面的属性或者方法我们采用键值对的形式
   //多个属性或方法用逗号隔开
   //方法冒号后跟一个匿名函数
   //调用对象的属性：对象名.属性名、对象名['属性名']
   //调用对象的方法：对象名.方法名()
   var obj = {};//创建一个空对象
   var obj = {
       uname:'',
       age:'',
       sex:'',
       sauHi:function(){

       }
   }
```

2. new Object 创建

```
    var obj = new Object()
    obj.uname = ''
    obj.age = ''
    obj.sex = ''
    obj.sayHi = function(){

    }
    //利用等号赋值的方法添加对象的属性和方法
```

3. 利用构造函数创建
   前面的方法一次只能创建一个对象

```
    function 构造函数名(){
        this.属性 = 值
        this.方法 = function(){}
    }
    new 构造函数名()
    //构造函数名的首字母大写
    //不需要return就可以返回结果
    function Star(uname, age, sex){
        this.uname = uname
        this.age = age
        this.sex = sex
        this.sing = function(sang){

        }
    }
    var ldh = new Star('刘德华', 18, '男')
    ldh.sing('sang')

```

-   new 关键字执行过程
    1. 在内存中创建一个 koongduixinag
    2. this 就会指向刚才创建的空对象
    3. 执行构造函数里面的代码，给空对象添加属性和方法
    4. 返回这个对象
-   遍历对象
    for...in
    ```
        //for (变量 in 对象)
        for (var k in obj){
            console.log(k)//输出属性名
            console.log(obj[k])//输出属性值
        }
    ```

### 内置对象

-   就是 js 语言自带的一些对象
-   MDN 查阅
-   封装自己的数学对象

```
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
    ```
        var arr=[]
        console.log(arr instanceOf Array)
    ```

### 基本包装类型

1. 字符串对象

    ```
        var str='andy'
        console.log(str.length);
        //把简单数据类型包装成复杂数据类型
        var temp=new String('andy')
        //把临时变量的值给str
        str=temp;
        //销毁这个临时变量
        temp=null
    ```

    - 字符串不可变

    ```
        //修改字符串的值时，本质是新开辟一个空间给新字符，原字符不改变
    ```

    - 求某个字符串出现的位置及次数

    ```
        var str='abcoefoxyozzopp'
        var index=str.indexOf('o');
        while(index!==-1){
            console.log(index);
            index=str.indexOf('o',index+1)
        }
    ```

    - 根据位置返回字符

    ```
        var str='andy'
        console.log(str.charAt(3));

        str[index]//h5 新方法
    ```

    - 返回索引字符的 ASCII 值

    ```
        console.log(str.charCodeAt(0))//97
    ```

    - 拼接、截取字符串

    ```
        concat(str1,str2)//等效于+

        substr('起始位置'，'截取长度')
    ```

    - replace

    ```
        str.replace('被替换的字符','替换的字符')//只替换第一个字符
        while(str.indexOf('')!==-1){
        }

    ```

    - splice

    ```
        //字符串转数组
        str.splice('分隔符')
    ```

### 简单、复杂类型

1. 值类型：简单数据类型 string,number,boolean,undefined,null
    - null 简单数据类型，返回一个空对象 object
    - 存放在栈：由操作系统自动分配释放函数的参数等；
    - 栈中存放值
    - 传参时将值复制给形参，不影响外部变量
2. 引用类型：复杂数据类型，通过 new 关键字创建
    - 存放在堆：一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收
    - 栈中存放数据在堆中的地址
    - 传参时赋值栈中的地址给形参，外部变量会受到影响

### Web API 和 API

1. api
   给程序员提供的一种工具，以便轻松的实现想要完成的功能
2. Web API
   浏览器提供的一套操作浏览器功能和页面元素的 api（BOM\DOM）

##### DOM

    文档对象模型，处理可扩展标记语言的编程接口

###### DOM 树

1. 文档：一个页面就是一个文档，DOM 中用 document 表示
2. 元素：页面中所有标签都是元素，DOM 中用 element 表示
3. 节点：网页中所有内容都是节点，DOM 中用 node 表示
   ==dom 把以上内容都看作对象==

###### 获取元素

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

###### 事件基础

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

###### 操作元素

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

###### 节点操作

1. 父级节点
    ```
        //最近的父节点，找不到返回空
        元素.parentNode
    ```
2. 子节点

    ```
        //所有的子节点，包含元素、文本节点
        元素.childNodes

        //所有子元素节点
        元素.children

        元素.firstElementChild //ie9+

        元素.lastElementChild //ie9+

        元素.children[0]
        元素.children[元素.children.length-1]

    ```

3. 兄弟节点

    ```
        //包含元素、文本节点
        元素.nextSibling
        元素.previousSibling

        元素.nextElementSibling  //元素节点
        元素.previousElementSibling//

        function getNextElementSibling(element){
            var el =element;
            while (el=el.nextSibling){
                if(el.nodeType==1){
                    return el;
                }
            }
            return null
        }
    ```

4. 节点创建和添加

    ```
        document.createElement('tagName')//创建

        parent.appendChild(child)//在后面添加

        parent.insertBefore(child,parent.children[0])

        //效率best
        var array=[]
        for(var i=0;i<1000;i--){
            array.push('<div></div>')
        }
        document.body.innerHtml=array.join('')

    ```

5. 删除节点

    ```
        element.removeChild(element.child[0])

    ```

6. 复制节点

    ```
        element.cloneNode(element.child[0])
    ```

### 事件

##### 注册事件

    两种方式：传统、方法监听
    传统DOM绑定只有第一个生效；脚本绑定只有最后一个生效
    方法监听都生效

1. addEventListener//i9+
    ```
        eventTarget.addEventListener('type',listener[,useCapture])
    ```
    - type:事件类型，如 click 、mouseover
    - listener:事件处理函数，事件发生时会监听函数
    - useCapture:可选参数，默认是 false
2. 删除事件(解绑)

    ```
       eventTarget.removeEventListener('type',listener[,useCapture])
    ```

##### DOM 事件流

事件传播的过程
三阶段：

-   捕获
-   当前目标
-   冒泡

    **js 代码只能执行捕获或者冒泡的其中一个阶段**
    **onclick 和 attachEvent 只能得到冒泡阶段**

##### 常见的对象属性和方法

| 方法               | 说明                           |
| :----------------- | :----------------------------- |
| e.target           | 返回触发事件的对象             |
| e.strElement       | 返回触发事件的对象 //ie6-8     |
| e.type             | 返回事件类型                   |
| e.cancelBubble     | 阻止冒泡 //ie6-8               |
| e.returnValue      | 阻止默认事件如链接跳转 //ie6-8 |
| e.preventDefault() | 阻止默认事件如链接跳转         |
| e.stopPropagation  | 阻止冒泡                       |

##### 事件委托

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

##### 鼠标事件对象

| 鼠标事件对象 | 说明                          |
| :----------- | :---------------------------- |
| e.clientX    | 相对于浏览器的 X 坐标         |
| e.clientY    | 相对于浏览器的 Y 坐标         |
| e.pageX      | 相对于文档页面的 X 坐标//ie9+ |
| e.pageY      | 相对于文档页面的 Y 坐标//ie9+ |
| e.screenX    | 相对于电脑屏幕的 X 坐标       |
| e.screenY    | 相对于电脑屏幕的 Y 坐标       |

### BOM

-   浏览器对象模型
-   把浏览器当作对象看待
-   BOM 的顶级对象是 window
-   BOM 学习的是浏览器窗口交互的一些对象
-   BOM 是浏览器厂商在各自浏览器上定义的，兼容性差

##### 常用事件

1. 窗口加载事件

```
    window.onload=function(){

    }//只能写一次，多次以最后一个为准

    window.addEventListenner('load',function(){

    })//没有限制

    document.addEventListener('DOMContentLoaded',function(){})
    //仅DOM加载完成，不包括样式表，图片，flash等  ie9+

```

2. 调整窗口大小

```
    window.addEventListener('resize',function(){})

```

##### 定时器

1. setTimeout()

```
    window.setTimeout(function(){},2000)
    //页面中可能有多个定时器
    var timee1=setTimeout(,);
```

2. 回调函数

3. 定制定时器

```
window.clearTimer(timer)
```

4. setInterval()
   使用同 setTimer()
   反复调用一个函数
5. clearInterval
   同 clearTimer()

###### this 指向问题

指向调用者

```
//全局作用域或普通函数中指向window
console.log(this);
function fn (){
  console.log(this);
}

//指向调用者
var o = {
    sauHi:function(){
        console.log(this);//指向对象o
    }
}
var btn = document.querySeletor('button');
btn.onclick=function(){
    console.log(this)//指向btn
}


function Fun(){
    console.log(this)//指向fun
}
var fun=new fun();
```

##### js 执行队列

###### 同步、异步

1. 同步任务
   同步任务在主线程上执行，形成一个执行栈
2. 异步任务
   js 异步通过回调函数实现，异步任务会添加到任务队列（消息队列）中
    - 普通事件，click、resize 等
    - 资源加载，load、error 等
    - 定时器，setInterval、setTimer 等

###### 执行机制

1. 先执行栈中的同步任务
2. 异步任务（回调函数）放入任务队列
3. 同步任务执行完毕，依次执行任务队列中的任务，被读取的任务结束等待状态，进入执行栈

##### location 对象

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

##### navigator 对象

包含浏览器的相关信息

##### histor

| history 对象方法 | 作用                                                         |
| :--------------- | :----------------------------------------------------------- |
| back()           | 后退功能                                                     |
| forward()        | 前进功能                                                     |
| go(参数)         | 前进后退功能，参数是 1 ，前进一个页面；参数是-1 后退一个页面 |

### offset\client\scroll

##### offset

动态的得到元素的偏移量

| offset 系列属性      | 作用                                             |
| :------------------- | :----------------------------------------------- |
| element.offsetParent | 返回该元素的有定位的父元素                       |
| element.offsetTop    |                                                  |
| element.offsetLeft   |                                                  |
| element.offsetWidth  | 返回自身包括 padding、边框、内容区的宽度，无单位 |
| element.offsetHeight | 返回自身包括 padding、边框、内容区的高度，无单位 |

###### client

与 offset 相似，不包含边框

###### 立即执行函数

独立创建了一个作用域，里面所有的变量都是局部变量，不会命名冲突

```
(function(){

})()
```

###### scroll

| scroll 属性          | 作用                      |
| :------------------- | :------------------------ |
| element.scrollTop    | 返回被卷去的上侧距离      |
| element.scrollLeft   | 返回被卷去的左侧距离      |
| element.scrollWidth  | 返回自身实际宽度/不含边框 |
| element.scrollHeight | 返回自身实际高度/不含边框 |

### 动画函数

1. 匀速动画

```

function animate(obj,target){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        if(obj.offsetLeft >= target){
            clearInterval(obj.timer);
        }
        obj.style.left=obj.offsetLeft+1+'px'
    },30);
}
```

2. 缓动动画

```

function animate(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var step =(target-obj.offsetLeft)/10   //步长值
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            if(callback)
                callback()
        }
        obj.style.left=obj.offsetLeft+step+'px'
    },15);
}
```

### 移动端网页特效

##### 触屏事件

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

```
element.addEventListener('touchstar',function(e){
    console.log(e.targetTouches[o])
})
```

3. 拖到元素

```
var startX=0  //手指的初始坐标
var startY=o
var x=0     //盒子的原位置
var y=0

element.addEventListener('touchstart',function(e){
    startX=e.targetTouches[o].pageX
    startY=e.targetTouches[o].pageY
    x=this.offsetLeft
    y=this.offsetTop
})
element.addEventListener('touchmove',function(e){
    var moveX=e.targetTouches[o].pageX-startX  //移动的距离
    var moveY=e.targetTouches[o].pageX-startY
    this.style.left=x+moveX+'px' //移动
    this.style.top=y+moveY+'px'
})

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

### 本地存储

1.  -   数据存储在用户浏览器
    -   设置、读取方便、页面刷新不丢失数据
    -   容量较大
    -   只能存储字符串

2.  sessionStorage

        - 生命周期为关闭浏览器
        - 在同一个窗口、页面下数据可以共享
        - 以键值对的形式存储使用

        ```
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

        ```
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

### 数据可视化

##### 什么是数据可视化

1. 目的
    - 借助图形化手段，清晰有效的表达与沟通信息
    - 把数据图形化
2. 场景

3. 常见的数据可视化库
    - D3.js Web 端评价最高的库（上手难）
    - ECharts.js 百度出品
    - Highcharts.js 国外库，非商用免费
    - AntV 蚂蚁金服

##### ECharts

1. 基本使用
    - 引入文件
    - 准备一个 DOM 容器
    - 初始化 echarts 实例对象
    - 指定配置和数据
    - 将配置给 echarts 实例对象

### es6

###### 面向对象概述

-   pop/面向过程：按照步骤解决问题
    1. 优点：性能较高，适合跟硬件联系紧密的东西
    2. 缺点：没有面向对象以维护、复用、扩展
-   oop/面向对象：以对象的功能来划分问题

-   面向对象的特征

    -   封装性
    -   继承性
    -   多态性

###### 类和对象

-   类：设计图
-   对象：通过设计图产生的具体物品

1. 创建类

    ```
        class Star{

        }
        new Star();
    ```

2. 类 constructor 构造函数
    ```
    class Star{
        constructor(uname,age){
            this.uname=uname
            this.age=age
        }
        }
        var ldh=new Star('ldh');
        var zxy=new Star('zxy')
        //通过calss关键字创建类，类名首字母大写
        //constructor对象可以接受传递过来的参数，同时返回实例对象
        //生成实例new不能略
    ```
3. 类中添加公有方法

    ```
        class Star{
            constructor(uname,age){
                this.uname=uname
                this.age=age
            }
            sing(sang){
                console.log(sang);
            }
        }
        var ldh=new Star('ldh',18);
        var zxy=new Star('zxy',18);
        ldh.sing('a')
        //多个函数方法之间不需要逗号
    ```

4. 类的继承

    ```
        class Father{
            constructor(x,y){
                this.x=x
                this.y=y
            }
            sum(){
                console.log(this.x+this.y)
            }
        }
        class Son extends Father{
            constructor(x,y){
                super(x,y)//调用父类的constructor
            }
        }
        var son=new Son(1,2);
        son.sum()

    ```

5. super 关键字

    ```
        class Father{
            say(){
                return 'f'
            }
        }
        class Son extends Father{
            say(){
                console.log(super.say()+'s')
            }
        }
        var son=new Son()
        son.say()


        //执行子类方法采用就近原则

        class Father{
            constructor(x,y){
                this.x=x
                this.y=y
            }
            sum(){
                console.log(this.x+this.y)
            }
        }
        class Son extends Father{
            constructor(x,y){
                super(x,y)//必须在子类this前调用
                this.x=x
                this.y=y

            }
            subtract(){
                console.log(this.x-this.y)
            }
        }
        var son=new Son(1,2);
        son.subtract()
        son.sum()
    ```

6. 注意点
    - 必须先定义类，才能实例化对象
    - 类里面的共有属性和方法一定要加 this 使用
    - this 的指向问题
        1. constructor 里面的 this 指向创建的实例对象
        2. 方法里面的 this，指向方法的调用者//解决：用变量存储 this

### 构造函数和原型

##### 概述

**构造函数存在浪费内存的问题**

```
    //创建函数
    var obj1=new Object();

    var obj2={}

    function Star(uname){
        this.uname=uname//实例成员
    }
    Star.sex='男' //静态成员
    var ldh=new Star('ldh');

    //实例成员只能通过实例对象来访问
    //静态成员只能通过构造函数访问
```

##### 原型 prototype

```
    //  共享的函数可以存放在 原型对象 内
    function Star(uname){
        this.uname=uname//实例成员
    }
    Star.prototype.sing=function(){

    }
    Star.sex='男' //静态成员
    var ldh=new Star('ldh');
    //一般公共的属性定义到构造函数里，公共的方法定义在prototype中

    //在实例对象身上系统自己添加一个__proto__指向我们构造函数的原型对象
    //方法的查找原则：首先看实例对象身上是否有查找的方法，若没有，因为有__proto__存在，则去构造函数原型对象prototype上去找
```

###### 构造函数 constructor

用于记录该对象引用于哪个构造函数

```
    function Star(uname){
        this.uname=uname
    }
    var ldh=new Star('ldh');
    Star.prototype={
        constructor:Star,
    }//该方法会覆盖constructor对象
    console.log(Star.prototype.constructor); //Star(uname){}
    console.log(ldh.__proto__.constructor);//Star(uname){}
```

###### 构造函数、实例、原型对象三者关系

![](/media/img/构造函数.PNG)

###### 原型链

![](/media/img/原型链.PNG)

###### js 的成员查找机制

1. 当访问一个对象的属性（包括方法）时，首先查找这个==对象自身==有没有该属性
2. 如果没有就查找它的原型（也就是**proto**指向的==prototype 原型对象==）
3. 如果还没有就查找原型对象的原型（==Object 的原型对象==）
4. 依次类推一直找到 Object 为止（==null==）
5. **proto**对象原型的意义就在于为对象成员查找机制提供一个方向

###### 原型对象的 this 指向

1. 在构造函数中，里面的 this 指向对象实例
2. 原型对象函数里面的 this 指向实例对象

###### 扩展内置对象

```
    Array.prototype.sum=function(){
        var sum=0
        for(var i=0;i<this.length;i++){
            sum+=this[i]
        }
        return sum
    }
    var arr=[1,2,3]
    console.log(arr.sum())
```

##### 继承

###### call

```
// 调用函数，并修改this指向
function fn(x,y){
    console.log(this)
    console.log(x+y)

}
var o={
    name:'andy'
}
//fn.call();
fn.call(o,1,2);//此时this指向o
```

###### 利用父构造函数继承属性

```
    function Father(uname,age){
        //this指向父构造函数的实例对象
        this.uname=uname
        this.age=age
    }
    Father.prototype.money=function(){
        console.log('100000')
    }
    function Son(uname,age){
        //this指向子构造函数的实例对象
        Father.call(this,uname,age)
    }
    Son.prototype=Father.prototype
```

###### 利用原型对象继承方法

```
function Father(uname,age){
        //this指向父构造函数的实例对象
        this.uname=uname
        this.age=age
    }
    Father.prototype.money=function(){
        console.log('100000')
    }
    function Son(uname,age){
        //this指向子构造函数的实例对象
        Father.call(this,uname,age)
    }
    //Son.prototype=Father.prototype//这种方法会同时修改父原型对象
    Son.prototype=new Father()
    Son.prototype.constructor=Son
```

### 函数进阶

##### 函数定义

1. 声明函数
2. 匿名函数
3. new Function()
    ```
    var f=new Function('a','b','console.log(a+b)');
    //所有函数都是Function的实例
    //函数也属于对象
    ```

##### 函数调用方式

1. 普通函数
    ```
    fn();
    fn.call();
    ```
2. 对象的方法

    ```
    var o ={
        sayHi:function(){

        }
    }
    o.sayHi()
    ```

3. 构造函数

    ```
    function Star(){}
    new Star();
    ```

4. 绑定事件函数

    ```
    btn.onclick=function(){}
    //触发事件调用
    ```

5. 定时器函数

    ```
    setInterval(function(){},1000)//定时器自动调用
    ```

6. 立即执行函数

    ```
    (function(){

    })();
    //自动调用
    ```

##### 函数内部 this 指向

1. 普通函数
    ```
    fn();
    fn.call();
    //指向window
    ```
2. 对象的方法

    ```
    var o ={
        sayHi:function(){

        }
    }
    o.sayHi()
    //指向对象o
    ```

3. 构造函数

    ```
    function Star(){}
    var ldh = new Star();
    //指向ldh实例对象

    ```

4. 绑定事件函数

    ```
    btn.onclick=function(){}
    //触发事件调用
    //指向btn
    ```

5. 定时器函数

    ```
    setInterval(function(){},1000)//定时器自动调用

    //指向window
    ```

6. 立即执行函数

    ```
    (function(){

    })();
    //自动调用
    //指向window
    ```

##### call 方法

```
var o = {
    name:'andy'
}
function fn(){

}
fn.call(o)
//call可以改变函数内部this的指向
//call可以实现继承
function Father(){

}
function Son(){
    Father.call(this)
}
```

##### apply 方法

```
var o = {
    name:'andy'
}
function fn(){

}
fn.apply(o)
//apply可以改变函数内部this的指向
//apply的参数必须是数组
var arr=[1,12,33]
Math.max.apply(Math,arr);
```

##### bind 方法

-   改变函数的调用者
-   语法规范同 apply，不会调用函数
-   返回值为函数的拷贝

###### bind 应用

```
btn.onclick=function(){
    setTimerout(function(){

    }.bind(this),1000)
}

```

##### 严格模式//ie10+

1. 消除了 js 语法的一些不合理之处
2. 消除了一些不安全之处
3. 提高了编译效率
4. 禁用了一些未来可能会定义的语法，为新版本铺垫

###### 开启严格模式

-   为整个脚本
    写在开头'use strict'
-   为个别函数
    写在函数内部'use strict'

###### 严格模式的变化

1. 变量必须先声明再使用
2. 严禁删除已经声明的变量
3. 全局模式下函数 this 指向 undefined
4. 构造函数不加 new 调用，this 会报错
5. 函数不能有重名参数
6. 函数必须声明在顶层

##### 高阶函数

-   作为参数的或 return 的是函数

##### 闭包

###### 定义

> 闭包指有权访问另一个函数作用域中变量的函数。

简单理解：一个作用域可以访问另一个函数内部的局部变量
