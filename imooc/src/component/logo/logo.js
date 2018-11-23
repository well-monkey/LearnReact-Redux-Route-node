import React from 'react'
class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img style={{width:'200px',height:'230px',display:'block',margin: '15px auto'}} src={require('./logo.jpeg')} alt="" />
            </div>
        )
    }
}
export default Logo