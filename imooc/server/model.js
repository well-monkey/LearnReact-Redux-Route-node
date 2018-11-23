// model模型

const mongoose = require('mongoose')

// 链接mongo 并且使用reactApp这个集合
const DB_URL = 'mongodb://localhost:27017/reactChat'
mongoose.connect(DB_URL,{useNewUrlParser:true},function(err){
    if(err){
        console.log('Connection Error:' + err)
    }else{
    　　console.log('Connection success!') }
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
        'chatid':{'type':String,},
        'from':{'type':String,'require':true},
        'to':{'type':String,'require':true},
        'read':{'type':Boolean,'default':false},
        'content':{'type':String,'require':true,'default':''},
        'create_time':{'type':Number,'default':new Date().getTime()}
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
