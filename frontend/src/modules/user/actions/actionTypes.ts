import { ILoginUserAction } from './actions'

export enum ActionTypes {
  LOG_IN_USER = 'LOG_IN_USER',
  LOG_IN_USER_START = 'LOG_IN_USER_START',
  LOG_IN_USER_SUCCESS = 'LOG_IN_USER_SUCCESS',
  LOG_IN_USER_FAIL = 'LOG_IN_USER_FAIL',
}

export type Action = ILoginUserAction
