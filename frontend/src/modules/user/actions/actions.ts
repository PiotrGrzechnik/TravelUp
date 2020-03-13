import { Dispatch } from 'redux'
import { ActionTypes } from './actionTypes'
import { UserLoginTypes } from '../reducers'

export interface UserLoginAction {
  type: ActionTypes.LOG_IN_USER
  payload: UserLoginTypes
}

export const logInUser = (data: UserLoginTypes): UserLoginAction => {
  return {
    type: ActionTypes.LOG_IN_USER,
    payload: data,
  }
}
