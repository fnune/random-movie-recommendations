import { combineReducers } from 'redux'

import discover from '~state/discover/reducer'
import init from '~state/init/reducer'

export default combineReducers({ config: init, discover })
