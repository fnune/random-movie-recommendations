import * as React from 'react'
import axios, { AxiosResponse } from 'axios'

import MovieCard from './components/MovieCard'

interface State {
  movies: Movie[]
}

export class App extends React.Component<{}, State> {
  state: State = {
    movies: [],
  }

  componentDidMount() {
    axios
      .get(
        'discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      )
      .then((response: AxiosResponse<IndexSuccessResponse<Movie>>) => {
        this.setState({ movies: response.data.results })
      })
      .catch(error => console.log(error))
  }

  render() {
    return <>{this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}</>
  }
}

export default App
