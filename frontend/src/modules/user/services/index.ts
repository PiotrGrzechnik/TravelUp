import { callApi, parseError } from 'src/utils'

const UserService = {
  logIn: async user => {
    if (!user) return
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

  getUserData: async id => {
    if (!id) return
    const response = await callApi
      .get(`user/${id}`)
      .then(data => data)
      .catch(err => parseError(err))

    return response
  },

  register: async user => {
    if (!user) return
    const response = await callApi
      .post('user/register', user)
      .then(data => data)
      .catch(err => parseError(err))

    return response
  },
}

export default UserService
