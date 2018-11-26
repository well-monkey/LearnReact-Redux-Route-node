# learnReact

#### 项目介绍

学习react 项目实践 企业招聘可以聊天的APP

运用了Redux+React Router+Node.js全栈开发知识，支持服务端渲染，运用socket.io处理聊天数据

一些基本版本支持情况：

"antd-mobile": "^2.2.2"<br />
"react": "^16.4.1",<br />
"react-dom": "^16.4.1",<br />
"react-redux": "^5.0.7",<br />
"react-router-dom": "^4.3.1",<br />
"webpack": "3.8.1"<br />

#### 效果展示


######  <div align="center"> ======注册功能 分为两种身份======</div>



<div align="center"><img width="375" height="667" src="https://github.com/well-monkey/LearnReact-Redux-Route-node/raw/master/example/static/register.gif"/></div>
<!-- ![image](https://github.com/well-monkey/LearnReact-Redux-Route-node/raw/master/example/static/register.gif) -->



######   <div align="center">======登录功能 列表展示 个人中心展示======</div>


<!-- ![image](https://github.com/well-monkey/LearnReact-Redux-Route-node/raw/master/example/static/login.gif) -->


<div align="center"><img width="375" height="667" src="https://github.com/well-monkey/LearnReact-Redux-Route-node/raw/master/example/static/login.gif"/></div>






#### 教程说明

 这里面是两个文件夹  
1. 一个是example是react的一些简单的小例子，可以根据官网和本文件进行演练熟悉 react的一些基本的知识
2. 另外一个是一个整体的项目 引入antUI组件 做的一个招聘求职的app 下面是APP文件的使用方式

#### 使用说明

1. cd imooc             //进入整体项目目录
2. npm install          //安装依赖
3. npm run server       //启动后台服务 端口9093
4. npm run start        //启动项目查看 端口3000

#### 学习说明

 ======整理不易，star支持一下吧:smile:======   


```
第1章 导学

    React   若果要做复杂应用 得用到 redux
    Redux 
    dispatch  action reducer state 单身边数据流

一.课程概述
    1.实时聊天的app
    2.app功能 
登陆注册 信息完善 个人中心 牛人列表 boss列表 消息列表  聊天详情页
    3.技术栈   React全家桶
    4.架构图
二.课程安排
    1.第一章 课程介绍
    2.第2-3章 知识储备+React全家桶学习
    3.第4-11章 项目实战
    4.第12章 回顾总结 代码优化
三.学习前提
    1.Node.js npm webpack 使用经验 
    2.react基础 和react.js
四.讲授方式
    1.新人进阶react形式 逐步优化
    2.逐个开发功能页面 抽离公共组件
    3.手写每一行js代码 尽量不写或者少写css
五.课程收货
    1.了解一个重度复杂规模的应用开发流程
    2.掌握React的高级应用
    3.彻底掌握Redux使用
    4.了解实时应用的开发方式
``` 





```
第2章 知识储备

第2-1节 介绍React开发环境

    一.课程内容

        1.Create-react-app脚手架生成文件格式 （Facebook官方推荐）
        2.安装和使用第三方库
        3.定制化配置

    二、React官方脚手架
        1.官网 https://github.com/facebookincubator/create-react-app 

            (1)npm install -g create-react-app
            (2)create-react-app imooc
            
        2.npm start 开启调试环境
        3.浏览器访问 localhost:3000  
        4.脚手架命令 

            (1)npm install redux --save 安装第三方库 redux
            (2)npm run eject 弹出配置文件 可以自定义配置webpack 单项不可逆项
            (3)扩展package.json里的字段，扩展npm run 命令


第2-2节 ES6常用语法 

    三、ES6常用语法
        1.ES6是什么

            (1)2015年6月正式发布
            (2)使用babel语法转换器，支持低端浏览器 
            (3)流行的库基本都基于ES6构建 React默认使用ES6新语法开发

        2.环境配置

            (1)安装node.js
            (2)npm install -g create-react-app 安装脚手架
            (3)create-react-app ReactApp 创建react项目

        3.ES6新语法讲解

        (1) 块级作用域

            let和const
            {
                vat name = 'imooc' //获取并打印
                let sex = '男' //获取不到
            }
            console.log(name,sex)
            const 是常量 不能修改

        (2) 函数的用法 参数默认值 箭头函数 展开运算符

            模板字符出纳  使用反引号，直接写变量  告别+拼接字符串
            let name = 'imooc'
            let course = 'React'
            console.log('hello ' + name +',course is ' + course) //以前
            console.log(`hello ${name},course is ${course}`)  //现在
            console.log(`
                测试多行
                换行
                字符串
                es6不会报错
            `)

            // 函数的用法 参数默认值 箭头函数 展开运算符
            // 1.代码简洁  参照例子1
            // 2.this作用域保持   在类似于定时器等函数中 this可以保持不变
            // 3.函数体只有一条return语句 可以简写 类似Python  参照例子3
            // 4.参数可以给默认值如果没有传值就有一个默认值   参照例子4
            // 5.参数可以传数组 数组前面用三个点 ...arr 可以把数组展开 参照例子5 展开符 把中括号去掉

            e1.ES6函数用法例子1

            function hello(name){
                console.log(`hello ${name} !`)
            }
            const hiFun = (name) =>{
                console.log(`hello ${name} !`)
            }
            hello('你好')
            hiFun('大熊猫')


            e2.ES6函数用法例子2
            setTimeout(function(){
                console.log(123)
            },1000)

            e3.ES6函数用法例子3
            const double = x => x*2
            console.log(double(5))

            e4.ES6函数用法例子4
            const helloDefault = (name='小狗') =>{
                console.log(`hello ${name}`)
            }
            helloDefault()

            e5.ES6函数用法例子5
            function helloApply(name1,name2){
                console.log(name1,name2)
            }
            var applyArr = ['哈士奇','柴犬1']
            helloApply.apply(null,applyArr)
            helloApply(...applyArr)

        (3) 对象扩展 object扩展 

            // Object.keys values entries
            // 对象方法的简写
            // 展开运算符（不是ES6标准，但是babel支持）
            let obj = { name:'哈士奇',isSmart:'no'}
            console.log(Object.keys(obj))     //key分成一个数组
            console.log(Object.values(obj))   //values分成一个数组
            console.log(Object.entries(obj))  //key values

            const name = 'desc'
            const dogObj = {
                // name:'大黄'   //如果只写这个  会打印成两个
                name,
                [name]:'大黄',   //[]是计算属性
                hello:function(){

                }, 
                hello1(){       //function可以不用写  简写

                }
            }
            dogObj[name] = 'hello 大黄'
            console.log(dogObj)

            //对象之间的合并 展开运算符
            const PM = {'type':'产品',workYear:'15年了'}
            const FE = {'type':'前端',sex:'男',age:'23'}
            console.log({...PM,...FE})

        (4) 解构赋值    数组解构  对象解构

            // 数组函数也可以多返回值了 
            const arr = ['网易','阿里']
            let arg1 = arr[0]
            let arg2 = arr[1]
            let [newArg1,newArg2] = arr 
            console.log(arg1,'|',arg2,newArg1,'|',newArg2)

            //对象解构
            const positionObj = {name:'产品经理',year:'3-5年'}
            const {name,year} = positionObj
            console.log(name,year)
            
        (5) 类 提供class的语法糖 是prototype的语法糖 extends继承 

        constructor 构造函数
            class MyApp{
                constructor(){
                    this.name = '老王'
                }
                sayHello(){
                    console.log(`hello ${this.name} !`)
                }
            }
            let app = new MyApp()
            app.sayHello()

        (6) 新的数据结构 ES6中新出现的数据结构 

            set 元素补课不可重合
            Map
            Symbol

        (7）模块化 ES6中自带了模块化机制，告别了seajs和require.js

            // import import{}  Export Export default  node现在还不支持，还需要用require  来记载文件
            // module1.js 
            export const name  = '模块1'
            export function sayHello(){console.log('hello')}
            export default function test(){console.log('hello')}
            // module2.js
            // import { name } from './module1'
            //import * as test from './module1'
            console.log(name)

        (8) 其他  还有一些特性。不在ES6范围，但是也被babel支持 被大家接受和使用

            对象扩展符 函数绑定     babel-plugin-transform-object-rest-spread 插件 支持扩展符好
            装饰器
            Async await
            promise  迭代器和生成器 代理proxy

        (9)常见代码片段
```









```

    第2-3节 express

        Express 开发web接口 基于nodejs 快速、开发、极简的web开发框架
        非关系型数据库 mongodb   json数据
        使用nodejs的mongoose模块链接和操作mongodb

        1.npm install express -save 安装

        2.hello world 应用

            const express = require('express')
            // 新建app
            const app = express()
            app.get('/',function(req,res){
                res.send('<h1>hello word</h1>')
            })
            app.get('/data',function(req,res){
                res.json({name:'node',age:'10'})
            })
            app.listen(9093,function(){
                console.log('Node app start at port 9093')
            })
            进入相应的目录 启动 node server.js 

        3.监听路由和相应内容  使用nodemon自动重启 npm install  nodemon -g

            nodemon server.js

        4.app.get app.post 分别开发get和post接口

          app.use 使用模块
          res.send res.json res.sendfile 相应不同的内容

    第2-4节 mongodb   

        1.非关系型数据库   

            (1)官网 https://www.mongodb.com/ 下载安装MongoDB
            (2)brew install mongodb
            (3)brew services start mongodb  安装完输入启动
            (4)mongo   查看mongo状态   
            (5)npm install mongoose -save 安装mongoose  mongodb和mode配合比较好的就是mongoose库
            通过mongoose操作mongodb,存储的就是json 相对于mysql来说，要易用得多

        2.mongoose的使用

            connect链接数据库
            定义文档类型，Schema和model新建模型
            String Number等数据结构 
            定create,remove,update分别用来增、删、改的操作
            

        3.增删改查

            (1)mongod --config /usr/local/etc/mongod.com 后台启动  
            (2)Express 结合mongodb
            (3)封装mongoose   
            (4)Find和findOne用来查询数据
            (5)update更新数据
            (6)Remove删除数据

        建表    
        const User = mongoose.model('user',new mongoose.Schema({
            user:{type:String,require:true},
            age:{type:Number,require:true}
        }))

        增加

        User.create({
            user:'chenyixun',
            age:'12'
        },function(err,doc){
            if(!err){
                console.log(doc)
            }else{
                console.log(err)
            }
        })  

        删除

        User.remove({age:18},function(err,doc){
            if(!err){
                console.log(doc)
            }else{
                console.log(err)
            }
        }) 
        
        修改

        User.update({'user':'xiaoming'},{'$set':{age:15}},function(err,doc){
            if(!err){
                console.log(doc)
            }else{
                console.log(err)
            }
        })

        查找

        User.find({user:'xiaoming'},function(err,doc){
            if(!err){
                console.log(doc)
            }else{
                console.log(err)
            }
        })

        4.后续进阶

            mongodb独立工具函数
            express使用body-parser支持post参数
            使用cookie-parser存储登录信息cookie

```










```
第3章 React基础知识

第3-1节 React基础知识回顾
    目录结构
    一、React是什么
    二、使用React实现组件化
    三、React进阶

    一、React是什么

        帮助你构建UI的库
        Facebook出品 专注View层
        一切皆组件

    二、组件之间传递数据

        组件之间使用props传递数据
        使用<组件 数据="值">的形式传递
        组件里使用this.props获取值
        如果组件只有render函数，汉可以使用函数的形式写组件
        class App extends Component {
            render() {
                return (
                    <div className="App">
                        <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to react</h1>
                        </header>
                        <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                        <一营 老大='张大喵'></一营>
                        <骑兵连 position='孙德胜'></骑兵连>
                    </div>
                );
            }
        }
        function 骑兵连(props){
            return  <h2>骑兵连连长{props.position},冲啊</h2>
        }
        class 一营 extends React.Component{
            render(){
                return <h2>一营营长，{this.props.老大}</h2>
            }
        }  

    三、组件内部state

        1.组件内部通过state管理状态   
        2.JSX本质就是js,所以直接数组.map渲染列表
        3.constructor 设置出事状态，记得执行super(props)
        如 state就是一个不可变的对象，使用this.state获取
        class 一营 extends React.Component{
            constructor(props){    //构造函数
                super(props)
                this.state = {
                    solders:['虎子','柱子','王根生']
                }
            }
            render(){
                return (
                    <div>
                        <h2>一营营长，{this.props.老大}</h2>
                        <ul>
                            {this.state.solders.map(v=>{
                                return <li key={v}>{v}</li>
                            })}
                        </ul>
                    </div>
                )
	        }
        }

    四、事件

    onClick点击事件
        JSX里面，onClick={this.函数名}来绑定事件
        
        this引用的问题，需要在构造函数里面用bind来绑定this  
        this.setState修改state,记得返回新的state,而不是修改

        第一种this解决方式

            constructor里面直接绑定this  缺点是每一个都需要绑定一个
            this.addSolder = this.addSolder.bind(this)

        第二种this解决方式
            
            点击直接绑定
            <button onClick={()=>this.addSolder()}>添加新的战士</button>

        第三种this解决方式

            addSolder = ()=>{}  

    五、React生命周期

        React组件有若干钩子函数，在组建不同的状态执行
        初始化周期
        组件重新渲染生命周期
        组件卸载声明周期
    
    六、chrome

        React Developer Tools

    七、Antd-mobile组件库

        蚂蚁金服出品的UI组件库
        npm install antd-mobile --save
        npm install react-app-rewired --save-dev 按需引入

```












```
第4章 Redux状态管理与React-router

    第4-1节 Redux 是什么

        (1) Redux专注于状态管理， 和React解耦
            单一状态，单项数据流
            核心概念：store,state,action,reducer

        (2)
            举例子：独立团项目
                独立团逐渐发展，管不过来了
                人少的时候，无论是兵器或者人员变更，都是setState
                发展为千人打团后,老李决定，军事生活分开
                所有状态归赵政委(redux)管理，自己只打仗（view显示）
            老赵主要功能
                老赵有一个保险箱(store)，所有人的状态，在那里都有记录(state)
                需要改变的时候，需要告诉专员(dispatch) 要干什么(action)   
                处理变化的人(reducer)拿到state和action,生成新的state
            走马上任
                首先通过reducer新建store,随时通过store.getState获取状态
                需要状态变更，store.dispatch(action)来修改状态
                Reducer函数接受state和action,返回新的state,可以用store.subscribe监听每次修改  

        (3) npm  install redux --save

        在app.js里面或者index.js里面
        import { createStore } from 'redux'

        // 通过reducer建立 根据老的state和action 生成新的state

        function counter(state=0,action){
            switch(action.type){
                case '加机关枪':
                    return state + 1
                case '减机关枪':
                    return state - 1
                default:
                    return 10
            }
        }

        // 1,新建store

        const store  = createStore(counter)
        const init = store.getState()
        console.log(init)
        function listener(){
            const current = store.getState()
            console.log(`现在有机枪${current}把`)
        }
        store.subscribe(listener) //每次状态变化都会触发这个函数
        //派发时间 传递 action
        store.dispatch({type:'加机关枪'})
        store.dispatch({type:'减机关枪'}) 

    第4-2节 Redux如何和React一起用

        (1)手动链接，老赵怎么管理独立团呢？
        (2)把store.dispatch方法传递给组件，内部可以调用修改状态
        Subscribe订阅render函数，每次修改都重新渲染
        Redux相关内容，移到单独的文件index.redux.js单独管理    

        index.redux.js

        const ADD_GUN = '加机关枪'
        const REMOVE_GUN = '减机关枪'

        // 通过reducer建立  根据老的state和action 生成新的state

        export function counter(state=0,action){
            switch(action.type){
                case ADD_GUN:
                    return state + 1
                case REMOVE_GUN:
                    return state - 1
                default:
                    return 10
            }
        }
        
        // action creator 

        export function addGUN(){
            return{
                type:ADD_GUN
            }
        }
        export function removeGUN(){
            return{
                type:REMOVE_GUN
            }
        }
  
        index.js

        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App';
        import registerServiceWorker from './registerServiceWorker';
        import { createStore } from 'redux'
        import { counter } from './index.redux'

        // 1,新建store

        const store  = createStore(counter)
        function render(){
            ReactDOM.render(<App store = { store }/>, document.getElementById('root'));
            registerServiceWorker();
        }
        render()  //执行render
        store.subscribe(render) //更新render

        app.js

        import React, { Component } from 'react';
        import logo from './logo.svg';
        import './App.css';
        import { addGUN } from './index.redux'
        class App extends Component {
            render() {
                    const store  = this.props.store
                    const num = store.getState()
                    return (
                        <div className="App">
                            <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to react</h1>
                            </header>
                                    <p>现在有机枪{num}把</p>
                                    <button onClick={()=>store.dispatch(addGUN())}>增加一把枪</button>
                            <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                            </p>
                        </div>
                    );
            }
        }
        export default App;

    第4-3节 Redux状态管理 优化 组件解耦 

        1.组件尽可能的通用  所以 addGun 尽可能的以参数形式 传过去
        2.store  组件形式传进去    思考 store 可能一层一层的往下传？属性传递陷阱

    第4-4节 Redux状态管理 更进一步 让Redux可以处理异步

        1.处理异步、调试工具、优雅的和react结合   

            Redux处理异步，需要redux-thunk插件
            npm install redux-devtools-extension并且开启
            使用react-redux优雅的链接react和redux

        2.Redux默认只处理同步，异步需要redux-thunk中间件

            npm install redux-thunk --save
            使用applyMiddleWare开启thunk中间件
            action可以返回函数，使用dispatch提交action

    第4-5节 Redux状态管理 chrome Redux调试工具 

        Redux devTools    
        新建store的时候判断window.devToolsExtension
        使用compose结合thunk和window.devToolsExtension
        调试窗的redux选项卡，实时看到state

        const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():()=>{}

        // 1,新建store

        const store  = createStore(counter,compose(
            applyMiddleware(thunk),
            reduxDevtools
        ))
       
    第4-6节 Redux状态管理 使用react-redux  

        1.老赵能力用起来很麻烦，为了方便管理，使用魏和尚来负责链接

            (1)npm install react-redux --save
            (2)忘记subscribe,记住reducer,action,dispathc即可
            (3)React-redux提供provider和connect两个接口来链接

        2.react-redux具体使用

            (1)使用provider组件在用用最外层，传入store即可，只用一次
            (2)connect 负责从外部获取组件需要的参数
            (3)connect可以用装饰器的方式写    

    第4-7节 Redux状态管理 使用React-redux (connect可以使用装饰器的方法来写)

        1.使用装饰器优化connect代码

            (1)npm run eject 弹出个性化配置
            (2)npm install 
            (3)babel-plugin-transform-decorators-legacy
            package.json 里面babel加上plugins配置

            (4)@connect(
                // 第一个参数  你要state什么属性放到props里面  
                state =>({num:state}),
                // 你要什么方法 放到props里面 自动dispatch
                { addGun,removeGun,addGunAsync }) 

        2.React 后续

            (1)什么数据应该放在React里
            (2)Redux管理ajax
            (3)Redux管理聊天数据

    第4-8节 React-router4 路由

        1.react-router基础知识

        2.React-router4是什么

            (1)React官方推荐的路由库 4是最新版本
            (2)4是全新的版本 和之前的版本不兼容 浏览器和RN均兼容
            (3)React开发单页面应用必备，践行路由即组件的概念
            (4)核心概念 动态路由、Route、link、switch
        
        3.简单的例子

            (1)npm install react-router-dom --save
            (2)Router4 使用react-router-dom 作为浏览器端的路由
            (3)忘记Router2的内容，拥抱最新的Router4

        4.入门组件
            
            (1)BrowserRouer 包裹整个应用
            (2)Router 路由对应渲染的组件 可嵌套
            (3)link 跳转专用

    第4-9节 React-router4 路由 其他组件   

        1.其他组件

            url参数  Route组件参数可用冒号标识参数
            Redirect组件跳转
            switch 之渲染一个子Route组件

            histotry  histotry.push('/') 跳转
            lacation  页面信息
            match     参数有关

    第4-10节 React-router4 和Redux配合   复杂redux应用 
            
            auth.redux.js和dashboard.js

            const LOGOUT = 'LOGOUT'
            export function auth(state={inAuth:false,user:'李云龙'},action){
                switch(action.type){
                    case LOGIN:
                        return {...state,isAuth:true}
                    case LOGOUT:
                        return {...stae,isAuth:false} 
                    default 
                        return state      
                }
            }

            // action

            export function login(){
                return {type:LOGIN}
            }
            export function logout(){
                return {type:LOGOUT}
            } 

    第4-11节 React-router4 和Redux配合   复杂redux应用  

        1.和redux配合
            复杂redux应用 多个reducer,用combineReducers合并
            Redirect组件跳转
            Switch只渲染一个
        
        2.合并connect redux 然后根据 isAuth判定是否登录然后 显示不同的按钮 跳转页面

    第4-12节 React-router4 和Redux配合   复杂redux应用  
        主要为回顾和总结  还有截图        
``` 









```
    第五章 需求 
        5.1注册-完善信息 - 列表 - 聊天

            1.文件架构和规范

                (1)Src 前端源码目录
                (2)server后端express目录
                (3)核根据功能文件夹  component container reducers

            2.router怎么划分页面

                (1)进入应用时获取用户信息，用户未登录跳转login页面
                (2)login和register页面不需要权限认证
                (3)用户信息  聊天列表 职位列表 共享底部tabbar

            3.其他注意事项

                (1)mongodb字段设计
                (2)axios发送异步请求
                (3)redux管理所有数据 组件尽量用antd-mobile 弱化css

        5.2前端端联调

            1.node server 启动 服务端 loaclhost:9093/data 显示数据

            2.使用axios发送异步请求

                如何发送，端口不一致，使用proxy配置转发
                axios拦截器 统一loading处理
                redux使用异步处理数据 渲染页面 然后dispatch即可
            
            3.axios

                简洁好用的发送库 npm install axios --save
                package.json 里面统一做一下转发 
                "proxy":"http://localhost:9093"  重启
```












```
    第六章 登录注册

        6.1登录注册

            1.登录注册功能实现

                页面文件结构
                web开发模式
                前后端实现

            2.骨架接口的实现

                组件放在component文件夹下面
                文件放在container文件夹下面
                页面入口处获取用户信息，决定跳转到哪个页面

            3.开发模式
            
                基于cookie用户验证
                    express依赖cookie-parser,需要npm install cookie-parser -save安装 
                    cookit类似于一张身份卡，登录有服务端返回，你带着cookie就可以访问受限资源
                    页cookie的管理浏览器会自动处理

            4.开发流程
                页面加载页面（带cookie向后端获取用户信息）=> 用户加载页面 
                如果登录 => app内部页面 
                如果未登录 => 登录页面 =>登陆成功 前端存储cookie 跳转APP内部页面

        6-2 登录注册-登录注册页面实现

            文件目录简化
            src 下面放 
            config.js index.js  job.png reducer.js  component container redux

            config.js 保持不变  reducer.js 返回空对象

            index.js 

                import React from 'react';
                import ReactDOM from 'react-dom';
                import { createStore,applyMiddleware,compose } from 'redux' // applyMiddleware 管理中间件 compose组合函数
                import thunk  from 'redux-thunk'
                import { Provider } from 'react-redux' //链接用的 只用一次
                import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

                import reducers from './reducer' // 全部的reducer
                import './config'
                import 'antd-mobile/dist/antd-mobile.css';

                // 1,新建store

                const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():()=>{}
                const store  = createStore(reducers,compose(
                    applyMiddleware(thunk),
                    reduxDevtools
                ))

                ReactDOM.render(
                    (<Provider store={store} >
                        <BrowserRouter>
                            
                        </BrowserRouter>
                    </Provider>), 
                    document.getElementById('root')
                );

            package.json

                babel-plugin-import 按需加载
                transform-decorators-legacy
                proxy:"http://localhost:9093"
                cookie-parser
                redux
                redux-thunk
                react-redux 
                react-router-dom


        6-3 登录注册-判断路由    


            1.检测路由    AuthRoute 组件  检验路由是否ok  component文件夹下面新建AuthRoute

                import React from 'react'
                import axios from 'axios'

                class AuthRoute extends React.Component{
                    componentDidMount(){
                        // 获取用户信息
                        axios.get('/user/info').
                        then(res=>{
                            if(res.status === 200){
                                console.log(res.data)    
                            }
                        })
                    }
                    render(){
                        return null
                    }
                }
                export default AuthRoute

            2.server 下面建立 user.js  server.js 

                user.js
                    // 中间件
                    const express = require('express') 
                    const Router = express.Router()
                    Router.get('/info',function(req,res){
                        return res.json({code:1})
                    })
                    module.exports = Router

                server.js

                    const express = require('express')
                    const userRouter  = require('./user')
                    const app = express()       // 新建app
                    app.use('/user',userRouter) // 中间件
                    app.listen(9093,function(){
                        console.log('Node app start at port 9093')
                    })

                model.js
                    // model模型
                    const mongoose = require('mongoose')
                    // 链接mongo 并且使用reactApp这个集合
                    const DB_URL = 'mongodb://127.0.0.1:27017/reactApp'
                    mongoose.connect(DB_URL)
                    mongoose.connection.on('connected',function(){
                        console.log('mongo connect success')
                    }) 

        6-4 登录注册-用户信息校验，跳转登录

            AuthRoute组件里面打印this.props.history是undefined  
            AuthRoute是一个普通的组件。并没有操作路由的方法 使用withRouter
            AuthRoute作用是登录和注册页面不请求用户信息 而其他页面请求用户信息

            import React from 'react'
            import axios from 'axios' 
            import { withRouter } from 'react-router-dom'
            @withRouter 
            class AuthRoute extends React.Component{
                componentDidMount(){
                    const publickList = ['/login','/register']      
                    const pathname = this.props.location.pathname   // 当前url
                    if(publickList.indexOf(pathname)>-1){           //如果url在名单里面就不用获取用户信息
                        return null 
                    }
                    // 获取用户信息
                    axios.get('/user/info').then(res=>{
                        if(res.status === 200){
                            console.log(res.data) 
                            if(res.data.code === 0){
                                //有登录信息的
                                
                            }else{
                                console.log(this.props.history)
                                this.props.history.push('/login')
                            }   
                        }
                    })
                }
                render(){
                    return null
                }
            }
            export default AuthRoute

        6-5 登录注册-注册交互实现

            import React from 'react'
            import Logo from '../../component/logo/logo'
            import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'

            class Register extends React.Component{
                constructor(props){
                    super(props)
                    this.state = {
                        user:'',
                        pwd:'',
                        repeatpwd:'',
                        type: 'genius' // 或者boss
                    }
                    this.handleRegister = this.handleRegister.bind(this)
                }
                handleChange(key,val){
                    this.setState({
                        [key]:val
                    })
                }
                handleRegister(){
                    console.log(this.state)
                }
                render(){
                    const RadioItem = Radio.RadioItem;
                    return (
                        <div>
                            <Logo></Logo> 
                            <List>
                                <WhiteSpace />
                                <InputItem 
                                    onChange={(v)=>this.handleChange('user',v)}
                                >用户名</InputItem>
                                <WhiteSpace />
                                <InputItem
                                    type='password'
                                    onChange={(v)=>this.handleChange('pwd',v)}
                                >密码</InputItem>
                                <WhiteSpace />
                                <InputItem
                                    type='password'
                                    onChange={(v)=>this.handleChange('repeatpwd',v)}
                                >确认密码</InputItem>
                                <WhiteSpace />
                                <RadioItem 
                                    checked = { this.state.type === 'genius' }
                                    onChange={()=>this.handleChange('type','genius')}
                                >牛人</RadioItem>
                                <RadioItem 
                                    checked = { this.state.type === 'boss' }
                                    onChange={()=>this.handleChange('type','boss')}
                                >Boss</RadioItem>
                                <WhiteSpace />
                                <Button type="primary" 
                                    onClick={this.handleRegister}>注册</Button>
                            </List>
                        </div>
                    )
                }
            }

            export default Register
    
        6-6 登录注册-注册请求发送

            user.redux.js

            import axios from 'axios'
            const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
            const ERROR_MSG = 'ERROR_MSG'

            const initState = {
                isAuth:false,
                msg:'',
                user:'',
                pwd:'',
                type:''
            }
            // reducer
            export function user(state=initState,action){
                switch(action.type){
                    case REGISTER_SUCCESS:
                        return {...state,msg:'',isAuth:true,...action.payload}
                    case ERROR_MSG:
                        return {...state,isAuth:false,msg:action.msg}
                    default:
                        return state
                }
            }
            function registerSuccess(data){
                return { type:REGISTER_SUCCESS, payload:data }
            }
            function errorMsg(msg){
                return { msg:msg,type:ERROR_MSG }
            }
            export function regisger({user,pwd,repeatpwd,type}){
                if(!user||!pwd||!type){
                    return errorMsg('用户名密码必须输入')
                }
                if(pwd !== repeatpwd){
                    return errorMsg('密码和确认密码不同')
                }
                return dispatch =>{
                    axios.post('/user/register',{user,pwd,type})
                    .then(res=>{
                        if(res.status === 200&&res.data.code === 0){
                            dispatch(registerSuccess({user,pwd,type}))
                        }else{
                            dispatch(errorMsg(res.data.msg))
                        }
                    })
                }
            }

            reducer.js
                // 合并所有的reducer  并且返回
                import { combineReducers } from 'redux'
                import { user } from './redux/user.redux'
                export default combineReducers({user})

            register.js

                引入关于 regisger 并且调用
        
        6-7 登陆注册-数据库模型建立

            model.js 
                // model模型
                const mongoose = require('mongoose')
                // 链接mongo 并且使用reactApp这个集合
                const DB_URL = 'mongodb://localhost:27017/react-chat'
                mongoose.connect(DB_URL)
                mongoose.connection.on('connected',function(){
                    console.log('mongo connect success')
                })
                const models = {
                    user:{
                        'user':{ 'type':String, 'require':true },
                        'pwd':{ 'type':String, 'require':true },
                        'type':{ 'type':String, 'require':true },
                        'avatar':{ 'type':String },         //  头像
                        'desc':{ 'type':String },           // 个人简介
                        'title':{ 'type':String },          // 职位名字
                        // boss 的两个字段
                        'company':{ 'type':String },
                        'money':{ 'type':String }
                    },
                    chat:{

                    }
                }
                for(let m in models){
                    mongoose.model(m,new mongoose.Schema(models[m]))  
                }

                module.exports = {
                    getModel:function(name){
                        return mongoose.model(name)
                    }
                }
               
            user.js

                // 中间件
                const express = require('express') 
                const Router = express.Router()
                const model = require('./model')
                const User = model.getModel('user') // 获取user模型
                Router.get('/list',function(req,res){
                    User.find({},function(err,doc){
                        return res.json(doc)
                    })
                })
                Router.get('/info',function(req,res){
                    return res.json({code:1})
                })
                module.exports = Router

        6-8 登陆注册-express功能的实现 6-9前后端联调

            1.实现express的功能 首先接口需要请求post 所以需要安装body-parser  
            npm install body-parser --save -dev

            所需要更改的几个地方
            user.js

                // 中间件
                const express = require('express') 
                const Router = express.Router()
                const model = require('./model')
                const User = model.getModel('user') // 获取user模型
                Router.get('/list',function(req,res){
                    User.find({},function(err,doc){
                        return res.json(doc)
                    })
                })
                Router.post('/register',function(req,res){  // 需要安装body-parser插件 server.js
                    console.log(req.body)
                    const {user,pwd,type} = req.body
                    User.findOne({user},function(err,doc){
                        if(doc){
                            return res.json({code:1,msg:'用户名重复'})
                        }
                        User.create({user,pwd,type},function(e,d){
                            if(e){
                                return res.json({code:1,msg:'后端出错了'})
                            }
                            return res.json({code:0,msg:'注册用户成功'})
                        })
                    })
                })
                Router.get('/info',function(req,res){
                    return res.json({code:1})
                })

                module.exports = Router

            server.js

                const express = require('express')
                const bodyParser = require('body-parser')
                const cookParser = require('cookie-parser')
                const userRouter  = require('./user')
                const app = express()       // 新建app
                app.use(cookParser())       //使用cookieparser
                app.use(bodyParser.json())
                app.use('/user',userRouter) // 中间件
                app.listen(9093,function(){
                    console.log('Node app start at port 9093')
                })

        6-10 登录注册-注册跳转+密码加密实现

           1.注册页面如果成功后跳转到info页面 新建的utils页面 创建getRedirectPath方法

            utils.js

            export function getRedirectPath({type,avator}){
                // 根据用户信息 返回跳转地址 user.type /boss  /genius                            user.avatar /bossinfo /geniusinfo 
                let url = (type = 'boss')?'/boss':'/genius'
                if(!avator){
                    url += 'info'
                }
                return url
            }    
               
            user.redux.js  里面只需要改动三个方面
            
            import { getRedirectPath } from '../utils' // 引入这个方法 

            const initState = {         // 初始数据中加入这个initState对象
                redirectTo:'',
                isAuth:false,
                msg:'',
                user:'',
                pwd:'',
                type:''
            }

            //在type为成功的时候 redirectTo 跳转 执行方法 redux会显示跳转到哪里
            export function user(state=initState,action){
                switch(action.type){
                    case REGISTER_SUCCESS:
                        return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
                    case ERROR_MSG:
                        return {...state,isAuth:false,msg:action.msg}
                    default:
                        return state
                }
            }


            //最后一步 在register.js里面  先引入Redirect 然后 在执行跳转函数，如果redux里面有redirectTo 则跳转 
                import {Redirect} from 'react-router-dom'
                {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
           
           
            密码存储 加密  md5 非对称加密  单项的  合格的加密 雪崩效应  明文差不多 但是密文差别很大
            md5 第三方库 utility  npm  install utility
            彩虹表 有的简单的md5 彩虹表可以暴力解析出来

            在加密的时候 加盐
            // 加密加盐 调用执行这个方法
            function md5Pwd(pwd){
                const salt = 'react_is_goood_3423423890xdfsd@$#&#*!'
                return  utils.md5(utils.md5(pwd+salt))
            }

        6-11 登录注册-登录注册的实现

            第一步需要丰富 login.js 补充上必要的方法和操作
            import React from 'react'
            import Logo from '../../component/logo/logo'
            import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
            import { connect } from 'react-redux'
            import {Redirect} from 'react-router-dom'
            import {login} from '../../redux/user.redux'
            @connect(
                state=>state.user,
                {login}
            )
            class Login extends React.Component{
                constructor(props){
                    super(props)
                    this.state = {
                        user:'',
                        pwd:''
                    }
                    this.register = this.register.bind(this)
                    this.handleLogin = this.handleLogin.bind(this)
                }
                register(){
                    this.props.history.push('/register')
                }
                handleLogin(){
                    this.props.login(this.state)
                }
                handleChange(key,val){
                    this.setState({
                        [key]:val
                    })
                }
                render(){
                    return (
                        <div>
                            {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
                            <Logo></Logo> 
                            <WingBlank>
                                <List>
                                    <WhiteSpace />
                                    <InputItem
                                        onChange={(v)=>this.handleChange('user',v)}
                                    >用户名</InputItem>
                                    <WhiteSpace />
                                    <InputItem
                                        onChange={(v)=>this.handleChange('pwd',v)}
                                    >密码</InputItem>
                                </List>
                                <WhiteSpace />
                                <Button type="primary" onClick={this.handleLogin}>登录</Button>
                                <WhiteSpace />
                                <Button onClick={this.register} type="primary">注册</Button>
                            </WingBlank>  
                        </div>
                    )
                }
            }

            export default Login
            
            第二步补充user.js和user.redux.js里面的接口和内容  user.redux.js 见源文件
            
            //user.js 登录接口  {'pwd':0,'__v':0} 是查询条件。如果不想返回 那就加个0就行了
            Router.post('/login',function(req,res){
                const { user,pwd } = req.body
                User.findOne({user,pwd:md5Pwd(pwd)},{'pwd':0,'__v':0},function(err,doc){
                    if(!doc){
                        return res.json({code:1,msg:'用户名或者密码错误'})
                    }
                    return res.json({code:0,data:doc})
                })
            })

            第三部 login里面也得做好跳转 
            引入Redirect
            import {Redirect} from 'react-router-dom'
            {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}

        6-12 登录注册-cookie保存登录状态

            在登录接口使用
            res.cookie('userid',doc._id)   //这样在浏览器的response header里面就有这个了        

            //user.js

            // 详情接口 判断是否有userid 如果有的话找到id 并返回
            const _filter = {'pwd':0,'__v':0}  //代替筛选条件
            Router.get('/info',function(req,res){
                const {userid} = req.cookies
                if(!userid){
                    return res.json({code:1})
                }
                User.findOne({_id:userid},_filter,function(err,doc){
                    if(err){
                        return res.json({code:1,msg:'后端出错了'})
                    }
                    if(doc){
                        return res.json({code:0,data:doc})
                    }
                })
            })

            接口返回了数据了 但是redux 没有用户数据  user.redux.js

            const LOAD_DATA = 'LOAD_DATA'
            export function user(state=initState,action){
                switch(action.type){
                    case REGISTER_SUCCESS:
                        return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
                    case LOGIN_SUCCESS:
                        return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
                    case LOAD_DATA:
                        return {...state,...action.payload}    
                    case ERROR_MSG:
                        return {...state,isAuth:false,msg:action.msg}
                    default:
                        return state
                }
            }

            // 详情信息

            export function loadData(userinfo){
                return { type:LOAD_DATA, payload:userinfo }
            }

            authroute.js //是判断路由的方法 这里面需要个引入loadData方法的

                import { connect } from 'react-redux'
                import { loadData } from '../../redux/user.redux'
                @withRouter 
                @connect(
                    null,
                    {loadData}
                )
                class AuthRoute extends React.Component{
                    componentDidMount(){
                        const publickList = ['/login','/register']      
                        const pathname = this.props.location.pathname   // 当前url
                        if(publickList.indexOf(pathname)>-1){         //如果url在名单里面就不用获取用户信息
                            return null 
                        }
                        // 获取用户信息
                        axios.get('/user/info').then(res=>{
                            if(res.status === 200){
                                if(res.data.code === 0){
                                    //有登录信息的
                                    this.props.loadData(res.data.data)
                                }else{
                                    this.props.history.push('/login')
                                }   
                            }
                        })
                    }
                    render(){
                        return null
                    }
                }


            后端接口 注册生成id 

            // 注册后生成id 得换一种写法
            const userModel = new User({user,type,pwd:md5Pwd(pwd)})
            userModel.save(function(e,d){
                if(e){
                    return res.json({code:1,msg:'后端出错了'})
                }
                const {user,type,_id} = d
                res.cookie('userid',_id)
                return res.json({code:0,data:{user,type,_id}})
            })
```










```
    第七章 需求 
        
        7.1 完善信息-boss信息完善页面

            index.js 加入 
            import BossInfo from './container/bossinfo/bossinfo'
            <Route path='/bossInfo' component={BossInfo}></Route>
            搭建bossinfo 的页面 引入antd-mobile

            bossinfo.js

                import React from 'react'
                import { NavBar,InputItem,TextareaItem,Button } from 'antd-mobile'
                import AvatarSelector from '../../component/avatar-selector/avatar-selector'
                import { connect } from 'react-redux'
                import { Redirect } from 'react-router-dom'
                import { update } from '../../redux/user.redux'
                @connect(
                    state=>state.user,
                    {update}
                )
                class BossInfo extends React.Component{
                    constructor(props){
                        super(props)
                        this.state ={
                            title:'',
                            company:'',
                            money:'',
                            desc:''
                        }
                    }
                    onChange(key,val){
                        this.setState({
                            [key]:val
                        })
                    }
                    render(){
                        const path = this.props.location.pathname
                        const redirect = this.props.redirectTo
                        return (
                            <div>
                                {redirect&&redirect!==path?<Redirect to={this.props.redirectTo}></Redirect>:null}
                                <NavBar mode="dark">Boss完善信息页面</NavBar> 
                                <AvatarSelector 
                                    selectAvatar={(imgname)=>{
                                        this.setState({
                                            avatar:imgname
                                        })
                                    }}
                                ></AvatarSelector>
                                <InputItem onChange={(v)=>this.onChange('title',v)}>招聘职位</InputItem>
                                <InputItem onChange={(v)=>this.onChange('company',v)}>公司名称</InputItem>
                                <InputItem onChange={(v)=>this.onChange('money',v)}>职位薪资</InputItem>
                                <TextareaItem 
                                    rows={3}
                                    autoHeight
                                    title='职位要求'
                                    onChange={(v)=>this.onChange('desc',v)}></TextareaItem>
                                <Button 
                                    type="primary"
                                    onClick={()=>{
                                        this.props.update(this.state)
                                    }}
                                >保存</Button>
                            </div>
                        )
                    }
                }
                export default BossInfo

            avatar-selector.js

                import React from 'react'
                import { Grid,List } from 'antd-mobile'
                import PropTypes from 'prop-types'
                class AvatarSelector extends React.Component{
                    static propTypes = {
                        selectAvatar:PropTypes.func.isRequired
                    }
                    constructor(props){
                        super(props)
                        this.state={}
                    }
                    render(){
                        const avatarList = 'boy,girl,bear,brownBear,cat,catGirl,coolBoy,deshan,dog,feiji,hhhdeshan,smileDeshan,tongBoss,whitebear,young'
                                            .split(',')
                                            .map(v=>({
                                                icon:require(`../../img/${v}.jpg`),
                                                text:v
                                            }))
                        const gridHeader = this.state.text
                            ?(<div>
                                <span>已选择头像</span>
                                <img style={{width:20}} src={this.state.icon} alt=""/>
                            </div>)
                            :'请选择头像'                               
                        return (
                            <div>
                                <List renderHeader={()=>gridHeader}>
                                    <Grid
                                        data={avatarList}
                                        columnNum={5}
                                        onClick={elm=>{
                                            this.setState(elm)  //选择头像
                                            this.props.selectAvatar(elm.text)
                                        }}
                                    ></Grid>
                                </List>
                            </div>
                        )
                    }
                }
                export default  AvatarSelector    

        7.2 完善信息-boss信息完善页面后端
            
            bossinfo.js

                import { connect } from 'react-redux'
                import { Redirect } from 'react-router-dom'
                import { update } from '../../redux/user.redux'

                @connect(
                    state=>state.user,
                    {update}
                )

                const path = this.props.location.pathname
                const redirect = this.props.redirectTo
                return (
                    <div>
                        {redirect&&redirect!==path?<Redirect to={this.props.redirectTo}></Redirect>:null}  const path = this.props.location.pathname
                const redirect = this.props.redirectTo
                return (
                    <div>
                        {redirect&&redirect!==path?<Redirect to={this.props.redirectTo}></Redirect>:null}
                        //跳转页面的方法
                    </div>
                ）

                <Button 
                    type="primary"
                    onClick={()=>{
                        this.props.update(this.state)
                    }}
                >保存</Button>

            user.redux.js

                const AUTH_SUCCESS = 'AUTH_SUCCESS'
                function authSuccess(obj){
                    const {pwd,...data} = obj //把obj里面 pwd字段去掉了
                    return { type:AUTH_SUCCESS, payload:data }
                }
                // 更新页面
                export function update(data){
                    return dispatch=>{
                        axios.post('/user/update',data)
                        .then(res=>{
                            if(res.status === 200&&res.data.code === 0){
                                dispatch(authSuccess(res.data.data))
                            }else{
                                dispatch(errorMsg(res.data.msg))
                            }
                        })
                    }
                }

            user.js    

                // 更新个人数据接口
                Router.post('/update',function(req,res){
                    const userid = req.cookies.userid
                    if(!userid){
                        return json.dumps({code:1})
                    }
                    const body = req.body 
                    User.findByIdAndUpdate(userid,body,function(err,doc){
                        const data = Object.assign({},{
                            user:doc.user,
                            type:doc.type
                        },body)  //合并对象 node没有es6环境
                        return res.json({code:0,data})
                    })
                })


        7.3 完善信息-牛人信息完善和组件属性类型检测

            //牛人信息完善 index.js里面引入geniusinfo.js 并作为路由
                import GeniusInfo from './container/geninusinfo/geniusinfo'
                <Route path='/geniusinfo' component={GeniusInfo}></Route>

            geniusinfo.js
                复制过来bossinfo.js里面的信息在改一下就好了。

            //组件属性类型检测
                prop-type 在react16版本中抽离出来了 需要单独安装
                npm install prop-types --save 

            avatar-selector.js

                import PropTypes from 'prop-types'
                static propTypes = {
                    selectAvatar:PropTypes.func.isRequired
                }
```







```
    第八章 牛人列表的BOSS列表 
        
        8.1 牛人列表-应用骨架

            index.js // boss页面 genius me msg4个页面  相同的骨架结构  header和footer

            引入dashboard
            import Dashboard from './container/dashboard/dashboard'
            <Switch>
                <Route component={Dashboard}></Route>
            </Switch>
            得加Switch 只命中第一个


        8.2 牛人列表-导航和跳转

            首先先布局dashboard.js页面这个页面是主要的布局页面

            import React from 'react'
            import { NavBar } from 'antd-mobile'
            import {connect} from 'react-redux'
            import NavLinkBar from '../navlink/navlink'
            function Boss(){
                return <h2>boSs首页</h2>
            }
            function Genius(){
                return <h2>genius页面</h2>
            }
            function Msg(){
                return <h2>msg页面</h2>
            }
            function User(){
                return <h2>我的页面</h2>
            }
            @connect(
                state=>state
            )
            class Dasboard extends  React.Component{
                render(){
                    const {pathname} = this.props.location
                    const user = this.props.user
                    const navList = [
                        {
                            path:'/boss',
                            text:'牛人',
                            icon:'boss',
                            title:'牛人列表',
                            component:Boss,
                            hide:user.type === 'genius'
                        },
                        {
                            path:'/genius',
                            text:'boss',
                            icon:'genius',
                            title:'BOSS列表',
                            component:Genius,
                            hide:user.type === 'boss'
                        },
                        {
                            path:'/msg',
                            text:'消息',
                            icon:'msg',
                            title:'消息列表',
                            component:Msg,
                        },
                        {
                            path:'/me',
                            text:'我',
                            icon:'user',
                            title:'我的页面',
                            component:User,
                        },
                    ]
                    return (
                        <div>
                            <NavBar mode='dard'>
                                {navList.find(v=>v.path === pathname).title}
                            </NavBar>
                            <h2>footer</h2>
                            <NavLinkBar data={navList}></NavLinkBar>
                        </div>
                    
                    )
                }
            }
            export default Dasboard   

            上面的NavBar 直接循环遍历 然后输出title 
            下面的NavLinkBar直接传入nav的list数组 在navlink.js里面接收

            navlink.js

            import React from 'react'
            import PropTypes from 'prop-types'
            import { TabBar } from 'antd-mobile'
            import { withRouter } from 'react-router-dom'
            @withRouter
            class NavLinkBar extends React.Component{
                static propTypes = {
                    data:PropTypes.array.isRequired
                }
                render(){
                    const navList = this.props.data.filter(v=>!v.hide)
                    const { pathname } = this.props.location
                    return (
                        <TabBar>
                            {
                                navList.map(v=>(
                                    <TabBar.Item
                                        key={v.path}
                                        title={v.text}
                                        icon={{uri:require(`./img/${v.icon}.png`)}}
                                        selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
                                        selected ={pathname === v.path }
                                        onPress={()=>{
                                            this.props.history.push(v.path)
                                        }}
                                    >
                                    </TabBar.Item>
                                ))
                            }
                        </TabBar>
                    )
                }
            }
            export default NavLinkBar

            由于不是路由组件 所以需要引入withRouter 
            定义传入的数据类型为数组
            使用TabBar和TarBar.Item组件将里面的icon 选中icon当前选择icon 以及路由跳转显示

        8.3 牛人列表-牛人列表  8.4 牛人列表-使用redux管理牛人列表

            dashboard.js

            NavBar 加个className 吸顶到头部
            加个 
            引入 Switch 

            <div style={{marginTop:45}}>
                <Switch>
                    {navList.map(v=>(
                         <Route key={v.path} path={v.path} component={v.component}>

                        </Route>
                    ))}
                </Switch>  
            </div> 


            //单独写个boss.js 并在dashboard.js里面引入
            
            import React from 'react'
            import { Card, WhiteSpace, WingBlank }  from 'antd-mobile'
            import {connect} from 'react-redux'
            import {getUserList} from '../../redux/chatuser.redux'
            @connect(
                state=>state.chatuser,
                {getUserList}
            )
            class Boss extends React.Component{
                constructor(props){
                    super(props);
                    this.state = {
                        userlist:[]
                    }
                }
                componentDidMount(){
                    this.props.getUserList('genius')
                }
                render(){
                    const Header = Card.Header;
                    const Body = Card.Body;
                    return (
                        <div>
                            <WingBlank>
                                <WhiteSpace/>
                                {this.props.userlist.map(v=>(
                                    v.avatar?(<Card key={v._id}>
                                        <Header
                                            title={v.user}
                                            thumb={require(`../img/${v.avatar}.jpg`)}
                                            extra={<span>{v.title}</span>}
                                        ></Header>
                                        <Body>
                                        {v.desc.split('\n').map(key=>(
                                            <div key={key}>{key}</div>
                                        ))} 
                                        </Body>
                                    </Card>):null
                                ))}
                            </WingBlank>
                        </div>
                    )
                }
            }
            export default Boss


            user.js

            Router.get('/list',function(req,res){
                const {type} = req.query
                User.find({type},function(err,doc){
                    return res.json({code:0,data:doc})
                })
            })


            chatuser.redux.js

            import axios from 'axios'
            const USER_LIST = 'USER_LIST'
            const initState = {
                userlist:[]
            }

            export function chatuser(state=initState,action){
                switch(action.type){
                    case USER_LIST:
                        return {...state,userlist:action.payload}
                    default:
                        return state
                }
            }

            function userList(data){
                return { type:USER_LIST, payload:data }
            }

            export function getUserList(type){
                return dispatch=>{
                    axios.get('/user/list?type='+type)
                    .then(res=>{
                        if(res.data.code === 0){
                            dispatch(userList(res.data.data))
                        }
                    })
                }
            }
       

            redux.js

            import { combineReducers } from 'redux'
            import { user } from './redux/user.redux'
            import { chatuser } from './redux/chatuser.redux'

            export default combineReducers({user,chatuser})
```











```
    第9章 个人中心

        9-1 boss列表和组件优化

            boss列表为genius.js 因为用户为genius看到的是boss页面
            genius.js页面和boos.js基本上一样 然后单独处理一下usercard.js

            封装一个usercard.js的组件 专门用于usercard的card页面

            import React from 'react'
            import PropTypes from 'prop-types'
            import { Card, WhiteSpace, WingBlank}  from 'antd-mobile'

            class UserCard extends React.Component{
                static propTypes = {
                    userlist:PropTypes.array.isRequired
                }
                render(){
                    const Header = Card.Header;
                    const Body = Card.Body;
                    return(
                        <WingBlank>
                            <WhiteSpace/>
                            {this.props.userlist.map(v=>(
                                v.avatar?(<Card key={v._id}>
                                    <Header
                                        title={v.user}
                                        thumb={require(`../img/${v.avatar}.jpg`)}
                                        extra={<span>{v.title}</span>}
                                    ></Header>
                                    <Body>
                                    {v.type === 'boss'?<div>公司:{v.company}</div>:null}
                                    
                                    {v.desc.split('\n').map(d=>(
                                        <div key={d}>{d}</div>
                                    ))} 
                                    {v.type === 'boss'?<div>薪资:{v.money}</div>:null}
                                    </Body>
                                </Card>):null
                            ))}
                        </WingBlank>
                    )
                }
            }

            export default UserCard


        9-2 个人中心信息展示1

            dashboard.js里面重新引入user.js
            import User from '../../component/user/user'

            user.js

            import React from 'react'
            import {connect} from 'react-redux'
            @connect(
                state=>state.user
            )
            class User extends React.Component{
                render(){
                    console.log(this.props)
                    return (
                        <div>
                            user
                        </div>
                    )
                }
            }
            export default User

        9-3 个人中心信息展示2

            //布局 并且调整样式 


            import React from 'react'
            import {connect} from 'react-redux'
            import { Result,List,WhiteSpace } from 'antd-mobile'
            @connect(
                state=>state.user
            )
            class User extends React.Component{
                render(){
                    const props = this.props
                    const Item = List.Item
                    const Brief = Item.Brief
                    return props.user?(
                        <div>
                            <Result 
                                img={ <img src={require(`../img/${this.props.avatar}.jpg`)} style={{width:50}} alt="" /> }
                                title={ props.user }
                                message={props.type === 'boss'?props.company:null}
                            />
                            <List renderHeader={()=>'简介'}>
                                <Item multipleLine>
                                    {props.title}
                                    {this.props.desc.split('\n').map(v=> <Brief key={v}>{v}</Brief>)}
                                    {props.money?<Brief>薪资:{props.money}</Brief>:null}
                                </Item>
                            </List>
                            <WhiteSpace></WhiteSpace>
                            <List>
                                <Item>
                                    退出登录
                                </Item>
                            </List>
                        </div>
                    ):null
                }
            }
            export default User

        9-4 清除cookie登录状态

            browser-cookies 库 
            npm install browser-cookies --save 
            
            
            给最底部的Item加上onClick事件 // 这里需要特殊说明一下 可能底部的tabbar阻碍了click事件 需要在 .am-tab-bar{
                z-index:-1;
            }
            <Item onClick={this.logout}>
                退出登录
            </Item>


            引入browser-cookies 和 Modal
            import { Result,List,WhiteSpace,Modal} from 'antd-mobile'
            import browserCookie from 'browser-cookies'

            退出事件
            logout(){
                const alert = Modal.alert
                alert('注销', '确认退出登录吗？？？', [
                    { text: '取消', onPress: () => console.log('cancel') },
                    { text: '确认', onPress: () => {
                        browserCookie.erase('userid')
                        window.location.href = window.location.href
                    }},
                ])
            }

        9-5 注销时清空redux数据

            // window.location.href = window.location.href 这样的话就会刷新一下页面 我们做的时候尽量不要这么做 所以采用redux方式

            首先 引入方法  import {logoutSubmit} from '../../redux/user.redux'
            其次 connect中声明  
            @connect(
                state=>state.user,
                {logoutSubmit}
            )

            第三调用

            logout(){
                const alert = Modal.alert
                alert('注销', '确认退出登录吗？？？', [
                    { text: '取消', onPress: () => console.log('cancel') },
                    { text: '确认', onPress: () => {
                        browserCookie.erase('userid')
                        this.props.logoutSubmit()
                    }},
                ])
            }

            //user.redux.js 里面 

                首先声明  const LOGOUT = 'LOGOUT'
                其次判断情况
                case LOGOUT:
                return {...initState,redirectTo:'/login'}  
                第三导出方法

            // 退出信息

            export function logoutSubmit(){
                return { type:LOGOUT }
            }

            都改好后发现清空了cookie 页面也清空了 但是页面没有跳转到login 为什么？最关键的一步 类似于login中的方式

            user.js 引入
            import { Redirect } from 'react-router-dom'
            如果有用户user 则显示 没有的话 则跳转

            return props.user?():<Redirect to={this.props.redirectTo} />

            页面会有一个红的报错  是因为页面已经跳转到了login页面又因为判断页面要跳转login页面 所以报错
            {this.props.redirectTo&&this.props.redirectTo!='/login'?<Redirect to={this.props.redirectTo} />:null}

        9-6 使用高级组件完善登录流程--概念理解-函数式编程

            function hello(){
                console.log('hello React, I love you')           
            }
            hello()
            function WrapperHello(fn){
                return function(){
                    console.log('before say hello')
                    fn()
                    console.log('after say hello')
                }
            }
            hello = WrapperHello(hello)
            hello()

        9-7 简单的高阶组件demo

            login.js里面可以定义 然后 在render里面使用
            class Hello extends React.Component{
                render(){
                    return <h2>hello, i love React and redux</h2>
                }
            }

            class Hello extends React.Component{
                render(){
                    return <h2>hello, i love React and redux</h2>
                }
            }
            function WrapperHello(Comp){
                class WrapComp extends React.Component{
                    render(){
                        return(
                            <div>
                                <p>这是HOC告诫组件特有的远足</p>
                                <Comp {...this.props}></Comp>
                            </div>
                        )
                    }
                }
                return WrapComp
            }
            Hello = WrapperHello(Hello)


            也可以写成这样  WrapperHello可以引入

            function WrapperHello(Comp){
                class WrapComp extends React.Component{
                    render(){
                        return(
                            <div>
                                <p>这是HOC告诫组件特有的远足</p>
                                <Comp {...this.props}></Comp>
                            </div>
                        )
                    }
                }
                return WrapComp
            }
            class Hello extends React.Component{
                render(){
                    return <h2>hello, i love React and redux</h2>
                }
            }

            @WrapperHello

            属性代理   还有一种是反向集成

            function WrapperHello(Comp){
                class WrapComp extends Comp{
                    componentDidMount(){
                        console.log('高阶组件新增生命周期，加载完成')
                    }
                    render(){
                        return <Comp></Comp>
                    }
                }
                return  WrapComp
            }


        9-8 使用imoocFrom高阶组件优化代码

            imooc-form.js 写一个简单的高阶组件  这里面 需要注意的是定义初始的state以及绑定  里面写入handleChange方法  然后在return出去的组件里面 写入 handleChange state 以及 props

            import React from 'react'

            export default function imoocForm(Comp){
                return class WrapperComp extends React.Component{
                    constructor(props){
                        super(props)
                        this.state = {

                        }
                        this.handleChange = this.handleChange.bind(this)
                    }
                    handleChange(key,val){
                        console.log(key,val)
                        this.setState({
                            [key]:val
                        })
                    }
                    render(){
                        return <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
                    }
                }
            }


            在login.js 和 register.js里面 引入 
            import imoocForm from '../../component/imooc-form/inooc-form'
            写imoocForm方法  @imoocForm

            handleChange 以及state前面加入 props 因为都在props对象下面
```















```
    第10章 聊天详情

        10-1 socket.io简介  Socket.io基础知识

            Socket.io是什么？ 

                基于websocket协议
                前后端通过事件进行双向通信
                配合express，快速开发实际应用
            
            Socket.io和ajax区别

                基于不同的网络协议 web2.0基于ajax兴起
                ajax基于http协议，单向，实时获取数据只能轮询
                socket.io基于websocket双向通信协议，后端可以主动推送数据
                现代带浏览器支持websocket协议

            Socket.io前后端实践

                配合express
                    Io = require('socket.io')(http)
                    io.on   监听事件
                    io.emit 触发事件
                配合express
                    Import io from 'socket.io'
                    io.on   监听事件
                    io.emit 触发事件

                npm install socket.io --save
                npm install socket.io-client --save

            css增加
            index.js 里面加入chat路由
            import Chat from './component/chat/chat'
            <Route path='/chat/:user' component={Chat}></Route>

            chat.js里面新增加新的内容

            import React from 'react'
            class Chat extends React.Component{
                render(){
                    console.log(this.props)
                    return(
                        <div>
                            <h2>Chat with user:{this.props.match.params.user}</h2>
                        </div>
                    )
                }
            }
            export default Chat   

            页面里面已经有router页面 chat了 只需要加入一个跳转 跳转页面为

            usercar.js里面 加一个handleClick事件

            handleChick(v){
                this.props.history.push(`/chat/${v.user}`)
            }

                
        10-2 socket.io前后端联通

            server.js   //里面首先要引入socket.io

            const server = require('http').Server(app)
            const io = require('socket.io')(server)
            io.on('connection',function(socket){
                console.log('user login')
            })

            //将app改成server
            server.listen(9093,function(){
                console.log('Node app start at port 9093')
            })

        10-3 前后端实时显示消息

            页面加入输入框 引入ant-mobile 引入socket.io-client  全局写入接收方法 写入初始的state值
            
            chat.js

            import React from 'react'
            import io from 'socket.io-client'
            import { List, InputItem } from 'antd-mobile'
            const socket = io('ws://localhost:9093')

            class Chat extends React.Component{
                constructor(props){
                    super(props)
                    this.state = {text:'',msg:[]}
                }
                componentDidMount() {
                    socket.on('recvmsg',(data)=>{
                        this.setState({
                            msg:[...this.state.msg,data.text]
                        })
                    })
                }
                handleSubmit(){
                    socket.emit('sendmsg',{text:this.state.text})
                    this.setState({text:''})
                }
                render(){
                    return(
                        <div>
                            {this.state.msg.map(v=>{
                            return <p key={v}>{v}</p>
                            })}
                            <div className="stick-footer">
                                <List>
                                    <InputItem
                                        placeholder='请输入'
                                        value={this.state.text}
                                        onChange={v=>{
                                            this.setState({text:v})
                                        }}
                                        extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
                                    ></InputItem>
                                </List>
                            </div>
                        </div>
                    )
                }
            }
            export default Chat



            server.js //在io连接后 发送全局事件sendmsg 让全局都能接收到

            const server = require('http').Server(app)
            const io = require('socket.io')(server)
            io.on('connection',function(socket){
                socket.on('sendmsg',function(data){
                    // 发送全局事件 全局都知道
                    io.emit('recvmsg',data)
                })
            })

        10-4 聊天页面redux链接

            model.js 定义model.js

            chat:{
                'chatid':{'type':String,},
                'from':{'type':String,'require':true},
                'to':{'type':String,'require':true},
                'read':{'type':Boolean,'default':false},
                'content':{'type':String,'require':true,'default':''},
                'create_time':{'type':Number,'default':new Date().getTime()}
            }

            //用户发送数据走数据库 新建 chat.redux.js 引入axios 导出函数chat接收合并 新建getMegList 在chat.js页面等待调用

                import axios from 'axios'
                import io from 'socket.io-client'
                const socket = io('ws://localhost:9093')
                const MSG_LIST = 'MSG_LIST'  // 获取聊天列表
                const MSG_RECV = 'MSG_RECV'  // 读取信息
                const MSG_READ = 'MSG_READ'  // 标识已读
                const initState ={
                    chatMsg:[],
                    unread:0
                }
                export function chat(state=initState,action){
                    switch(action.type){
                        case MSG_LIST:
                            return {...state,chatmsg:action.payload,unread:action.payload.filter(v=>!v.read).length}
                        default:
                            return state
                    }
                }

                function msgList(msgs){
                    return {type:'MSG_LIST',payload:msgs}
                }
                export function getMegList(){
                    return dispatch =>{
                        axios.get('/user/getmsglist')
                        .then(res=>{
                            if(res.state === 200 &&res.data.code === 0){
                                dispatch(msgList(res.data.msgs))
                            }
                        })
                    }
                }       

            reducer.js 合并user

                // 合并所有的reducer  并且返回
                import { combineReducers } from 'redux'

                import { user } from './redux/user.redux'
                import { chatuser } from './redux/chatuser.redux'
                import { chat } from './redux/chat.redux'

                export default combineReducers({user,chatuser,chat})


            chat.js //引入connect 并且引入getMegList方法 在点击发送后调用

                import { connect } from 'react-redux'
                import { getMegList } from '../../redux/chat.redux'
                @connect(
                    state=>state,
                    {getMegList}
                )
                handleSubmit(){
                    this.props.getMegList()
                }


        10-5 聊天功能实现-上

            from和to都需要id 所以在usercard.js里面 改一下_id 唯一标识 用户的id 以及当前user的id 
            handleChick(v){
                this.props.history.push(`/chat/${v._id}`)
            }   


            chat.js //引入chat.redux.js里面相应的方法 在点击的时候 发送相应的信息同事清空这个发送框
            
                import { getMegList,sendMsg } from '../../redux/chat.redux'
                @connect(
                    state=>state,
                    {getMegList,sendMsg}
                )

                handleSubmit(){
                    const from = this.props.user._id;
                    const to = this.props.match.params.user
                    const msg = this.state.text
                    this.props.sendMsg({from,to,msg})
                    this.setState({text:''})
                }

            chat.redux.js //引入socket.io-client 监听9093 导出sendMsg

                import io from 'socket.io-client'
                const socket = io('ws://localhost:9093')

                export function sendMsg({from,to,msg}){
                    return dispatch =>{
                        socket.emit('sendmsg',{from,to,msg}) //传到后端
                    }
                }

            // 下一步需要做的送到数据库里面
            server.js    
            
            io.on('connection',function(socket){
                socket.on('sendmsg',function(data){
                    // 发送全局事件 全局都知道 
                    const {from,to,msg} = data //定义三个变量
                    const chatid = [from,to].sort().join('_')
                    Chat.create({chatid,from,to,content:msg},function(err,doc){
                        io.emit('recvmsg',Object.assign({},doc._doc))
                    })
                })
            })    

            chat.redux.js   //增加 msgRecv 和recvMsg 在 chat里面加入MSG_RECV情况

            const MSG_RECV = 'MSG_RECV'  // 读取信息
            export function chat(state=initState,action){
                switch(action.type){
                    case MSG_LIST:
                        return {...state,chatmsg:action.payload,unread:action.payload.filter(v=>!v.read).length}
                    case MSG_RECV:
                        return {...state,chatmsg:[...state.chatmsg,action.payload]}
                    // case MSG_READ:
                    default:
                        return state
                }
            }
            function msgRecv(msg){
                return {type:MSG_RECV,payload:msg} 
            }
            export function recvMsg(){
                return dispatch =>{
                    socket.on('recvmsg',function(data){
                        console.log('recvmsg',data)
                        dispatch(msgRecv(data))
                    })
                }
            }

            在chat.js 里面调用
            import { getMegList,sendMsg,recvMsg } from '../../redux/chat.redux'
            @connect(
                state=>state,
                {getMegList,sendMsg,recvMsg}
            )
            componentDidMount() {
                this.props.getMegList()
                this.props.recvMsg()
            }


        10-6 聊天功能实现-下

            //getmsglist 初始化的时候最好就有了

        



        10-7 聊天未读消息数实时展示

            发送后unread数量不会变化 所以需要unread+1

            chat.redux.js

            export function chat(state=initState,action){
                switch(action.type){
                    case MSG_LIST:
                        return {...state,chatmsg:action.payload,unread:action.payload.filter(v=>!v.read).length}
                    case MSG_RECV:
                        return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+1}
                    default:
                        return state
                }
            }

            chat.js // 引入List和Item 组件 重新渲染一下列表

                const user = this.props.match.params.user
                const Item = List.Item
                import { List, InputItem,NavBar } from 'antd-mobile'
                
                {this.props.chat.chatmsg.map(v=>{
                    return v.from===user?(
                        <List key={v._id}>
                            <Item  
                            >{v.content}</Item>
                        </List>
                    ):(
                        <List key={v._id}>
                            <Item 
                                extra={'avatar'}    
                                className='chat-me'
                            >{v.content}</Item>
                        </List>
                    )
                })}

        10-8 聊天头像显示

            dashboard.js  // 先显示未读消息 放在dashboard

                import { getMegList,recvMsg } from '../../redux/chat.redux'
                @connect(
                    state=>state,
                    { getMegList,recvMsg }
                )
                componentDidMount(){
                    this.props.getMegList()
                    this.props.recvMsg()
                }

            navlink.js // 里面引入connect TabBar.Item里面加入badge
            
            import { connect } from 'react-redux'
            @withRouter
                @connect(
                    state=>state.chat
            )
            
            <TabBar.Item   
                badge={v.path==='/msg'?this.props.unread:0}
            ></TabBar.Item>

            
            user.js // 将所有的user找出 然后添加到users对象里面 然后查询聊天信息进行过滤        {'$or':[{from:user},{to:user}]}  $or是查询多个条件  返回users

            // 获取用户聊天信息
            Router.get('/getmsglist',function(req,res){
                const user = req.cookies.userid
                User.find({},function(e,userdoc){
                    let users = {}
                    userdoc.forEach(v=>{
                        users[v._id] = {name:v.user,avatar:v.avatar}
                    })
                    Chat.find({'$or':[{from:user},{to:user}]},function(err,doc){
                        if(!err){
                            return res.json({code:0,msgs:doc,users:users})
                        } 
                    })
                })
            })

            chat.redux.js 

                //1.增加users字段 2.第二个在getMegList方法里面返回增加res.data.users 3.msgList里面增加这个users 4.MSG_LIST return里面返回

                const initState ={
                    chatmsg:[],
                    users:{},
                    unread:0
                }

                if(res.status === 200 && res.data.code === 0){
                    dispatch(msgList(res.data.msgs,res.data.users))
                }

                function msgList(msgs,users){
                    return {type:MSG_LIST,payload:{msgs,users}}
                }

                case MSG_LIST:
                    return {...state,users:action.payload.users,chatmsg:action.payload.msgs,unread:action.payload.msgs.filter(v=>!v.read).length}

            chat.js 
            
            // 1.里面判断componentDidMount如果有chatmsg 则返回 2.新增定义users 3.完善NavBar users[userid].name 4.定义avatar   
            const avatar = require(`../img/${users[v.from]

                componentDidMount() {
                    if(!this.props.chat.chatmsg.length){
                        this.props.getMegList()
                        this.props.recvMsg()
                    }
                }
                render(){
                    const userid = this.props.match.params.user
                    const Item = List.Item
                    const users = this.props.chat.users
                    if(!users[userid]){
                        return null 
                    }
                    return(
                        <div id="chat-page">
                            <NavBar 
                                mode="dark"
                                icon={<Icon type="left" />}
                                onLeftClick={() => {this.props.history.goBack()}}
                            >{users[userid].name}</NavBar>
                            {this.props.chat.chatmsg.map(v=>{
                                const avatar = require(`../img/${users[v.from].avatar}.jpg`)
                                return v.from===userid?(
                                    <List key={v._id}>
                                        <Item 
                                            thumb={avatar}
                                        >{v.content}</Item>
                                    </List>
                                ):(
                                    <List key={v._id}>
                                        <Item 
                                            extra={<img src={avatar} alt='' /> }    
                                            className='chat-me'
                                        >{v.content}</Item>
                                    </List>
                                )
                            })}
                        </div>   
                    )
                }        

        10-9 修正未读消息数量

            //点不同的列表人头 显示的信息一致。应该做进一步的处理 数据筛选
            chat 里面有这个 chatid

            utils.js //里面写一个方法 将两个id排序后拼接

            export function getChatId(userId,targetId){
                return [userId,targetId].sort().join('_')
            }

            chat.js //数据过滤 当前的chatid 引入方法getChatId

                const chatid = getChatId(userid,this.props.user._id)
                const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid===chatid)

            //dashboard.js 里面  每次切换都会绑定那个 所以需要加判断  如果有chatmsg的长度的话

                componentDidMount(){
                    if(!this.props.chat.chatmsg.length){ //增加条件 否则会发送重复信息
                        this.props.getMegList()
                        this.props.recvMsg()
                    }
                }


            //未读消息不同 都加上了 chat.redux.js getState 获取用户所有的状态

            export function chat(state=initState,action){
                switch(action.type){
                    case MSG_LIST:
                        return {...state,users:action.payload.users,chatmsg:action.payload.msgs,unread:action.payload.msgs.filter(v=>!v.read&&v.to===action.payload.userid).length}
                    case MSG_RECV:
                        const n = action.payload.to === action.userid?1:0
                        return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+n}
                    // case MSG_READ:
                    default:
                        return state
                }
            }

            function msgList(msgs,users,userid){
                return {type:MSG_LIST,payload:{msgs,users,userid}}
            }
            function msgRecv(msg,userid){
                return {userid,type:MSG_RECV,payload:msg} 
            }

            export function recvMsg(){
                return (dispatch,getState) =>{
                    socket.on('recvmsg',function(data){
                        console.log('recvmsg',data)
                        const userid = getState().user._id
                        dispatch(msgRecv(data,userid))
                    })
                }
            }

            export function getMegList(){
                return (dispatch,getState) =>{
                    axios.get('/user/getmsglist')
                    .then(res=>{
                        if(res.status === 200 && res.data.code === 0){
                            const userid = getState().user._id
                            dispatch(msgList(res.data.msgs,res.data.users,userid))
                        }
                    })
                }
            }

        10-10 发送emoji表情

            chat.js //1.里面列举emoji表情并且遍历过滤 输出每个表情  2.ant-mobile里面有<Grid>组件应用到输入框后面 3.输入框加入一个表情符号的按钮 点击显示这个表情区域

            const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
                .split(' ')
                .filter(v=>v)
                .map(v=>({text:v}))

            {this.state.showEmoji?
                    <Grid 
                    data = {emoji}
                    columnNum={9}
                    carouselMaxRow={4}
                    isCarousel={true}
                    onClick={el=>{
                        this.setState({
                            text:this.state.text+el.text
                        })
                    }}
            />:null}


            <InputItem
                placeholder='请输入'
                value={this.state.text}
                onChange={v=>{
                    this.setState({text:v})
                }}
                extra={
                    <div>
                        <span 
                            style={{marginRight:10}}
                            onClick={()=>{
                                this.setState({
                                    showEmoji:!this.state.showEmoji
                                })
                                this.fixCarousel()
                            }}
                        >😀</span>
                        <span onClick={()=>this.handleSubmit()}>发送</span>
                    </div> 
                }
            ></InputItem>


            //因为ant-mobile有bug 所以我点击表情后需要手动的调用一下fixCarousel方法

            fixCarousel(){ //修正跑马灯
                setTimeout(function(){
                    window.dispatchEvent(new Event('resize'))
                },0)
            }

            //点击每个表情也有自己的输入调用方法
            onClick={el=>{
                this.setState({
                    text:this.state.text+el.text
                })
            }}
```













```
    第11章 聊天列表

        11-1 聊天信息根据用户分组

            dashboard.js
            
                import Msg from '../../component/msg/msg'

            msg.js
            
                import React from 'react'
                import { connect } from 'react-redux'
                @connect(
                    state=>state
                )
                class Msg extends React.Component{
                
                    render(){
                        const msgGroup = {}
                        this.props.chat.chatmsg.forEach(ele => {
                            msgGroup[ele.chatid] = msgGroup[ele.chatid] || []
                            msgGroup[ele.chatid].push(ele)
                        });
                        console.log(msgGroup)
                        return(
                            <div>
                                <h2>消息列表</h2>
                            </div>
                        )
                    }
                }
                export default Msg


        11-2 聊天列表展示

            //msg.js 里面取到所有的chatList数组 取第一个from 判断是否等于当前id 如果等于就展示
            const chatList = Object.values(msgGroup) // es6直接取key值
            return(
                <div>
                    {chatList.map(v=>{
                        const lastItem = this.getLast(v)
                        const targetId = v[0].from ===userid?v[0].to:v[0].from
                        const name = userInfo[targetId]?userInfo[targetId].name:''
                        const avatar = userInfo[targetId]?userInfo[targetId].avatar:''
                        return(
                            <List key={lastItem._id}>
                                <Item
                                    thumb={require(`../img/${avatar}.jpg`)}
                                >
                                    {lastItem.content}
                                    <Brief>{name}</Brief>
                                </Item>
                            </List>
                        )
                    })}
                </div>
            )

        11-3 显示未读消息数

            msg.js //首先定义未读数目 筛选v 下面的每个对象 to指向userid

            const unreadNum = v.filter(v=>!v.read&&v.to===userid).length
            <Item
                extra={<Badge text={unreadNum}></Badge>}
                thumb={require(`../img/${avatar}.jpg`)}
            >
        

        11-4 最新消息排序

            //msg.js 按照关于时间戳去排序 时间戳为create_time   涉及到数组的排序方法

                正序：
                values.sort(function(value1,value2){return value1 - value2;);

                倒序:
                values.sort(function(value1,value2){return value2 - value1; });

                const chatList = Object.values(msgGroup).sort((a,b)=>{
                    const a_last = this.getLast(a).create_time
                    const b_last = this.getLast(b).create_time
                    return b_last - a_last
                }) // es6直接取key值 并且倒序排序 确保最新的时间消息在最上面

            //点击跳转页面 跳转右面放个箭头

                Item 加上      
                arrow='horizontal' 
                onClick={()=>{
                    this.props.history.push(`/chat/${targetId}`)
                }}

            接下来要实现
            1.eslint 代码校验工具
            2.react16特有的错误处理机制
            3.react性能和优化  
            4.同步消息数量 进去读了之后 消息数量不显示了

```

```
   第12章 构建自己的 redux

        12-1 消息未读数量更新1_0

            未读消息的更正 项目优化 react实例特性
            进入页面 发送请求 发给后端
            

            //chat.js 引入readMsg方法

            import { getMegList,sendMsg,recvMsg,readMsg } from '../../redux/chat.redux'
            @connect(
                state=>state,
                {getMegList,sendMsg,recvMsg,readMsg}
            )

            //使用readMsg方法

            componentWillMount() {
                //当前的聊天目标id 
                const to = this.props.match.params.user
                this.props.readMsg(to)
            }
 
            //chat.redux.js

            const MSG_READ = 'MSG_READ'  // 标识已读

            export function chat(state=initState,action){
                switch(action.type){
                    case MSG_LIST:
                        return {...state,users:action.payload.users,chatmsg:action.payload.msgs,unread:action.payload.msgs.filter(v=>!v.read&&v.to===action.payload.userid).length}
                    case MSG_RECV:
                        const n = action.payload.to === action.userid?1:0
                        return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+n}
                    case MSG_READ:
                        const {from,num} = action.payload
                        return {...state,chatmsg:state.chatmsg.map(v=>({...v,read:from===v.from?true:v.read})),
                            unread:state.unread-num
                        }
                    default:
                        return state
                }
            }


            function msgRead({from,userid,num}){
                return {type:MSG_READ,payload:{from,userid,num}}
            }

            export function readMsg(from){
                return (dispatch,getState)=>{
                    axios.post('/user/readmsg',{from})
                    .then(res=>{
                        const userid = getState().user._id
                        if(res.status === 200 && res.data.code === 0){
                            dispatch(msgRead({userid,from,num:res.data.num}))
                        }
                    })
                }
            }

            user.js

            // 读取信息
            Router.post('/readmsg',function(req,res){
                const userid = req.cookies.userid
                const {from} = req.body
                Chat.update(
                    {from,to:userid},
                    {'$set':{read:true}},
                    {'multi':true},
                    function(err,doc){
                    console.log(doc)
                    if(!err){
                        return res.json({code:0,num:doc.nModified})
                    }
                    return res.json({code:1,msg:'修改失败'})
                })
            })


        12-2 消息维度数量更新2_0

            更新的这里面 需要判断from 
            const {from,num} = action.payload
            return {...state,chatmsg:state.chatmsg.map(v=>({...v,read:from===v.from?true:v.read})),
                unread:state.unread-num
            }

        12-3 React进阶_0

            $('#test').find('img)
            $('#test img')
            性能的话 第一个性能要好于第二个  jQuery是从右到左查找

            react进阶
                react原理
                    react核心原理介绍

                        虚拟dom  
                            平级对比 如果有不一样的增删改查 跨层级的是操作不出来的
                            类型 配置 children

                        生命周期
                            初始渲染 initial render =>constructor
                            父组件render=> componentWillReceiverProps()=>shouldComponentUpdate()=>componentWillUpdate()

                        setState

                            不能直接修改 this.state.num == xxx 不能这样做
                            setState 队列的概念 队列高效更新 this.setState({num:123})

                redux原理
                react+redux常见性能优化策略


        12-4 迷你redux实现_0

            redux的原理
            单独写个js文件 不引入redux 引入这个文件 

            export function createStore(reducer){
                let currentState = {}
                let currentListteners = []
                function getState(){
                    return currentState
                }
                function subscribe(listener){
                    currentListeners.push(listener)
                }
                function dispatch(action){
                    currentState = reducer(currentState,action)
                    currentListeners.forEach(v=>v())
                    return action
                }
                //初始调用一下
                dispatch({type:'@WONIU/REDUX})
                return {getState,subscribe,dispatch }
            }

            //下面就可以调用
            function counter(state = 0,action){
                switch(action.type){
                    case:'加机关枪'：
                        return state + 1
                    case:'减机关枪'：
                        return state - 1
                    default: 
                        return 10
                }
            }
            const store = createStore(counter)

        12-5 context简介1

            context.demo.js 

                import React from 'react'
                class Sidebar extends React.Component{
                    render(){
                        return(
                            <div>
                                <p>侧边栏</p> 
                                <Navbar user={this.props.user}></Navbar> 
                            </div>
                        )
                    }
                }
                class Navbar extends React.Component{
                    render(){
                        return(
                            <div>
                                <p>{this.props.user}的导航栏</p>  
                            </div>
                        )
                    }
                }
            
                
                class Page extends React.Component{
                    render(){
                        const user = '蜗牛'
                        return(
                            <div>
                                <p>我是{user}</p>
                                <Sidebar user={user}></Sidebar>
                            </div> 
                        )
                    }
                }

                export default Page

                然后index.js中引入

                传递 Page Sidebar Navbar 传递user参数
                context是全局的 组件是声明 所有子元素可以直接获取
                在最外层的page 里面定义一个
                construtor(props){
                    super(props)
                    this.state={user:'蜗牛'}
                }
                getChileContext(){
                    return this.state
                }

                Navbar 里面 显示{this.context.user}
                //npm install prop-types --save  之前的react 自己自带  后来就需要单独安装

                import PropTypes from 'prop-types'
                class Sidebar extends React.Component{
                    render(){
                        return(
                            <div>
                                <p>侧边栏</p> 
                                <Navbar></Navbar> 
                            </div>
                        )
                    }
                }
                class Navbar extends React.Component{
                    static contextTypes = {
                        user:PropTypes.string
                    }
                    render(){
                        return(
                            <div>{this.context.user}的导航栏</div>
                        )
                    }
                }
                //page里面也需要声明
                class Page extends React.Component{
                    static childContextTypes = {
                        user:Porps.string
                    }
                    constructor(props){
                        supper(props)
                        this.state = {user:'蜗牛'}
                    }
                    getChildContext(){
                        return this.state
                    }
                    render(){
                        return(
                            <div>
                                <p>我是{this.state.user}</p>
                                <Sidebar></Sidebar> 
                            </div>
                        )
                    }
                }
            
        12-6 react-redux实现1
            connect 负责链接组件 给到redux里的数据放到组件的属性里面

            import React from 'react'
            import PropTypes from 'prop-types'
            
            export const connect = (mapStateToProps=state=>state,mapDispatchToProps={})=>{
               
            }
            //Provider 把store放到context里，所有的子元素可以直接取到store

            export class Provider extends React.Component{
                static childContextTypes = {
                    store:ProTypes.object
                }
                getChildContext(){
                    return {store:this.store}
                }
                constructor(props,conetext){
                    super(props,context)
                    this.store = props.store
                }
                render(){
                    return this.props.children
                }
            }

            //1.负责接受一个组件 把state里的一些数据放进去 返回一个组件
            //2.数据变化的时候 能够通知组件

        12-7 react-redux实现2  12-8 迷你react-redux实现
            
            state=>state
            相当于 
            function (state){
                return state
            }



            两种写法 写connect 高阶组件
            1.function
            export function connect(mapStateToProps,mapDispatchToProps){
                return function(WrapComponent){
                    return class ConnectComponent extends Reeact.Component{

                    }
                }
            }
            2.两个箭头函数
            export const connect = (mapStateToProps=state=>state,mapDispatchToProps={}) => (WrapComponent) =>{
                return class ConnectComponent extends React.Component{
                    
                }
            }


            import {bundAcionCreators} from './woniu-redux'  //需要单独实现

            export const connect = (mapStateToProps=state=>state,mapDispatchToProps={}) => (WrapComponent) =>{
                return class ConnectComponent extends React.Component{
                   static contextTypes = {
                       store:PropTypes.object
                   }
                   constructor(props,context){
                       super(props,context)
                       this.state = {
                           props:{}
                       }
                   }
                   componentDidMount(){
                       const {store} = this.context
                       store.subscribe(()=>this.update())
                       this.update()
                   }
                   update(){
                       //获取 mapStateToProps 和mapDispatchToProps 放入 this.props里面
                       const {store} = this.context
                       const statePorps = mapStateToProps(store.getState())
                       //方法不能直接给，因为需要dispatch 直接执行addGun 毫无意义 需要 store.dispatch(addGun()) 其实就是用dispatch把action包了一层

                       //const dispatchPorps = bundAcionCreators(mapDispatchToProps,store.dispatch)
                       this.setState({
                            props:{
                                ...this.state.props
                                ...statePorps,
                                ...dispatchProps,
                                //底下会把上面的覆盖掉
                            }
                       })
                   }
                   render(){
                       return <WrapComponent {...this.state.props}></WrapComponent>
                   }
                }
            }


            woniu-redux.js

            function bundAcionCreators(creator,dispatch){
                retrun (...args) => dispatch(creator(...args))
            }
            export function bundAcionCreators(creators,dispatch){
                let bound = {}
                Object.keys(creators).forEach(v=>{
                    let creator = creators[v]
                    bound[v] = bindActionCreator(creators,dispatch)
                })
                return bound
            }


        12-9 中间件机制的实现

            中间件 包
            applyMiddleware

        12-10 多个中间件合并
        12-11 定制中间件arrThunk
        12-12 总结redux+react-redux代码

```

```
    第13章 代码优化和进阶

        13-1 单组件

            react组件性能优化  传递参数尽量少传 组件间的性能优化
            redux性能优化     纯函数 
            react同构  服务端渲染 首屏服务端渲染 

            组件优化
                属性传递优化
                多组件优化
                key

            重新建立demo 

            import React from 'react'
            class App extends React.Component{
                constructor(props){
                    super(props)
                    this.state={
                        num:1,
                        title:'haha'
                    }
                    this.handleClick = this.handleClick.bind(this) 
                }
                handleClick(){
                    this.setState({
                        num:this.state.num + 1
                    })
                }
                render(){
                    console.log('render执行中')
                    return(
                        <div>
                            <h2>app {this.state.num}</h2>、
                            <button onClick={this.handleClick}></button>
                            //这两种写法的性能不是很好  效果一样   每次渲染button bind都会执行一次 
                            <button onClick={this.handleClick.bind(this)}></button>
                            <button onClick={()=>this.handleClick()}></button>
                           
                            //每一次都会生成新的对象传递
                            <Demo style={color:'red'}></Demo>    
                            <Demo title={this.state.title}></Demo>
                        </div>
                    )
                }
            }

            class Demo extends React.Component{
                render(){
                    return <h2>I amn Demo{this.props.title}</h2>
                }
            }

            export default App


            // 1==1  true
            // {a:1} == {a:1} false 因为是对象  在内存里面生成了不同的地址 
            // 如果在constructor里面 绑定了 只会执行一次
                this.handleClick = this.handleClick.bind(this) 
            

        13-2 定制shouldComponentUpdae

            多组件 减少渲染次数 查看性能  性能检测工具  
            class Demo extends React.Component{
                shouldComponentUpdae(nextProps,nextState){
                    if(nextProps.title == this.props.title){
                        retrun false
                    }
                    return true
                }
                render(){
                    console.log('demo render执行中')
                    return <h2>I amn Demo{this.props.title}</h2>
                }
            }


            componentWillReceiveProps()
            shouldComponentUpdata()  => this.setState()
            componentWillUpdate()
            componentDidUpdate()

        13-3 immutablejs存在的意义和使用

            递归对比，复杂度太高，不可接受  react建议 只做浅层比较
            immutable.js  Facebook 2014年推出来的库 js里面引出一个不可变的库 并发安全 
            
            npm install immutable 
            import { Map,is } from 'immutable'
            let obj = Map({
                'name':'immoc',
                'course':Map({name:'react+redux'})
            })

            let obj1 = obj.set('name','woniu')
            console.log(obj==obj1)  // false
            console.log(obj.get('course')==obj1.get('course')) // true

            let obj = Map({name:1,title:'imooc'})
            let obj1 = Map({name:1,title:'imooc'})
            console.log(is(obj,obj1)) // true

            this.state= Map({
                name:'',
                title:''
            })

            handleTitle(){
                this.setState(this.state.set('num',this.state.get('num')+1))
            }

            immutable优点  
            1.减少内存使用 
            2.并发安全 
            3.降低项目复杂度 
            4便于比较数据定制 shouldComponentUpdate方便
            5.时间旅行功能方便
            6.函数式编程
            缺点
            1.学习成本
            2.库的大小
            3.对现有项目入侵太严重
            新项目使用 老项目评估在用

        13-4 reselect优化redux选择器
            
            reselect redux 性能优化

            import { creteSelector } from 'reselect'

            const numSelector = creteSelector(
                state=>state,
                state=>{{num:state*2}} //第二个参数是第一个参数的返回值
            )

            @connect(
                state=>numSelector(state),
                {addGun,removeGun,addGunAsync,addTwice}
            )

            
        13-5 遍历数组的key

            react 渲染列表
            渲染数组的时候 每个元素都需要有个key元素

            render(){
                const users = ['hello','world','!!!']
                return(
                    <div>
                        <ul>
                            {uers.map(v=><li key={v}>{v}</li>)}
                        </ul>
                    </div>
                )
            }
            
            react 最小的操作dom 找到数据差距后 操作dom改过来
            key属性 确定唯一  增删改查

        13-6 服务端渲染ssr介绍

            服务端渲染SSR 

                传统服务端渲染 JSP Smaty(php) jinja2   首屏很快 但是会刷新页面
                浏览器渲染  js获取数据 前端拼接html 交互体验好  不需要刷新页面  首屏速度会慢
                前后同构，首屏服务端渲染    现在比较火 服务端会渲染  两个加在一起  前后端共享

            传统的服务端渲染 

                服务端语言模板+数据
                前后端一体
                浏后端模板 +数据 => html给浏览器
                首屏快 每次获取数据都会刷新页面

            浏览器端渲染 

                后端只提供静态资源和接口
                前端写模板，渲染 MVVM大行其道
                单页应用 页面跳转也不刷新 体验好 首屏慢 SEO
            
            react同构

                node在服务端解析首屏模板
                React支持SSR
            
            react同构Api

                后RenderToString和RenderToStaticMarkup 
                React16新出的RenderToNodeStream 性能更好
                React16里面，客户端hydrate取缔render   不做渲染功能

            ssr实战build代码之后的事情
                后node使用babel-node 配置node里的react环境
                修改客户端代码 抽离App组件 前后端共享
                服务端生成DOM结构 渲染 加载build后的css和js

```









```
    第14章 项目总结，回顾和展望
        14-1 eslint代码规范
            
            === 和 == 
            package.json 
            "eslintConfig": {
                "extends": "react-app"
            }

            找到eslint官网 eqeqeq  可以修改 修改后重启

            "eslintConfig": {
                "extends": "react-app",
                "rules":{
                    "eqeqeq":["off"],
                    "jsx-a11y/accessible=emoji":["off"],
                    "semi":["warn","never"]  
                }
            }


            "semi":["warn","never"]    // 任何情况下都不允许有分号  如果有分号会报出来

            airbnb代码规范


        14-2˜async+await优化异步代码
            
            异步发展阶段
            1.回调函数 callback  callback hell 回调地狱
                
                setTimeout(()=>{
                    console.log(1)
                },1000) 
               
            2.Promise  axios默认形式

                axios.post().then(res=>{
                    return xx
                }).then(res=>{
                    retrun xxx
                })

            3.async+await配合使用 await必须在async内部 es7的内容 

            export function readMsg(from){
                return async (dispatch,getState)=>{
                    const res = await axios.post('/user/readmsg',{from})
                    const userid = getState().user._id
                    if(res.status==200 && res.data.code ==0) {
                        dispatch(msgRead(userid,from,num:res.data.num))
                    }
                }
            }

        14-3 使用Ant motion做React动画解决方案

            css动画 vs javascript动画
                css 性能好一些 实现的动画简单一些 开启硬件加速
                js 动画类型更多
            官方提供的动画解决办法   ReactCSSTransitionGroup
            蚂蚁金服提供的方案解决方案 Motion Design  地址：motion.ant.design

            单元素动画   svg路径线性动画
            进出场动画
            页面滚动动画
            banner动画
            动效模板

            npm install rc-queue-anim --save
            chat.js里面 动画包起来 列表一定要有key 要不然动画没有效果
            import QueueAnim from 'rc-queue-anim'
            <QueueAnim delay={100} type='left'></QueueAnim>  组件包起来 
            
           

           页面切换效果 dashboard.js
           先引入rc-queue-anim  让动画生效 只渲染一个Route 根据当前的path决定组件
           import QueueAnim from 'rc-queue-anim'
           const page = navList.find(v=>v.path=pathname)
            <QueueAnim duration={100} type='scaleX'>
                <Route key={page.path} path={page.path} component={page.component}></Route>
            </QueueAnim> 


        14-4 打包编译

            npm run build
            
                编译打包后，生成build目录
                express中间件 拦截路由 手动渲染index.html
                build设置为静态资源地址 
            
            build之后打开不行的 index.html 不能直接打开  需要在node服务器下面
                
                servver.js里面 
                设置静态资源的地址  然后设置中间件

                const path = require('path')
              
                app.use(function(req,res,next){
                    if(req.url.startsWith('/user/')||req.url.startsWith('/static/')){
                        return next()
                    }
                    console.log('path resolve',path.resolve('build/index.html'))
                    return res.sendFile(path.resolve('build/index.html'))
                })
                app.use('/',express.static(path.resolve('build')))

                1.购买域名
                2.DNS解析到你的服务器IP
                3.安装nginx
                4.会用pm2管理node进程 后台执行重启都使用pm2完成

        14-5 使用babel-node在后端支持jsx环境

            React服务端渲染SSR实战
                node环境使用babel-node支持jsx
                    npm install babel-cli --save
                    并且修改package.json里面的server命令,修改为
                    "server": "NODE_ENV=test nodemon --exec babel-node -- server/server.js",
                    然后在server.js里面就可以使用import 
                    重启 npm run server  



                server.js 里面可以写react 引入react 然后写入   
                    import express  from 'express'
                    import bodyParser  from 'body-parser' //post 交互需要
                    import cookParser  from 'cookie-parser'
                    import userRouter  from './user'
                    import model       from './model'
                    import path        from 'path'
                    import React       from 'react'

                    const Chat = model.getModel('chat')
                    const app = express()       
                    // work with express
                    const server = require('http').Server(app)
                    const io = require('socket.io')(server)

                    function App(){
                        return <h2>server render</h2>
                    } 

                单独在根目录下面建立配置文件.babelrc

                    {
                        "presets": [
                        "react-app"
                        ],
                        "plugins": [
                        [
                            "import",
                            {
                            "libraryName": "antd-mobile",
                            "style": "css"
                            }
                        ],
                        "transform-decorators-legacy"
                        ]
                    }

        14-6 服务端渲染renderToString用法

            ReactDOMServer
            // ES modules
            import ReactDOMServer from 'react-dom/server';
            // CommonJS
            var ReactDOMServer = require('react-dom/server');

            代码 server.js  
            import {renderToString} from 'react-dom/server'
            function App(){
                return (
                    <div>
                        <p>server render</p>
                        <p>imooc rocks</p>
                        <h2>server render</h2>
                    </div>
                )
            }
            console.log(renderToString(<App></App>))

        14-7 客户端代码改造
            能复用的东西抽离出来 抽离app.js
            
            import React from 'react'
            import { Route, Switch } from 'react-router-dom'
            import Login from './container/login/login'
            import Register from './container/register/register'
            import BossInfo from './container/bossinfo/bossinfo'
            import GeniusInfo from './container/geninusinfo/geniusinfo'
            import Dashboard from './container/dashboard/dashboard'
            import Chat from './component/chat/chat'

            class App extends React.Component{
                render(){
                    return(
                        <div>
                            <AuthRoute></AuthRoute>
                            <Switch>
                                <Route path='/geniusinfo' component={GeniusInfo}></Route>
                                <Route path='/bossInfo' component={BossInfo}></Route>
                                <Route path='/login' component={Login}></Route>
                                <Route path='/register' component={Register}></Route>
                                <Route path='/chat/:user' component={Chat}></Route>
                                <Route component={Dashboard}></Route>
                            </Switch>
                        </div>
                    )
                }
            }
            export default App

            然后在index.js里面引入 app.js

            server.js provide组件在server里面使用
            import { Provider } from 'react-redux' 
            import { StaticRouter } from 'react-router-dom'
            import reducers from '../src/reducer' // 全部的reducer
            import App from 'app.js'


            const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():()=>{}
            const store = createStore(reducers,compose(
                applyMiddleware(thunk),
                reduxDevtools
            )))
            let context = {}
            const markup = renderToString(
                (
                    <Provider store={store} >
                        <StaticRouter location={req.url} context={context}>
                            <App></App>
                        </StaticRouter>
                    </Provider>
                )
            )

            node没有css  所以 css 和 图片 都需要钩子处理
            npm install css-modules-require-hook --save

            // cmrh.conf.js
            module.exports = {
                generateScopedName: '[name]__[local]___[hash:base64:5]',
            };
            
            //server.js里面引入  特别注意！！！ 因为csshook是做钩子 所以要放在所有的import 引用的前面
            import csshook from 'css-module-require-hook'


            npm install asset-require-hook --save  //图片、字体的引入

            import assetshook from 'asset-require-hook'
            assethiik({
               exrensions:['png] 
            })
            
            同时 引入图片的 直接改成require的形式

            <img style={{width:'200px',height:'230px',display:'block',margin: '15px auto'}} src={require('./logo.jpeg')} alt="" />

            服务端渲染好处
                1.手动加载HTML node.js生成
                2.做seo 设置title等字段
                

        14-8 服务端SSR代码改造

            打印一下server.js里面 markup 只有div 没有网页的结构
            骨架是pubic里面的index.html
            定义这个变量 把生成的节点放到这个骨架里面

            import staticPath from '../build/asset-manifest'
            const pageHtml = 
            `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                    <meta name="theme-color" content="#000000">
                    <meta name="keywords" content="React,Redux,聊天,SSR">
                    <meta name="describe" content="React开发,Redux数据管理">
                    <meta name="author" content="Richard">
                    <title>React App</title>
                    <link rel="stylesheet" href="/${staticPath['main.css']}">
                </head>
                <body>
                    <noscript>
                        You need to enable JavaScript to run this app.
                    </noscript>
                    <div id="root">${markup}</div>
                    <script src="/${staticPath['main.js']}"></script>
                </body>
                </html>
            ` 
            res.send(pageHtml)

        14-9 小问题修复
            dashboard.js
                 {navList.find(v=>v.path === pathname.title)}

        14-10 React16新特性及错误处理1

            新版本带来的优化和新功能

                新的核心算法Fiber
                Render可以返回数组，字符串
                错误处理的机制

                Portals组件     react可以渲染在dom结构之外的结构 比如说灰色的透明全局背景
                更好更快的服务端渲染  renderToNodeString   快3倍左右 
                体积更小,MIT协议  比15减少30%左右  百度弃用React后 完全开源 



        14-11 React16错误处理2

                启动服务 发现直接访问 loaclhost:3000 会报错
                这个报错是因为在Dasboard.js页面中navList数组中没有 / 的空数据路由 所以会报错 
                解决这个需要从两方面解决 
                    1.设置关于404页面  在app.js  设置一个变量 根据变量判断 componentDidCatch是Reactc错误处理 捕获异常  如果有异常 就转入错误页面 如果没有异常就直接展示
                        constructor(props){
                            super(props)
                            this.state = {
                                hasError:false
                            }
                        }
                        componentDidCatch(err,info){
                            console.log(err,info)
                            this.setState({
                                hasError:true
                            })
                        }
                        render(){
                            return this.state.hasError?
                            <Error></Error>:(
                                <div>
                                    <AuthRoute></AuthRoute>
                                    <Switch>
                                        <Route path='/geniusinfo' component={GeniusInfo}></Route>
                                        <Route path='/bossInfo' component={BossInfo}></Route>
                                        <Route path='/login' component={Login}></Route>
                                        <Route path='/register' component={Register}></Route>
                                        <Route path='/chat/:user' component={Chat}></Route>
                                        <Route component={Dashboard}></Route>
                                    </Switch>
                                </div>
                            )
                        }
                    2.在dashboard.js里面设置 如果page存在则渲染 如果不存在 则跳转其他页面
                    const page = navList.find(v=>v.path === pathname)
                    return page?(
                        <div>
                            <div style={{ height: '100%'}}>
                                <NavBar className='fix-header' mode='dard'>
                                    {page.title}
                                </NavBar>
                                <div  className='page-content'>
                                    <Switch>
                                        {
                                            navList.map(v=>(
                                                <Route key={v.path} path={v.path} component={v.component}>

                                                </Route>
                                            ))
                                        }
                                    </Switch>
                                </div>
                            </div>
                            <NavLinkBar  data={navList}></NavLinkBar>
                        </div>
                    ):<Redirect to="/msg"></Redirect> 


        14-12 React16服务端渲染新Api

            新版本更快的流式渲染
                之前版本的 renderToString,解析为字符串
                新版本的 renderToNodeStream 解析为可读的字节流对象
                使用ReactDom.hydate取代render 

            之前的renderToString是字符串  而 renderToNodeStream 是解析成流的模式
            server.js
                import { renderToNodeStream } from 'react-dom/server'
            
           let context = {}
            const markupStream =  
                renderToNodeStream(
                    (<Provider store={store} >
                        <StaticRouter 
                        location={req.url} 
                        context={context}>
                            <App></App>
                        </StaticRouter>
                    </Provider>)
                )
            res.write(`
                <!DOCTYPE html>
                     <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                        <meta name="theme-color" content="#000000">
                        <meta name="keywords" content="React,Redux,聊天,SSR">
                        <meta name="describe" content="React开发,Redux数据管理">
                        <meta name="author" content="Richard">
                        <title>React App</title>
                        <link rel="stylesheet" href="/${staticPath['main.css']}">
                    </head>
                    <body>
                        <noscript>
                            You need to enable JavaScript to run this app.
                        </noscript>
                        <div id="root">
            `)
            markupStream.pipe(res,{end:false})
            markupStream.on('end',()=>{
                    </div>
                    <script src="/${staticPath['main.js']}"></script>
                </body>
                </html>
                res.end()
            })

        index.js里面使用ReactDom.hydate取代render    
```

