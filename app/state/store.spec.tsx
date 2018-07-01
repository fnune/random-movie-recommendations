import { shallow } from 'enzyme'
import * as React from 'react'
import { Provider } from 'react-redux'
import store from './store'

describe('the store', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <div />
    </Provider>,
  )

  it('does not crash', () => {
    expect(wrapper.find('div').length).toBe(1)
  })
})
