import sagas from './sagas'

describe('the root saga', () => {
  it('does not crash', () => {
    expect(sagas()).toBeDefined()
  })
})
