import { Option, fromNullable, none } from 'fp-ts/lib/Option'
import * as React from 'react'
import { connect } from 'react-redux'

import MovieCard from './MovieCard'

interface StateProps {
  movies: Movie[]
}

interface DispatchProps {}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

interface State {
  index: number
  current: Option<Movie>
  next: Option<Movie>
}

export class ShowMovieCard extends React.Component<Props, State> {
  static getDerivedStateFromProps = (props: Props, state: State) => ({
    current: fromNullable(props.movies[state.index]),
    next: fromNullable(props.movies[state.index + 1]),
  })

  public readonly state: State = { index: 0, current: none, next: none }

  pass = () => {
    this.setState(state => ({ index: state.index + 1 }))
  }

  render() {
    const { current, next } = this.state

    return (
      <>
        {current
          .map(mov => <MovieCard key={mov.id} movie={mov} pass={this.pass} />)
          .getOrElse(<span data-no-current-movie>No current movie</span>)}
        {next
          .map(mov => <MovieCard key={mov.id} movie={mov} />)
          .getOrElse(<span data-no-next-movie>No next movie</span>)}
      </>
    )
  }
}

export const mapStateToProps = (state: AppState) => ({ movies: state.discover.movies })

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps)(
  ShowMovieCard,
)
