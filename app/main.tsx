import 'babel-polyfill'
import 'normalize.css/normalize.css'

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/** Config imports */
import '../config/axios'

/** Global styling imports */
import './style/typography.scss'

import App from './App'
import store from './state/store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
