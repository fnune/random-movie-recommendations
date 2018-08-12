import * as React from 'react'
import { connect } from 'react-redux'

import discoverActions from '~state/discover/actions'
import initActions from '~state/init/actions'

import ShowMovieCard from '~components/ShowMovieCard'

interface StateProps {}

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
    return <ShowMovieCard />
  }
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
  null,
  {
    fetchMovies: discoverActions.fetchMovies.started,
    fetchStartupData: initActions.fetchStartupData.started,
  },
)(App)
