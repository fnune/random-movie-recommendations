interface IndexSuccessResponse<Resource> {
  page: number
  results: Resource[]
  total_pages: number
  total_results: number
}

interface FailureResponse {
  status_code: number
  status_message: string
}

type IndexResponse<Resource> = IndexSuccessResponse<Resource> | FailureResponse

interface ConfigurationResponse {
  images: {
    base_url: Url
    secure_base_url: Url
    backdrop_sizes: ImageSizes.Backdrop[]
    logo_sizes: ImageSizes.Logo[]
    poster_sizes: ImageSizes.Poster[]
    profile_sizes: ImageSizes.Profile[]
    still_sizes: ImageSizes.Still[]
  }
  change_keys: string[]
}
