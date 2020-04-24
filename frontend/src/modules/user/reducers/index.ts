import { combineReducers } from 'redux'
import { userLoginReducer } from './reducer'

interface IUserLoginTypes {
  name: string
  password?: string
}

interface IStoreState {
  user: IUserLoginTypes
}

const reducers = combineReducers<IStoreState>({
  user: userLoginReducer,
})

export { IUserLoginTypes, IStoreState }
export { reducers }
