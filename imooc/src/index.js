import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux' // applyMiddleware 管理中间件 compose组合函数
import thunk  from 'redux-thunk'
import { Provider } from 'react-redux' //链接用的 只用一次
import { BrowserRouter } from 'react-router-dom'
import App from './app'  // 简化代码，将App.js单独封装

import reducers from './reducer' // 全部的reducer
import './config'
import './index.css'
// import 'antd-mobile/dist/antd-mobile.css';

// 1,新建store
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():()=>{}
const store  = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

// boss genius me msg 4个页面 
ReactDOM.render(
    (<Provider store={store} >
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>), 
    document.getElementById('root')
);

