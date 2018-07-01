import { combineReducers } from 'redux'
import init from '~state/init/reducer'

export default combineReducers({ config: init })
