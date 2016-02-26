import React, { Component } from 'react'

class Widget extends Component {
  render () {
    const { page } = this.props
    const message = `I'm your page ${page} widget. Have at it.`
    return <div>{message}</div>
  }
}

export default Widget
