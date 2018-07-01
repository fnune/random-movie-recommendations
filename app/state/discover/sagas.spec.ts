import { call, put, takeLatest } from 'redux-saga/effects'
import actions from './actions'
import * as api from './api'
import * as sagas from './sagas'

describe('the init saga', () => {
  const saga = sagas.default()

  it('forks the init saga', () => {
    const next = saga.next()
    expect(next.value).toEqual(takeLatest(actions.fetchMovies.started, sagas.fetchMovies))
  })
})

describe('fetchMovies', () => {
  const action = actions.fetchMovies.started({})
  const saga = sagas.fetchMovies(action)

  it('calls the config API function', () => {
    const next = saga.next()
    expect(next.value).toEqual(call(api.discover, {}))
  })

  it('puts the success action', () => {
    const result: any = { images: {} }
    const next = saga.next({ data: result })
    expect(next.value).toEqual(
      put(
        actions.fetchMovies.done({
          params: {},
          result,
        }),
      ),
    )
  })

  it('is then done', () => {
    const next = saga.next()
    expect(next.done).toBe(true)
  })
})
