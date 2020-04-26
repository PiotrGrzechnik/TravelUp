import { combineReducers } from 'redux'
import { userLoginReducer } from './login.reducer'

interface IUserLoginTypes {
  loading: boolean
  message: string
  error: string
  data: {
    id: number
    email: string
    name: string
  }
}

interface IStoreState {
  user: IUserLoginTypes
}

const reducers = combineReducers<IStoreState>({
  user: userLoginReducer,
})

export { IUserLoginTypes, IStoreState }
export { reducers }
