import { Action, ActionTypes } from '../actions'
import { UserLoginTypes } from './index'

const initialState = {
  name: null,
}

export const userLoginReducer = (
  state: UserLoginTypes = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.LOG_IN_USER:
      return action.payload
    default:
      return state
  }
}
