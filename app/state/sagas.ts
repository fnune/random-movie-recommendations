import { fork } from 'redux-saga/effects'
import init from './init/sagas'

export default function* sagas() {
  yield fork(init)
}
