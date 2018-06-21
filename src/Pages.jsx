import React from 'react'
import RouteWithScroll from './RouteWithScroll'
import Main from './components/elements/Main'

import Index from './pages/Index'
import About from './pages/About'
import MeetTheCoaches from './pages/MeetTheCoaches'
import Contact from './pages/Contact'

class Pages extends React.Component {
  render () {
    return(
      <Main>
        <RouteWithScroll exact path='/' component={Index}/>
        <RouteWithScroll path='/about' component={About}/>
          <RouteWithScroll path='/meet-the-coaches' component={MeetTheCoaches}/>
        <RouteWithScroll path='/contact' component={Contact}/>
      </Main>
    )
  }
}

export default Pages;
