import React,{Component} from 'react'
import Wrapper from '../elements/Wrapper';
import AboutUsImg from '../../assets/jumbo2.jpg'
import LinkBox from './LinkBox';

export default class LinkBoxes extends Component {
    render(){
        return(
            <Wrapper align="center">
                <LinkBox 
                name='About us' 
                image={AboutUsImg}
                link='/about'/>
                <LinkBox 
                name='Meet The Coaches'
                image={AboutUsImg}
                link='/meet-the-coaches'/>
                <LinkBox 
                name='Get in touch'
                image={AboutUsImg}
                link='/contact'/>
            </Wrapper>
        )
    }
}