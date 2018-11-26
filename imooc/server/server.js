
import express  from 'express'
import bodyParser  from 'body-parser' //post 交互需要
import cookParser  from 'cookie-parser'
import userRouter  from './user'
import model       from './model'
import path        from 'path'

import csshook from 'css-modules-require-hook/preset' 
import assethook from 'asset-require-hook'
import React from 'react'
import { Provider } from 'react-redux' //链接用的 只用一次
import { createStore,applyMiddleware,compose } from 'redux' // applyMiddleware 管理中间件 compose组合函数
import thunk  from 'redux-thunk'
import { StaticRouter } from 'react-router-dom'
import App from '../src/app'  
import reducers from '../src/reducer' // 全部的reducer import reducers from './reducer' // 全部的reducer
import { renderToString } from 'react-dom/server'
import staticPath from '../build/asset-manifest'
assethook(
    {extensions: ['jpg','jpeg','png','gif'],name: '[hash].[ext]'}
)




const Chat = model.getModel('chat')
const app = express()       
// work with express
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',function(socket){
    socket.on('sendmsg',function(data){
        // 发送全局事件 全局都知道 
        const {from,to,msg} = data
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg},function(err,doc){
            io.emit('recvmsg',Object.assign({},doc._doc))
        })
    })
})





app.use(cookParser())       //使用cookieparser
app.use(bodyParser.json())
app.use('/user',userRouter) // 中间件
app.use(function(req,res,next){
    if(req.url.startsWith('/user/')||req.url.startsWith('/static/')){
        return next()
    }
    const store  = createStore(reducers,compose(
        applyMiddleware(thunk)
    ))
    let context = {}
    const markup =  
        renderToString(
            (<Provider store={store} >
                <StaticRouter 
                location={req.url} 
                context={context}>
                    <App></App>
                </StaticRouter>
            </Provider>)
        )
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
    return res.sendFile(path.resolve('build/index.html'))
    
    // // react16的写法
    // let context = {}
    // const markupStream =  
    //     renderToNodeStream(
    //         (<Provider store={store} >
    //             <StaticRouter 
    //             location={req.url} 
    //             context={context}>
    //                 <App></App>
    //             </StaticRouter>
    //         </Provider>)
    //     )
    //     res.write(`
    //         <!DOCTYPE html>
    //                 <html lang="en">
    //             <head>
    //                 <meta charset="utf-8">
    //                 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    //                 <meta name="theme-color" content="#000000">
    //                 <meta name="keywords" content="React,Redux,聊天,SSR">
    //                 <meta name="describe" content="React开发,Redux数据管理">
    //                 <meta name="author" content="Richard">
    //                 <title>React App</title>
    //                 <link rel="stylesheet" href="/${staticPath['main.css']}">
    //             </head>
    //             <body>
    //                 <noscript>
    //                     You need to enable JavaScript to run this app.
    //                 </noscript>
    //                 <div id="root">
    //     `)
    //     markupStream.pipe(res,{end:false})
    //     markupStream.on('end',()=>{
    //         res.write(`</div>
    //             <script src="/${staticPath['main.js']}"></script>
    //         </body>
    //         </html>`)
    //         res.end()
    //     })
})

app.use('/',express.static(path.resolve('build')))
server.listen(9093,function(){
    console.log('Node app start at port 9093')
})

