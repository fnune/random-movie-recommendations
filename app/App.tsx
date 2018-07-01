import * as React from 'react'
import { connect } from 'react-redux'

import MovieCard from '~components/MovieCard'
import discoverActions from '~state/discover/actions'
import initActions from '~state/init/actions'

interface StateProps {
  movies: Movie[]
}

interface DispatchProps {
  fetchMovies: typeof discoverActions.fetchMovies.started
  fetchStartupData: typeof initActions.fetchStartupData.started
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

export class App extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchMovies({})
    this.props.fetchStartupData({})
  }

  render() {
    return <>{this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}</>
  }
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
  state => ({
    movies: state.discover.movies,
  }),
  {
    fetchMovies: discoverActions.fetchMovies.started,
    fetchStartupData: initActions.fetchStartupData.started,
  },
)(App)
