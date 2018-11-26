import React from 'react'
class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img style={{width:'200px',height:'60px',display:'block',margin: '0 auto'}} src={require('./logo.jpg')} alt="" />
            </div>
        )
    }
}
export default Logo