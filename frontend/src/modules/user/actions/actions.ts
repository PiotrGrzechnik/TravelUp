import { Dispatch } from 'redux'
import { ActionTypes } from './actionTypes'
import { IUserLoginTypes } from '../reducers'
import UserService from '../services'

export interface ILoginUserAction {
  type: ActionTypes.LOG_IN_USER
  payload: IUserLoginTypes
}

export interface ILoginUserStartAction {
  type: ActionTypes.LOG_IN_USER_START
  payload: IUserLoginTypes
}

export interface ILoginUserSuccessAction {
  type: ActionTypes.LOG_IN_USER_SUCCESS
  payload: IUserLoginTypes
}

export interface ILoginUserFailAction {
  type: ActionTypes.LOG_IN_USER_FAIL
  payload: IUserLoginTypes
}

// Login User
export const logInUserStart = (data: IUserLoginTypes): ILoginUserStartAction => ({
  type: ActionTypes.LOG_IN_USER_START,
  payload: data,
})

export const logInUserSuccess = (data: IUserLoginTypes): ILoginUserSuccessAction => ({
  type: ActionTypes.LOG_IN_USER_SUCCESS,
  payload: data,
})

export const logInUserFail = (error: IUserLoginTypes): ILoginUserFailAction => ({
  type: ActionTypes.LOG_IN_USER_FAIL,
  payload: error,
})

export const logInUser = (data: IUserLoginTypes) => {
  return dispatch => {
    const response = UserService.logIn(data)
  }
}
