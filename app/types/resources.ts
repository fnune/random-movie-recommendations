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
