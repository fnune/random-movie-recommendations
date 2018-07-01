import axios from 'axios'

import configuration from '~../config/config'

export const discover = (params: Partial<DiscoverMoviesParams>) =>
  axios.get(`${configuration.API_URL}discover/movie`, { params })
