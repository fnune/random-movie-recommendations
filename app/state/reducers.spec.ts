import * as jsc from 'jsverify'
import reducers from './reducers'

describe('the root reducer', () => {
  it('does not crash', () => {
    jsc.assertForall(jsc.json, random => {
      expect(reducers({ main: random }, random)).toBeDefined()
      return true
    })
  })
})
