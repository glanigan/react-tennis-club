import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../components/elements/Heading'
import Container from '../components/elements/Container'
import Wrapper from '../components/elements/Wrapper'
class About extends React.Component {
  render (){
    return(
      <Container>
        <Wrapper>
        <Heading>About us</Heading>
        </Wrapper>
        <Heading size="4em">Page coming soon!</Heading>
      </Container>
    )
  }
}

export default About;
