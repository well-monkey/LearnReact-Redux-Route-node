import React from 'react'
class Error extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img style={{width:'100%',height:'300px',display:'block'}} src={require('./error.gif')} alt="" />
            </div>
        )
    }
}
export default Error