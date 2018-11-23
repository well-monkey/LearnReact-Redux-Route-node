import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geninusinfo/geniusinfo'
import Dashboard from './container/dashboard/dashboard'
import Chat from './component/chat/chat'
import Error from './component/error/error'

import AuthRoute from './component/authroute/authroute'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(err,info){
        console.log(err,info)
        this.setState({
            hasError:true
        })
    }
    render(){
        return this.state.hasError?
        <Error></Error>:(
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    <Route path='/bossInfo' component={BossInfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/chat/:user' component={Chat}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        )
    }
}
export default App
