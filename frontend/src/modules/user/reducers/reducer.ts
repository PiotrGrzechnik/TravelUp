import { ActionTypes } from '../actions'
import { IUserTypes } from '.'
import { initialState } from '.'

interface IUserAction {
  type: string
  payload: any
}

const userReducer = (state: IUserTypes = initialState, action: IUserAction) => {
  switch (action.type) {
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
    case ActionTypes.SET_USER_ID:
      return {
        ...state,
        data: {
          id: action.payload,
        },
      }
    default:
      return state
  }
}

export { userReducer }
