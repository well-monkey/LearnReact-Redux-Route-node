import React from 'react'
import { NavBar } from 'antd-mobile'
import {connect} from 'react-redux'
import NavLinkBar from '../navlink/navlink'
import { Switch,Route, Redirect } from 'react-router-dom'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import Msg from '../../component/msg/msg'
import { getMegList,recvMsg } from '../../redux/chat.redux'
import QueueAnim from 'rc-queue-anim'

@connect(
    state=>state,
    { getMegList,recvMsg }
)
class Dasboard extends  React.Component{
    componentDidMount(){
        if(!this.props.chat.chatmsg.length){ //增加条件 否则会发送重复信息
            this.props.getMegList()
            this.props.recvMsg()
        }
    }
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
        // / 
        const page = navList.find(v=>v.path === pathname)
        return page?(
            <div>
                <div style={{ height: '100%'}}>
                    <NavBar className='fix-header' mode='dard'>
                        {page.title}
                    </NavBar>
                    <div  className='page-content'>
                        <QueueAnim duration={800} type='scaleX'>
                            {/* <Switch> */}
                                {
                                    // navList.map(v=>(
                                        <Route key={page.path} path={page.path} component={page.component}>

                                        </Route>
                                    // ))
                                }
                            {/* </Switch> */}
                        </QueueAnim>  
                    </div>
                </div>
                <NavLinkBar  data={navList}></NavLinkBar>
            </div>
        ):<Redirect to="/msg"></Redirect>  
    }
}


export default Dasboard