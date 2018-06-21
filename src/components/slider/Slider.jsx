import React from 'react'
import Wrapper from '../elements/Wrapper'

import Slide from './Slide'

import Slide1 from '../../assets/jumbo1.jpg'
import Slide2 from '../../assets/jumbo2.jpg'
import Slide3 from '../../assets/jumbo3.jpg'

export default class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state={
            slide:1
        }
    }
    componentDidMount = () =>{
        console.log('Mount')
        window.setInterval(() => {this.nextSlide()},5000)
    }
    componentDidUpdate = () =>{
        
    }
    nextSlide = () =>{
        let slidenumber;
        if(this.state.slide===3){
            slidenumber=1
        }
        else{
            slidenumber=this.state.slide+1
        }
        this.setState({
            slide:slidenumber
        })
    }
    render(){
        return(
            <Wrapper>
                { this.state.slide===1 && <Slide background={Slide1} /> }
                { this.state.slide===2 && <Slide background={Slide2} /> }
                { this.state.slide===3 && <Slide background={Slide3} /> }
            </Wrapper>
        )
    }
}