import React from 'react'
import {connect} from 'react-redux'
import { Result,List,WhiteSpace,Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import {cleanMsg} from '../../redux/chat.redux'
import { Redirect } from 'react-router-dom'


@connect(
    state=>state.user,
    {logoutSubmit,cleanMsg}
)
class User extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this)
    }
    logout(){
        const alert = Modal.alert
        alert('注销', '确认退出登录吗？？？', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确认', onPress: () => {
                browserCookie.erase('userid')
                this.props.logoutSubmit()
                this.props.cleanMsg()
            }},
        ])
    }
    render(){
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return props.user?(
            <div>
                {
                    this.props.avatar?<Result 
                        img={ <img src={require(`../img/${this.props.avatar}.png`)} style={{width:50}} alt="" /> }
                        title={ props.user }
                        message={props.type === 'boss'?props.company:null}
                    />:<Result 
                        img={ <img src={require(`../img/bear.png`)} style={{width:50}} alt="" /> }
                        title={ '匿名' }
                        message={props.type === 'boss'?props.company:null}
                    />

                }
                {this.props.desc?<List renderHeader={()=>'简介'}>
                    <Item multipleLine>
                        {props.title}
                        {this.props.desc.split('\n').map((v,index)=> <Brief key={index}>{v}</Brief>)}
                        {props.money?<Brief>薪资:{props.money}</Brief>:null}
                    </Item>
                </List>:null}
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item onClick={this.logout}>
                        退出登录
                    </Item>
                </List>
            </div>
        ):<Redirect to={this.props.redirectTo} />
    }
}

export default User