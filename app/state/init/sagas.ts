import { SagaIterator } from 'redux-saga'
import { call, takeLatest } from 'redux-saga/effects'
import { buckle } from '~utils'

import actions from './actions'
import { config } from './api'

export const fetchStartupData = buckle(function* fetchStartupData(): SagaIterator {
  const { data } = yield call(config)
  return data
}, actions.fetchStartupData)

export default function* init() {
  yield takeLatest(actions.fetchStartupData.started, fetchStartupData)
}
