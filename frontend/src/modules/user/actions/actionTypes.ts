import { ILoginUserAction } from './login.actions'

enum ActionTypes {
  LOG_IN_USER = 'LOG_IN_USER',
  LOG_IN_USER_START = 'LOG_IN_USER_START',
  LOG_IN_USER_SUCCESS = 'LOG_IN_USER_SUCCESS',
  LOG_IN_USER_FAIL = 'LOG_IN_USER_FAIL',
}

type Action = ILoginUserAction

export { ActionTypes, Action }
