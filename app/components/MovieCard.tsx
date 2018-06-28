import * as React from 'react'

import Image from './Image'
import { fromNullable } from 'fp-ts/lib/Option'

interface Props {
  movie: Movie
}

export class MovieCard extends React.Component<Props> {
  render() {
    const { movie } = this.props
    return (
      <div>
        <p>{movie.title}</p>
        <Image path={fromNullable(movie.poster_path)} />
      </div>
    )
  }
}

export default MovieCard
