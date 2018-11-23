import React from 'react'
import { connect } from 'react-redux'
import { List,Badge } from 'antd-mobile'

@connect(
    state=>state
)
class Msg extends React.Component{
    getLast(arr){
        return arr[arr.length-1] 
    }
    render(){
        const Item = List.Item
        const Brief = Item.Brief
        const userid = this.props.user._id     //当前的用户id
        const userInfo = this.props.chat.users //所有用户
        const msgGroup = {}
        this.props.chat.chatmsg.forEach(ele => {
            msgGroup[ele.chatid] = msgGroup[ele.chatid] || []
            msgGroup[ele.chatid].push(ele)
        });
        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLast(a).create_time
            const b_last = this.getLast(b).create_time
            return b_last - a_last
        }) // es6直接取key值 并且倒序排序 确保最新的时间消息在最上面
        console.log(chatList)
        return(
            <div>
                {chatList.map(v=>{
                    const lastItem = this.getLast(v)
                    const targetId = v[0].from === userid?v[0].to:v[0].from
                    const unreadNum = v.filter(v=>!v.read&&v.to===userid).length
                    const name = userInfo[targetId]?userInfo[targetId].name:''
                    const avatar = userInfo[targetId]?userInfo[targetId].avatar:''
                    return(
                        <List key={lastItem._id}>
                            <Item
                                extra={<Badge text={unreadNum}></Badge>}
                                thumb={require(`../img/${avatar}.jpg`)}
                                arrow='horizontal'
                                onClick={()=>{
                                    this.props.history.push(`/chat/${targetId}`)
                                }}
                            >
                                {lastItem.content}
                                <Brief>{name}</Brief>
                            </Item>
                        </List>
                    )
                })}
            </div>
        )
    }
}

export default Msg
