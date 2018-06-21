import React from 'react'
import AppbarWrapper from './AppbarWrapper'
import Brand from './Brand'
import Nav from './Nav'
import Container from '../elements/Container'
import Logo from '../elements/Logo'
import Logopng from '../../assets/logo.png'
class Appbar extends React.Component {
  render () {
    return(
      <AppbarWrapper>
        <Container align='space-between'>
          <Brand to='/'>
            <Logo src={Logopng} alt='logo'/>
          </Brand>
          <Nav/>
        </Container>
      </AppbarWrapper>
    )
  }
}

export default Appbar;
