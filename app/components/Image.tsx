import { Option } from 'fp-ts/lib/Option'
import * as React from 'react'
import { connect } from 'react-redux'

interface StateProps {
  baseUrl: Option<Url>
  secureBaseUrl: Option<Url>
}

interface DispatchProps {}

interface OwnProps {
  path: Option<Uri>
  protocol?: Uri
  size?: ImageSizes.Any
}

type Props = StateProps & DispatchProps & OwnProps

export const Image: React.SFC<Props> = ({ path, baseUrl, secureBaseUrl, protocol, size }) => {
  const base = protocol === 'https:' ? secureBaseUrl : baseUrl

  return [base, path].every(opt => opt.isSome()) ? (
    <img src={`${base.toNullable()}${size}/${path.toNullable()}`} />
  ) : (
    <div>Loading...</div>
  )
}

Image.defaultProps = { size: 'original', protocol: location.protocol }

export default connect<StateProps, DispatchProps, OwnProps, AppState>(state => ({
  baseUrl: state.config.images.baseUrl,
  secureBaseUrl: state.config.images.secureBaseUrl,
}))(Image)
