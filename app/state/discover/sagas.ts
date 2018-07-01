import { SagaIterator } from 'redux-saga'
import { call, takeLatest } from 'redux-saga/effects'
import { buckle } from '~utils'

import actions from './actions'
import { discover } from './api'

export const fetchMovies = buckle(function* fetchMovies(action): SagaIterator {
  const { data } = yield call(discover, action.payload)
  return data
}, actions.fetchMovies)

export default function* init() {
  yield takeLatest(actions.fetchMovies.started, fetchMovies)
}
