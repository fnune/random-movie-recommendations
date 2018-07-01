interface Movie {
  adult: boolean
  backdrop_path: Uri | null
  genre_ids: GenreId[]
  id: Id
  original_language: LanguageCode
  original_title: string
  overview: string
  popularity: number
  poster_path: Uri | null
  release_date: IsoDate
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

/**
 * The following were fetched from the following URL:
 * https://developers.themoviedb.org/3/configuration/get-api-configuration
 *
 * Considering their dynamic nature, these types might become obsolete.
 */
declare namespace ImageSizes {
  type Backdrop = 'w300' | 'w780' | 'w1280' | 'original'
  type Logo = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original'
  type Poster = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'
  type Profile = 'w45' | 'w185' | 'h632' | 'original'
  type Still = 'w92' | 'w185' | 'w300' | 'original'
}
