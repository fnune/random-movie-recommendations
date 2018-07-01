import * as React from 'react'

import { fromNullable } from 'fp-ts/lib/Option'
import Image from './Image'

interface Props {
  movie: Movie
}

export class MovieCard extends React.Component<Props> {
  render() {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
        <Image path={fromNullable(this.props.movie.poster_path)} />
      </div>
    )
  }
}

export default MovieCard
