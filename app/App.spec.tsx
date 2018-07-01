import { shallow } from 'enzyme'
import * as React from 'react'

import { App } from './App'

describe('App', () => {
  const fetchMovies = jest.fn() as any
  const fetchStartupData = jest.fn() as any
  const wrapper = shallow(
    <App movies={[]} fetchStartupData={fetchStartupData} fetchMovies={fetchMovies} />,
  )

  it('renders', () => {
    expect(wrapper.length).toBe(1)
  })
})
