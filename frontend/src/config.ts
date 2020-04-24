const URL_API = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'

const config = {
  urlApi: URL_API,
  lang: 'en',
}

export default config
