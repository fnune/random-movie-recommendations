import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { noop } from 'redux-saga/utils'
import { actionCreatorFactory } from 'typescript-fsa'
import * as sagasUtils from './sagas'

describe('buckle', () => {
  const actions = actionCreatorFactory('TEST').async<string, string, string>('RUN')
  describe('in the success case', () => {
    const action: any = actions.started('it started')
    const saga = sagasUtils.buckle(function*(_a): SagaIterator {
      yield call(noop)
      return 'worked'
    }, actions)(action)

    it('first runs the inner saga', () => {
      const next = saga.next()
      expect(next.value).toEqual(call(noop))
    })

    it('then dispatches the success action with the return value', () => {
      const next = saga.next()
      expect(next.value).toEqual(
        put(
          actions.done({
            params: action.payload,
            result: 'worked',
          }),
        ),
      )
    })

    it('is then done', () => {
      const next = saga.next()
      expect(next.value).not.toBeDefined()
      expect(next.done).toBe(true)
    })
  })

  describe('in the failure case', () => {
    const action: any = actions.started('it started')
    const saga: any = sagasUtils.buckle(function*(_a): SagaIterator {
      yield call(noop)
      return 'worked'
    }, actions)(action)

    it('first runs the inner saga', () => {
      const next = saga.next()
      expect(next.value).toEqual(call(noop))
    })

    it('then calls handleError with the exception', () => {
      const next = saga.throw('bang')
      expect(next.value).toEqual(
        put(
          actions.failed({
            params: action.payload,
            error: 'bang',
          }),
        ),
      )
    })
  })
})
