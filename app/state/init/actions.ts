import actionCreatorFactory from 'typescript-fsa'

const init = actionCreatorFactory('init')

export default {
  fetchStartupData: init.async<{}, ConfigurationResponse, FailureResponse>('FETCH_STARTUP_DATA'),
}
