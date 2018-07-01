import * as api from './api'

describe('the init API functions', () => {
  it('are defined', () => {
    expect(Object.values(api).every(fun => typeof fun === 'function')).toBe(true)
  })
})
