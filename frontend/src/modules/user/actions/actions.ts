import { Dispatch } from 'redux'
import { ActionTypes } from './actionTypes'
import { IUserLoginTypes } from '../reducers'

export interface UserLoginAction {
  type: ActionTypes.LOG_IN_USER
  payload: IUserLoginTypes
}

export const logInUser = (data: IUserLoginTypes): UserLoginAction => {
  return {
    type: ActionTypes.LOG_IN_USER,
    payload: data,
  }
}
