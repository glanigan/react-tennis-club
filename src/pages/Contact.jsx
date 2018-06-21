import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../components/elements/Heading'
import Container from '../components/elements/Container'
import ContactUsForm from '../components/ContactUsForm'
class Contact extends React.Component {
  render () {
    return(
      <Container>
        <div className="divmap">
          <Heading align="center" width="100%">Get in touch</Heading>
        </div>
        <ContactUsForm width="50%"/>
      </Container>
    )
  }
}

export default Contact;
