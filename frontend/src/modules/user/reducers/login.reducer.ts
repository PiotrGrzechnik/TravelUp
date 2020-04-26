import { ActionTypes } from '../actions'
import { IUserLoginTypes } from './'

interface IUserAction {
  type: string
  payload: object
}

const initialState = {
  loading: false,
  message: null,
  error: null,
  data: null,
}

const userLoginReducer = (state: IUserLoginTypes = initialState, action: IUserAction) => {
  switch (action.type) {
    case ActionTypes.LOG_IN_USER:
      return state
    case ActionTypes.LOG_IN_USER_START:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
        authorized: null,
        data: null,
      }
    case ActionTypes.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      }
    case ActionTypes.LOG_IN_USER_FAIL:
      return {
        ...state,
        ...action.payload,
        loading: false,
        message: null,
        authorized: null,
        data: null,
      }
    default:
      return state
  }
}

export { userLoginReducer }
