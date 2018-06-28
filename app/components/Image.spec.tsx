import { shallow } from 'enzyme'
import * as React from 'react'

import Image from './Image'

describe('Image', () => {
  const wrapper = shallow(<Image />)

  it('renders', () => {
    expect(wrapper.length).toBe(1)
  })
})
