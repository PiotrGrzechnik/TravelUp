import { combineReducers } from 'redux'
import { userLoginReducer } from './reducer'

export interface UserLoginTypes {
  name: string
}

export interface StoreState {
  user: UserLoginTypes
}

export const reducers = combineReducers<StoreState>({
  user: userLoginReducer,
})
