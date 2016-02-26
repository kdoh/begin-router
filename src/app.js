import React, { Component } from 'react'
import Widget from './widget'

import { Link } from 'react-router'

export class App extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
          <Link to='/one'>One</Link>
          <Link to='/two'>Two</Link>
          {this.props.children}
      </div>
    )
  }
}
export class One extends Component {
  render () {
    const { path } = this.props.route
    return <Widget page={path} />
  }
}

export class Two extends Component {
  render () {
    const { path } = this.props.route
    return <Widget page={path} />
  }
}
