import 'normalize.css/normalize.css'
import * as React from 'react'
import { render } from 'react-dom'

import App from './App'

/** Config imports */
import '../config/axios'

/** Global styling imports */
import './style/typography.scss'

render(<App />, document.getElementById('root'))
