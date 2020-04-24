import { callApi } from 'src/utils'
import { t } from 'src/locale/'

const UserService = {
  logIn: data => {
    const response = callApi
      .get('user/1')
      .then(data => {
        console.log('DATA:', data)
      })
      .catch(err => {
        if (!err.status) {
          const error = err.toJSON() ? err.toJSON().message : t.userLoginErrorNetwork
          return {
            error,
          }
        }
      })

    return response
  },
}

export default UserService
