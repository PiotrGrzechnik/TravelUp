import { ActionTypes } from './actionTypes'

interface ISetUserIdAction {
  type: ActionTypes.SET_USER_ID
  payload: number
}

const setUserId = (id: number): ISetUserIdAction => ({
  type: ActionTypes.SET_USER_ID,
  payload: id,
})

export { ISetUserIdAction }
export { setUserId }
