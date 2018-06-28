import development from './config.development'
import production from './config.production'

let config: { API_URL: string; AXIOS_DEFAULT_PARAMS?: { api_key?: string } }

switch (process.env.NODE_ENV) {
  case 'production':
    config = production
    break
  case 'development':
    config = development
    break
  default:
    config = { API_URL: '' }
    throw new Error(`No configuration file corresponding to NODE_ENV=${process.env.NODE_ENV}.`)
}

export default config
