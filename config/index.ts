/* tslint:disable:no-var-requires */
let config: { API_URL: string; AXIOS_DEFAULT_PARAMS?: { api_key?: string } } = { API_URL: '' }

if (process.env.NODE_ENV === 'production') {
  config = require('./config.production')
}

if (process.env.NODE_ENV === 'development') {
  config = require('./config.development')
}

if (process.env.NODE_ENV === 'test') {
  config = require('./config.test')
}

export default config
