import { SagaIterator } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { Action, AsyncActionCreators } from 'typescript-fsa'

export function buckle<Params, Result, Err>(
  saga: (action: Action<Params>) => SagaIterator,
  actionCreators: AsyncActionCreators<Params, Result, Err>,
): (action: Action<Params>) => SagaIterator {
  return function* buckled(action) {
    try {
      const result = yield* saga(action)
      yield put(actionCreators.done({ params: action.payload, result }))
    } catch (error) {
      yield put(actionCreators.failed({ params: action.payload, error }))
    }
  }
}
