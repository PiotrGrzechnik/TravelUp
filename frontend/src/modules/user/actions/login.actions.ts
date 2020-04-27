import { ActionTypes } from './actionTypes'
import { IUserTypes } from '../reducers'
import UserService from '../services'
import { setAuthToken } from 'src/utils'

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

export { ILoginUserStartAction, ILoginUserSuccessAction, ILoginUserFailAction }
export { logInUserStart, logInUserSuccess, logInUserFail, logInUser }
