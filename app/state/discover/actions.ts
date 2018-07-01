import actionCreatorFactory from 'typescript-fsa'

const discover = actionCreatorFactory('discover')

export default {
  fetchMovies: discover.async<
    Partial<DiscoverMoviesParams>,
    IndexSuccessResponse<Movie>,
    FailureResponse
  >('FETCH_MOVIES'),
}
