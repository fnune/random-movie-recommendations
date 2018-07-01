import { Option } from 'fp-ts/lib/Option'

declare global {
  interface AppState {
    config: ConfigState.Config
    discover: DiscoverState.Discover
  }

  interface Meta {
    page: number
    totalPages: number
    totalResults: number
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

  namespace DiscoverState {
    interface Discover {
      movies: Movie[]
      loading: boolean
      errors: FailureResponse[]
      meta: Option<Meta>
    }
  }
}
