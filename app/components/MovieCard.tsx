import * as React from 'react'

import { fromNullable } from 'fp-ts/lib/Option'
import Image from './Image'

interface Props {
  pass?: () => void
  movie: Movie
}

export class MovieCard extends React.Component<Props> {
  render() {
    const { movie, pass } = this.props
    return (
      <div onClick={pass}>
        <h3>{movie.title}</h3>
        <Image path={fromNullable(movie.poster_path)} size="w500" />
      </div>
    )
  }
}

export default MovieCard
