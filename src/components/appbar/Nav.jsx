import React from 'react'
import NavLink from './NavLink'
class Nav extends React.Component {
  render () {
    return(
      <nav>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/meet-the-coaches'>Meet the Coaches</NavLink>
        <NavLink to='/contact'>Get in touch</NavLink>
      </nav>
    )
  }
}

export default Nav;
