import { Option } from 'fp-ts/lib/Option'

declare global {
  interface AppState {
    config: ConfigState.Config
  }

  namespace ConfigState {
    interface Images {
      baseUrl: Option<Uri>
      secureBaseUrl: Option<Uri>
    }

    interface Config {
      images: Images
      loading: boolean
      errors: FailureResponse[]
    }
  }
}
