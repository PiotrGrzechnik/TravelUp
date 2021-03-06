import Cookies from 'js-cookie'

const setAuthToken = tokens => {
  Cookies.set('authToken', tokens.accessToken, { expires: 5 })
}

const getAuthToken = () => {
  const jwt = Cookies.get('authToken')
  let token = null

  try {
    if (jwt) {
      const base64Url = jwt.split('.')[1]
      if (!base64Url) return null
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      token = JSON.parse(window.atob(base64))
    }
  } catch (error) {
    console.log(error)
  }

  return token
}

const removeAuthToken = () => {
  Cookies.remove('authToken')
}

export { setAuthToken, getAuthToken, removeAuthToken }
