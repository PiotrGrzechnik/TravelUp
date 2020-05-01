import { ActionTypes } from './actionTypes'
import { IUserTypes } from '../reducers'
import UserService from '../services'
import { setAuthToken, removeAuthToken, getAuthToken } from 'src/utils'

interface ILoginUserStartAction {
  type: ActionTypes.LOG_IN_USER_START
}

interface ILoginUserSuccessAction {
  type: ActionTypes.LOG_IN_USER_SUCCESS
  payload: IUserTypes
}

interface ILoginUserFailAction {
  type: ActionTypes.LOG_IN_USER_FAIL
  payload: IUserTypes
}

interface ILogOutUserSuccess {
  type: ActionTypes.LOG_OUT_USER_SUCCESS
  payload: IUserTypes
}

const logInUserStart = (): ILoginUserStartAction => ({
  type: ActionTypes.LOG_IN_USER_START,
})

const logInUserSuccess = (data: IUserTypes): ILoginUserSuccessAction => ({
  type: ActionTypes.LOG_IN_USER_SUCCESS,
  payload: data,
})

const logInUserFail = (error: IUserTypes): ILoginUserFailAction => ({
  type: ActionTypes.LOG_IN_USER_FAIL,
  payload: error,
})

const logInUser = (data: IUserTypes) => {
  return async dispatch => {
    dispatch(logInUserStart())

    const response = await UserService.logIn(data)
    if (response.statusText === 'OK') {
      dispatch(logInUserSuccess(response.data))
      setAuthToken(response.data.tokens)
    } else {
      dispatch(logInUserFail(response.data || response))
    }
  }
}

const logOutUserSuccess = (message): ILogOutUserSuccess => ({
  type: ActionTypes.LOG_OUT_USER_SUCCESS,
  payload: message,
})

const logOutUser = () => {
  return dispatch => {
    removeAuthToken()
    const token = getAuthToken()

    if (!token) {
      const message = 'You have been logged out successfully!'
      dispatch(logOutUserSuccess({ message }))
    }
  }
}

export { logInUser, logOutUser }
