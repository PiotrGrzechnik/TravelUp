import axios from 'axios'

import config from 'src/config'

const callApi = axios.create({
  baseURL: config.urlApi,
  timeout: 1000,
  headers: {},
})

export { callApi }
