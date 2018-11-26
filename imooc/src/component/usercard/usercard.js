import React from 'react'
import PropTypes from 'prop-types'
import { Card, WhiteSpace, WingBlank}  from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import './usercard'

@withRouter
class UserCard extends React.Component{
    static propTypes = {
        userlist:PropTypes.array.isRequired
    }
    handleChick(v){
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        const Header = Card.Header;
        const Body = Card.Body;
        return(
            <WingBlank>
                <WhiteSpace/>
                {this.props.userlist.map(v=>(
                    v.avatar?(
                        <Card 
                            className="cardList"
                            key={v._id} 
                            onClick={()=>this.handleChick(v)}
                        > 
                        <Header
                            title={v.user}
                            thumb={require(`../img/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}
                        ></Header>
                        <Body>
                        {v.type === 'boss'?<div>公司:{v.company}</div>:null}
                        {v.desc !==''?v.desc.split('\n').map((d,key)=>(
                            <div key={key}>{d}</div>
                        )):null} 
                        {v.type === 'boss'?<div>薪资:{v.money}</div>:null}
                        </Body>
                    </Card>):null
                ))}
                 <WhiteSpace/>
            </WingBlank>
        )
    }
}

export default UserCard