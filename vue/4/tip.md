[toc]
### 修改数组的两个特殊情况
1. arr.leength=0,不具备响应特性
2. arr[0]=100,不具备响应特性
### 修改对象的特殊情况
添加obj.x,x属性，也不具备响应特性
### 修改方法；
1. vm.$set(target,propertyName/index,value)
2. Vue.set(target,propertyName/index,value)
3. vm.forceupdate()
### 生命周期
        beforeCreate() {
            // console.log('hello');
            // console.log(this)//yes
            // console.log(this.title)//no
            // console.log(document.querySelector('#root'))//maybe,模板未渲染
            //应用场景：给实例自定义内容
            // this.x=100//yes
        },
        created() {
            // console.log(this)//yes
            // console.log(this.title)//yes
            // console.log(document.querySelector('#root'))//maybe
            //应用场景：修改data的值
            // this.title='world'
        },
        beforeMount() {
            // console.log(this)//yes
            // console.log(this.title)//yes
            // console.log(document.querySelector('#root'))//maybe
            //应用场景：修改data的值
            // this.title='world'
        },
        mounted() {
            // console.log(this)//yes
            // console.log(this.title)//yes
            // console.log(document.querySelector('#root'))//yes
            // //应用场景：一般在第一次页面渲染完毕后的工作都在这完成
            // setTimeout(() => {
            //     this.title='world'
            // },5000) 
            // //ajax放这； 
        },
        beforeUpdata(){
            //将要发生数据更新时执行
        },
        updated(){
            //数据后更新时执行
        },
        beforeDestroy(){

        },
        destroyed(){
            
        }
### 模板语法
1. v-once：只渲染一次
2. v-html：输出html（慎用！）
3. v-text：完全替换原内容
4. v-bind：绑定属性
5. v-on：绑定函数
6. v-model：双向绑定数据


