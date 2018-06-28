import axios from 'axios'

import config from './'

axios.defaults.baseURL = config.API_URL
axios.defaults.params = config.AXIOS_DEFAULT_PARAMS
axios.defaults.headers.common['Accept-Language'] = navigator.language.substring(0, 2)
