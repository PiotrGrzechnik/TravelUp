import { combineReducers } from 'redux'
import { userLoginReducer } from './reducer'

export interface IUserLoginTypes {
  name: string
  password?: string
}

export interface IStoreState {
  user: IUserLoginTypes
}

export const reducers = combineReducers<IStoreState>({
  user: userLoginReducer,
})
