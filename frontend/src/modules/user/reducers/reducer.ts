import { ActionTypes } from '../actions'
import { IUserTypes } from '.'
import { initialState } from '.'

interface IUserAction {
  type: string
  payload: any
}

const userReducer = (state: IUserTypes = initialState, action: IUserAction) => {
  const { payload } = action

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
        ...payload,
        authorized: true,
        loading: false,
        error: null,
      }
    case ActionTypes.LOG_IN_USER_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
        message: null,
        authorized: false,
        data: null,
      }
    case ActionTypes.LOG_OUT_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        authorized: false,
        data: null,
      }
    case ActionTypes.REGISTER_USER_START:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
        authorized: null,
        data: null,
      }
    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        error: null,
      }
    case ActionTypes.REGISTER_USER_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
        message: null,
        authorized: null,
        data: null,
      }
    case ActionTypes.SET_USER_ID:
      return {
        ...state,
        authorized: true,
        data: {
          id: payload,
        },
      }
    case ActionTypes.GET_USER_DATA_START:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
        data: null,
      }
    case ActionTypes.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        data: {
          ...payload,
        },
        loading: false,
        error: null,
      }
    case ActionTypes.GET_USER_DATA_FAIL:
      return {
        ...state,
        error: payload.error,
        loading: false,
        message: null,
        authorized: null,
        data: null,
      }
    default:
      return state
  }
}

export { userReducer }
