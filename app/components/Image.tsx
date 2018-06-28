import { Option } from 'fp-ts/lib/Option'
import * as React from 'react'

interface Props {
  path: Option<Uri>
}

export class Image extends React.Component<Props> {
  render() {
    const { path } = this.props
    return <img src={`https://image.tmdb.org/t/p/w500/${path.getOrElse('')}`} />
  }
}

export default Image
