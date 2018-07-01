import { fork } from 'redux-saga/effects'

import discover from './discover/sagas'
import init from './init/sagas'

export default function* sagas() {
  yield fork(discover)
  yield fork(init)
}
