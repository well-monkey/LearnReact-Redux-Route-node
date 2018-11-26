import axios from 'axios'
import { getRedirectPath } from '../utils'  //跳转方法
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const LOGOUT = 'LOGOUT'
const TO_REGISGER = 'TO_REGISGER'

const initState = {
    redirectTo:'',
    msg:'',
    user:'',
    type:'',
    _id:''
}
// reducer

export function user(state=initState,action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}    
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        case LOGOUT:
            return {...initState,redirectTo:'/login'} 
        case TO_REGISGER:
            return {...initState,redirectTo:''}           
        default:
            return state
    }
}

function authSuccess(obj){
    const {pwd,...data} = obj //把obj里面 pwd字段去掉了
    console.log(obj)
    return { type:AUTH_SUCCESS, payload:data }
}

function errorMsg(msg){
    return { msg:msg,type:ERROR_MSG }
}


// 详情信息
export function loadData(userinfo){
   return { type:LOAD_DATA, payload:userinfo }
}
// 退出信息
export function logoutSubmit(){
    return { type:LOGOUT }
}
// 登录退出后再次点击注册时候会不能跳转,需要手动清空redirect 
export function toRegisger(){
    return { type: TO_REGISGER }
}

// 登录页面
export function login({user,pwd}){
    if(!user||!pwd){
        return errorMsg('用户名密码必须输入')
    }
    return dispatch =>{
        axios.post('/user/login',{user,pwd})
        .then(res=>{
            if(res.status === 200&&res.data.code === 0){
                console.log(res.data)
                dispatch(authSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

// 注册页面
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
                const _id = res.data.data._id
                dispatch(authSuccess({user,pwd,type,_id}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
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
