import { Dispatch } from 'redux'
import { ActionTypes } from './actionTypes'
import { IUserLoginTypes } from '../reducers'
import UserService from '../services'

interface ILoginUserAction {
  type: ActionTypes.LOG_IN_USER
  payload: IUserLoginTypes
}

interface ILoginUserStartAction {
  type: ActionTypes.LOG_IN_USER_START
  payload: IUserLoginTypes
}

interface ILoginUserSuccessAction {
  type: ActionTypes.LOG_IN_USER_SUCCESS
  payload: IUserLoginTypes
}

interface ILoginUserFailAction {
  type: ActionTypes.LOG_IN_USER_FAIL
  payload: IUserLoginTypes
}

const logInUserStart = (data: IUserLoginTypes): ILoginUserStartAction => ({
  type: ActionTypes.LOG_IN_USER_START,
  payload: data,
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
  return dispatch => {
    const response = UserService.logIn(data)
    console.log(response)
  }
}

export { ILoginUserAction, ILoginUserStartAction, ILoginUserSuccessAction, ILoginUserFailAction }
export { logInUserStart, logInUserSuccess, logInUserFail, logInUser }
