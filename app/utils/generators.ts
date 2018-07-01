import * as jsc from 'jsverify'
import moment = require('moment')

export function make<T>(generator: jsc.Arbitrary<T>): T {
  const sampler: any = jsc.sampler(generator)
  return sampler(1)[0]
}

export const nullGen: jsc.Arbitrary<null> = jsc.constant(null)

export function nullable<T>(gen: jsc.Arbitrary<T>): jsc.Arbitrary<T | null> {
  return jsc.elements([make(gen), null])
}

export const isoDateString = jsc.datetime.smap(
  dt => moment(dt).format('YYYY-MM-DD'),
  dtstr => moment(dtstr).toDate(),
)

export const failureResponse: jsc.Arbitrary<FailureResponse> = jsc.record({
  status_code: jsc.integer,
  status_message: jsc.asciinestring,
})

export const movie: jsc.Arbitrary<Movie> = jsc.record({
  adult: jsc.bool,
  backdrop_path: nullable(jsc.asciinestring),
  genre_ids: jsc.array(jsc.integer),
  id: jsc.integer,
  original_language: jsc.asciinestring,
  original_title: jsc.asciinestring,
  overview: jsc.asciinestring,
  popularity: jsc.number,
  poster_path: nullable(jsc.asciinestring),
  release_date: isoDateString,
  title: jsc.asciinestring,
  video: jsc.bool,
  vote_average: jsc.number,
  vote_count: jsc.number,
})

export const configState: jsc.Arbitrary<ConfigState.Config> = jsc.record({
  images: jsc.record({
    baseUrl: nullable(jsc.asciinestring),
    secureBaseUrl: nullable(jsc.asciinestring),
  }),
  loading: jsc.bool,
  errors: jsc.array(failureResponse),
})

export const appState: jsc.Arbitrary<AppState> = jsc.record({
  config: configState,
})
