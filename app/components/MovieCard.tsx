import * as React from 'react'

import Image from './Image'

interface Props {
  movie: Movie
}

export class MovieCard extends React.Component<Props> {
  render() {
    return (
      <div>
        <Image />
      </div>
    )
  }
}

export default MovieCard
