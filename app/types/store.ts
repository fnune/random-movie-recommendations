interface AppState {
  config: ConfigState.Config
}

declare namespace ConfigState {
  interface Images {
    baseUrl: string | null
    secureBaseUrl: string | null
  }

  interface Config {
    images: Images
    loading: boolean
    errors: FailureResponse[]
  }
}
