import axios from 'axios'

import configuration from '~../config/config'

export const config = () => axios.get(`${configuration.API_URL}configuration`)
