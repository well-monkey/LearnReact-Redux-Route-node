import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login,toRegisger } from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/inooc-form'



@connect(
    state=>state.user,
    {login,toRegisger}
)
@imoocForm
class Login extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.history,this.props.redirectTo)
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register(){
        this.props.toRegisger() // 手动执行清空 redirectTo 使得下面的路由跳转判断成功
        this.props.history.push('/register')
    }
    handleLogin(){
        this.props.login(this.props.state)
    }
    render(){
        return (
            <div>
                {this.props.redirectTo&&this.props.redirectTo!=='/login'?<Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo> 
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            onChange={(v)=>this.props.handleChange('user',v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            onChange={(v)=>this.props.handleChange('pwd',v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>  
            </div>
        )
    }
}

export default Login