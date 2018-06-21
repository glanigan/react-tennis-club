import { Route, withRouter } from 'react-router-dom'
import React from 'react'

class RouteWithScroll extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const {
      component: Component,
      ...rest
    } = this.props

    return (
        <Route {...rest} render={props => (<Component {...props} />)} />
    )
  }
}

export default withRouter(RouteWithScroll)