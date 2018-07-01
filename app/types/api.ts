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

/* tslint:disable:max-line-length */
/** https://developers.themoviedb.org/3/discover/movie-discover */
interface DiscoverMoviesParams {
  /**
   * Specify a language to query translatable fields with.
   * minLength: 2
   * pattern: ([a-z]{2})-([A-Z]{2})
   * default: en-US
   */
  language: string

  /**
   * Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
   * pattern: ^[A-Z]{2}$
   */
  region: string

  /**
   * Choose from one of the many available sort options.
   * default: popularity.desc
   */
  sort_by:
    | 'popularity.asc'
    | 'popularity.desc'
    | 'release_date.asc'
    | 'release_date.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'primary_release_date.desc'
    | 'original_title.asc'
    | 'original_title.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc'

  /**
   * A filter and include or exclude adult movies.
   */
  include_adult: boolean

  /**
   * Specify the page of results to query.
   * minimum: 1
   * maximum: 1000
   */
  page: number

  /**
   * A filter to limit the results to a specific primary release year.
   * format: date
   *
   */
  primary_release_year: number

  /**
   * Filter and only include movies that have a primary release date that is greater or equal to the specified value.
   * format: date
   */
  'primary_release_date.gte': IsoDate

  /**
   * Filter and only include movies that have a primary release date that is less than or equal to the specified value.
   * format: date
   */
  'primary_release_date.lte': IsoDate

  /**
   * Filter and only include movies that have a release date (looking at all release dates) that is greater or equal to the specified value.
   * format: date
   */
  'release_date.gte': IsoDate

  /**
   * Filter and only include movies that have a release date (looking at all release dates) that is less than or equal to the specified value.
   * format: date
   */
  'release_date.lte': IsoDate

  /**
   * Filter and only include movies that have a vote count that is greater or equal to the specified value.
   * minimum: 0
   */
  'vote_count.gte': number

  /**
   * Filter and only include movies that have a vote count that is less than or equal to the specified value.
   * minimum: 1
   */
  'vote_count.lte': number

  /**
   * Filter and only include movies that have a rating that is greater or equal to the specified value.
   * minimum: 0
   */
  'vote_average.gte': number

  /**
   * Filter and only include movies that have a rating that is less than or equal to the specified value.
   * minimum: 0
   */
  'vote_average.lte': number

  /**
   * A comma separated list of person ID's. Only include movies that have one of the ID's added as an actor.
   */
  with_cast: string

  /**
   * A comma separated list of person ID's. Only include movies that have one of the ID's added as a crew member.
   */
  with_crew: string

  /**
   * A comma separated list of production company ID's. Only include movies that have one of the ID's added as a production company.
   */
  with_companies: string

  /**
   * Comma separated value of genre ids that you want to include in the results.
   */
  with_genres: string

  /**
   * A comma separated list of keyword ID's. Only include movies that have one of the ID's added as a keyword.
   */
  with_keywords: string

  /** A comma separated list of person ID's. Only include movies that have one of the ID's added as a either a actor or a crew member.
   */
  with_people: string

  /**
   * A filter to limit the results to a specific year (looking at all release dates).
   */
  year: number

  /**
   * Comma separated value of genre ids that you want to exclude from the results.
   */
  without_genres: string

  /**
   * Filter and only include movies that have a runtime that is greater or equal to a value.
   */
  'with_runtime.gte': number

  /**
   * Filter and only include movies that have a runtime that is less than or equal to a value.
   */
  'with_runtime.lte': number

  /**
   * Specify a comma (AND) or pipe (OR) separated value to filter release types by. These release types map to the same values found on the movie release date method.
   * minimum: 1
   * maximum: 6
   */
  with_release_type: number

  /**
   * Specify an ISO 639-1 string to filter results by their original language value.
   */
  with_original_language: string

  /** Exclude items with certain keywords. You can comma and pipe seperate these values to create an 'AND' or 'OR' logic.
   */
  without_keywords: string
}
/* tslint:enable:max-line-length */
