import * as jsc from 'jsverify'
import moment = require('moment')

export function make<T>(generator: jsc.Arbitrary<T>): T {
  const sampler = jsc.sampler(generator)
  return sampler(1)
}

export const nullGen: jsc.Arbitrary<null> = jsc.constant(null)

export function nullable<T>(gen: jsc.Arbitrary<T>): jsc.Arbitrary<T | null> {
  return jsc.elements([make(gen), null])
}

export const isoDateString = jsc.datetime.smap(
  dt => moment(dt).format('YYYY-MM-DD'),
  dtstr => moment(dtstr).toDate(),
)

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
