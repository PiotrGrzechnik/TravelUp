import { callApi, parseError } from 'src/utils'

const UserService = {
  logIn: async user => {
    if (user.name.includes('@')) {
      user.email = user.name
      delete user.name
    }
    const response = await callApi
      .post('user/login', user)
      .then(data => data)
      .catch(err => parseError(err))

    return response
  },
}

export default UserService
