import { combineReducers } from 'redux'

import { userReducer } from './reducer'

interface IUserTypes {
  authorized: boolean
  loading: boolean
  message: string
  error: string
  data: {
    id?: number
    email?: string
    name?: string
  }
}

interface IStoreState {
  user: IUserTypes
}

const initialState = {
  authorized: false,
  loading: false,
  message: null,
  error: null,
  data: null,
}

const reducers = combineReducers<IStoreState>({
  user: userReducer,
})

export { IUserTypes, IStoreState }
export { reducers, initialState }
