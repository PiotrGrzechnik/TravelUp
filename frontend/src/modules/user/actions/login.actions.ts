import { ActionTypes } from './actionTypes'
import { IUserLoginTypes } from '../reducers'
import UserService from '../services'
import { setAuthToken } from 'src/utils'

interface ILoginUserAction {
  type: ActionTypes.LOG_IN_USER
}

interface ILoginUserStartAction {
  type: ActionTypes.LOG_IN_USER_START
}

interface ILoginUserSuccessAction {
  type: ActionTypes.LOG_IN_USER_SUCCESS
  payload: IUserLoginTypes
}

interface ILoginUserFailAction {
  type: ActionTypes.LOG_IN_USER_FAIL
  payload: IUserLoginTypes
}

const logInUserStart = (): ILoginUserStartAction => ({
  type: ActionTypes.LOG_IN_USER_START,
})

const logInUserSuccess = (data: IUserLoginTypes): ILoginUserSuccessAction => ({
  type: ActionTypes.LOG_IN_USER_SUCCESS,
  payload: data,
})

const logInUserFail = (error: IUserLoginTypes): ILoginUserFailAction => ({
  type: ActionTypes.LOG_IN_USER_FAIL,
  payload: error,
})

const logInUser = (data: IUserLoginTypes) => {
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

export { ILoginUserAction, ILoginUserStartAction, ILoginUserSuccessAction, ILoginUserFailAction }
export { logInUserStart, logInUserSuccess, logInUserFail, logInUser }
