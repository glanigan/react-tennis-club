import React from 'react'

import Heading from './elements/Heading'
import Form from './elements/form/Form'
import Input from './elements/form/Input'
import Label from './elements/form/Label'
import Button from './elements/form/Button'
import TextArea from './elements/form/TextArea'

const ContactUsForm = (props) => {
    return(
        <Form width={props.width} autocomplete="off" method="POST" action="https://formspree.io/barry.clarke93@hotmail.co.uk">
              <Heading>Contact form</Heading>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" placeholder="Joe Blogs" required/>

              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="YourEmail@email.com" required/>

              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" name="_subject" placeholder="Message subject" required/>

              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" placeholder="Type your message here" required/>
              <input type="hidden" name="_next" value="http://ballymenalawntennisclub.co.uk/" />
              <input type="text" name="_gotcha" style={{display:"none"}} />
              <Button type="submit">Send</Button>
            </Form>
    )
}
export default ContactUsForm