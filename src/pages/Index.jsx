import React from 'react'
import { FacebookIcon } from 'react-share'

import Container from '../components/elements/Container'
import Wrapper from '../components/elements/Wrapper'
import Section from '../components/elements/Section'
import PageHeading from '../components/elements/PageHeading'
import Heading from '../components/elements/Heading'
import Text from '../components/elements/Text'
import Image from '../components/elements/Image'
import Tagline from '../components/elements/Tagline'
import Slider from '../components/slider/Slider'
import ContactUsForm from '../components/ContactUsForm'
import LinkBoxes from '../components/LinkBoxes'

class Index extends React.Component {
  componentDidMount(){
    if (window.FB) {
      // Read the entire document for `fb-*` classnames
      window.FB.XFBML.parse();
    }
  }
  render () {
    return(
      <Wrapper>
        <Container margin_top='0px'>
          <Slider/>
          <PageHeading>Ballymena Lawn Tennis Club</PageHeading>
          <Tagline>Creating a community which welcomes everyone, while introducing tennis to the masses</Tagline>
        </Container>
        <Section margin_top="40px" background="#77a069">
          <Container>
            <Wrapper width="30%">
              <Heading color="#ffffff">Who are we?</Heading>
            </Wrapper>
            <Wrapper width="70%">
              <Text color="#ffffff">Ballymena Lawn Tennis Club caters for all ages and all standards of play. 
              The club plays all year and competes regluarly in Belfast and District Leagues. Connect with us on social media to get the latest news...</Text>
              <div className="fb-like" data-href="https://www.facebook.com/Ballymenalawntennisclub/" data-width="50" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
            </Wrapper>
          </Container>
        </Section>
        <Section>
          <Container>
          <LinkBoxes/>
          </Container>
        </Section>
        <Section>
          <div className="divmap">
          <Heading align="center" width="100%">Get in touch</Heading>
          </div>
          <Container align="space-between">
            <ContactUsForm width="50%" />
          <Wrapper width="40%" height="100%">
            <Wrapper height="50%">
              <Heading>Give us a call</Heading>
              <Wrapper>07514 280584</Wrapper>
            </Wrapper>
            <Wrapper height="50%">
              <Heading>Connect with us</Heading>
                <Wrapper>
                  <FacebookIcon size={32}/>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Container>
        </Section>
      </Wrapper>
    )
  }
}

export default Index;
