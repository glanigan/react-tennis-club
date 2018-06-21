import React,{ Component } from 'react'
import Link from '../elements/Link'
import Text from '../elements/Text';
import Wrapper from '../elements/Wrapper';
import Image from '../elements/Image'
export default class LinkBox extends Component{
    render(){
        return(
            <Wrapper width="250px" height="250px" margin="10px auto" hover>
                <Link to={this.props.link} background="#222222">
                    <Image src={this.props.image} alt={this.props.name}/>
                    <Wrapper background="rgba(0,0,0,0.8)" margin="0" height="50px" position="relative" bottom="55px">
                        <Text align="center" line="1" color="#ffffff">{this.props.name}</Text>
                    </Wrapper>
                </Link>
            </Wrapper>
        )
    }
}