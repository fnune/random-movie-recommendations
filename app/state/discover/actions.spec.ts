import actions from './actions'

describe('init actions', () => {
  it('export action creators', () => {
    expect(Object.values(actions).every(action => !!action.type)).toBe(true)
  })
})
