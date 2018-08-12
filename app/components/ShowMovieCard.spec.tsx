import { shallow } from 'enzyme'
import * as jsc from 'jsverify'
import * as React from 'react'

import { none, some } from 'fp-ts/lib/Option'
import MovieCard from '~components/MovieCard'
import { generators } from '~utils'
import { ShowMovieCard } from './ShowMovieCard'

const propsG = jsc.record({
  movies: jsc.array(generators.movie),
})

const stateG = jsc.record({
  current: generators.option(generators.movie),
  index: jsc.integer,
  next: generators.option(generators.movie),
})

describe('ShowMovieCard', () => {
  it('does not crash on random props and state', () => {
    jsc.assertForall(propsG, stateG, (props, state) => {
      const random = shallow(<ShowMovieCard {...props} />)

      random.setState(state)
      expect(random).toHaveLength(1)

      return true
    })
  })

  const wrapper: any = shallow(<ShowMovieCard movies={[]} />)

  describe('the component state', () => {
    it('initializes with index zero', () => {
      expect(wrapper.state().index).toBe(0)
    })

    it('initializes with none as current and next', () => {
      expect(wrapper.state().current).toEqual(none)
      expect(wrapper.state().next).toEqual(none)
    })

    describe('when movies exist in props', () => {
      const [current, next] = [generators.make(generators.movie), generators.make(generators.movie)]

      beforeEach(() => {
        wrapper.setProps({ movies: [current, next] })
      })

      it('contains index zero as current', () => {
        const movie = wrapper.state().current

        expect(movie).not.toEqual(none)
        expect(movie).toEqual(some(current))
      })

      it('contains index one as next', () => {
        const movie = wrapper.state().next

        expect(movie).not.toEqual(none)
        expect(movie).toEqual(some(next))
      })
    })

    describe('when the pass method is called', () => {
      it('increases state.index by one', () => {
        wrapper.setState({ index: 0 })

        expect(wrapper.state().index).toBe(0)

        wrapper.instance().pass()
        expect(wrapper.state().index).toBe(1)

        wrapper.instance().pass()
        expect(wrapper.state().index).toBe(2)
      })
    })
  })

  describe('the render method', () => {
    describe('if there is a current movie', () => {
      const movie = generators.make(generators.movie)
      let card: any

      beforeEach(() => {
        wrapper.setState({ index: 0 })
        wrapper.setProps({ movies: [movie] })
        card = wrapper.find(MovieCard)
      })

      it('renders a MovieCard with it', () => {
        expect(card).toHaveLength(1)
        expect(card.props().movie).toEqual(movie)
      })

      it('passes this.pass to the MovieCard', () => {
        expect(card.props().pass).toEqual(wrapper.instance().pass)
      })
    })

    describe('if there is no current movie', () => {
      beforeEach(() => {
        wrapper.setProps({ movies: [] })
      })

      it('renders a the "No current movie" message', () => {
        expect(wrapper.find('[data-no-current-movie]')).toHaveLength(1)
      })
    })

    describe('if there is a next movie', () => {
      const current = generators.make(generators.movie)
      const next = generators.make(generators.movie)
      let card: any

      beforeEach(() => {
        wrapper.setState({ index: 0 })
        wrapper.setProps({ movies: [current, next] })
        card = wrapper.find(MovieCard).findWhere((node: any) => node.props().movie.id === next.id)
      })

      it('renders a MovieCard with it', () => {
        expect(card).toHaveLength(1)
        expect(card.props().movie).toEqual(next)
      })
    })

    describe('if there is no next movie', () => {
      beforeEach(() => {
        wrapper.setProps({ movies: [] })
      })

      it('renders the "No next movie" message', () => {
        expect(wrapper.find('[data-no-next-movie]')).toHaveLength(1)
      })
    })
  })
})
