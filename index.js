import React from 'react'
import { render } from 'react-dom'

import {
  Router,
  Route,
  hashHistory
} from 'react-router'

import { App, One, Two } from './src/app'

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
        <Route path='/one' component={One} />
        <Route path='/two' component={Two} />
    </Route>
  </Router>,
  document.querySelector('#app')
)
