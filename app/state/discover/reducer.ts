import { AnyAction, isType } from 'typescript-fsa'

import { none, some } from 'fp-ts/lib/Option'
import actions from './actions'

export const initialState = {
  movies: [],
  errors: [],
  loading: false,
  meta: none,
}

export default function discover(
  state: DiscoverState.Discover = initialState,
  action: AnyAction,
): DiscoverState.Discover {
  if (isType(action, actions.fetchMovies.started)) {
    return {
      ...state,
      errors: [],
      loading: true,
    }
  }

  if (isType(action, actions.fetchMovies.done)) {
    return {
      ...state,
      movies: action.payload.result.results,
      meta: some({
        page: action.payload.result.page,
        totalPages: action.payload.result.total_pages,
        totalResults: action.payload.result.total_results,
      }),
      errors: [],
      loading: false,
    }
  }

  if (isType(action, actions.fetchMovies.failed)) {
    return {
      ...state,
      errors: [...state.errors, action.payload.error],
      loading: false,
    }
  }

  return state
}
