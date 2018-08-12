import { shallow } from 'enzyme'
import * as React from 'react'

import ShowMovieCard from '~components/ShowMovieCard'

import { App } from './App'

describe('App', () => {
  const fetchMovies = jest.fn() as any
  const fetchStartupData = jest.fn() as any

  const spies = [fetchMovies, fetchStartupData]

  const wrapper: any = shallow(
    <App fetchMovies={fetchMovies} fetchStartupData={fetchStartupData} />,
  )

  beforeEach(() => {
    spies.forEach(mock => mock.mockReset())
  })

  it('renders', () => {
    expect(wrapper.length).toBe(1)
  })

  it('renders a ShowMovieCard', () => {
    expect(wrapper.find(ShowMovieCard)).toHaveLength(1)
  })

  describe('on mount', () => {
    it('calls fetchMovies', () => {
      wrapper.instance().componentDidMount()

      expect(fetchMovies).toHaveBeenCalledWith({})
    })

    it('calls fetchStartupData', () => {
      wrapper.instance().componentDidMount()

      expect(fetchStartupData).toHaveBeenCalledWith({})
    })
  })
})
