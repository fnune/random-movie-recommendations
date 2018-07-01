import { some } from 'fp-ts/lib/Option'
import { generators } from '~utils'
import actions from './actions'
import reducer, { initialState } from './reducer'

describe('the init reducer', () => {
  it(`reacts to ${actions.fetchStartupData.started.type}`, () => {
    const state = reducer(
      {
        ...initialState,
        loading: false,
        errors: [generators.make(generators.failureResponse)],
      },
      actions.fetchStartupData.started({}),
    )

    expect(state.loading).toBe(true)
    expect(state.errors).toEqual([])
  })

  it(`reacts to ${actions.fetchStartupData.done.type}`, () => {
    const result: any = { images: { base_url: 'XXX', secure_base_url: 'YYY' } }
    const state = reducer(
      {
        ...initialState,
        loading: true,
        errors: [generators.make(generators.failureResponse)],
      },
      actions.fetchStartupData.done({
        params: {},
        result,
      }),
    )

    expect(state.loading).toBe(false)
    expect(state.errors).toEqual([])
    expect(state.images).toEqual({
      baseUrl: some(result.images.base_url),
      secureBaseUrl: some(result.images.secure_base_url),
    })
  })

  it(`reacts to ${actions.fetchStartupData.failed.type}`, () => {
    const error = generators.make(generators.failureResponse)
    const state = reducer(
      {
        ...initialState,
        loading: true,
        errors: [],
      },
      actions.fetchStartupData.failed({
        params: {},
        error,
      }),
    )

    expect(state.loading).toBe(false)
    expect(state.errors).toEqual([error])
  })
})
