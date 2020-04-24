import { Action, ActionTypes } from '../actions'

interface IUserStore {
  name: string
}

const initialState = {
  name: null,
}

const userLoginReducer = (state: IUserStore = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOG_IN_USER:
      return action.payload
    default:
      return state
  }
}

export { userLoginReducer }
