import * as jsc from 'jsverify'
import { generators } from '~utils'
import reducers from './reducers'

describe('the root reducer', () => {
  it('does not crash', () => {
    jsc.assertForall(jsc.json, random => {
      expect(
        reducers(generators.make(generators.appState), { type: '', payload: random }),
      ).toBeDefined()
      return true
    })
  })
})
