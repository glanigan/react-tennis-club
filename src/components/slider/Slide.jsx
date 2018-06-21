import React,{Component} from 'react'

const Slide = (props) => {
    let background = {
        backgroundImage:'url('+props.background+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width:'800px',
        maxWidth:'100%',
        height:'300px', 
        //boxShadow: '2px 2px 10px #666',
        boxShadow: 'inset 0px 0px 50em #444',
    }
    return(
        <div style={background}></div>
    )
}
export default Slide