import { some } from 'fp-ts/lib/Option'
import * as jsc from 'jsverify'
import { generators } from '~utils'
import actions from './actions'
import reducer, { initialState } from './reducer'

describe('the init reducer', () => {
  it(`reacts to ${actions.fetchMovies.started.type}`, () => {
    const state = reducer(
      {
        ...initialState,
        loading: false,
        errors: [generators.make(generators.failureResponse)],
      },
      actions.fetchMovies.started({}),
    )

    expect(state.loading).toBe(true)
    expect(state.errors).toEqual([])
  })

  it(`reacts to ${actions.fetchMovies.done.type}`, () => {
    const result = {
      results: generators.make(jsc.nearray(generators.movie)),
      page: 1,
      total_pages: 5,
      total_results: 40,
    }
    const state = reducer(
      {
        ...initialState,
        loading: true,
        errors: [generators.make(generators.failureResponse)],
      },
      actions.fetchMovies.done({
        params: {},
        result,
      }),
    )

    expect(state.loading).toBe(false)
    expect(state.errors).toEqual([])
    expect(state.movies).toEqual(result.results)
    expect(state.meta).toEqual(
      some({
        page: 1,
        totalPages: 5,
        totalResults: 40,
      }),
    )
  })

  it(`reacts to ${actions.fetchMovies.failed.type}`, () => {
    const error = generators.make(generators.failureResponse)
    const state = reducer(
      {
        ...initialState,
        loading: true,
        errors: [],
      },
      actions.fetchMovies.failed({
        params: {},
        error,
      }),
    )

    expect(state.loading).toBe(false)
    expect(state.errors).toEqual([error])
  })
})
