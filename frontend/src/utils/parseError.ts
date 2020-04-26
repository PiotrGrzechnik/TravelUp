import { t } from 'src/locales'

const parseError = err => {
  if (!err.response) {
    const error = err.toJSON() ? err.toJSON().message : t.userLoginErrorNetwork
    return {
      error,
    }
  } else {
    return err.response
  }
}

export { parseError }
