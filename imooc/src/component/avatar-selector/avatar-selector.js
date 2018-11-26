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
                                icon:require(`../img/${v}.png`),
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