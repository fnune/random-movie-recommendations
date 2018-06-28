import { shallow } from 'enzyme'
import * as jsc from 'jsverify'
import * as React from 'react'

import { generators } from '../utils'
import MovieCard from './MovieCard'

describe('MovieCard', () => {
  const wrapper = shallow(<MovieCard movie={generators.make(generators.movie)} />)

  it('renders', () => {
    jsc.assertForall(jsc.record({ movie: generators.movie }), props => {
      wrapper.setProps(props)
      expect(wrapper.length).toBe(1)
      return true
    })
  })
})
