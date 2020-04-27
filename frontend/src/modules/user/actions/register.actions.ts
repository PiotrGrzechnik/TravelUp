import { ActionTypes } from './actionTypes'
import { IUserTypes } from '../reducers'
import UserService from '../services'

interface IUserRegisterTypes {
  name: string
  email: string
  password: string
}

interface IRegisterUserStartAction {
  type: ActionTypes.REGISTER_USER_START
}

interface IRegisterUserSuccessAction {
  type: ActionTypes.REGISTER_USER_SUCCESS
  payload: IUserTypes
}

interface IRegisterUserFailAction {
  type: ActionTypes.REGISTER_USER_FAIL
  payload: IUserTypes
}

const registerUserStart = (): IRegisterUserStartAction => ({
  type: ActionTypes.REGISTER_USER_START,
})

const registerUserSuccess = (data: IUserTypes): IRegisterUserSuccessAction => ({
  type: ActionTypes.REGISTER_USER_SUCCESS,
  payload: data,
})

const registerUserFail = (error: IUserTypes): IRegisterUserFailAction => ({
  type: ActionTypes.REGISTER_USER_FAIL,
  payload: error,
})

const registerUser = (data: IUserRegisterTypes) => {
  return async dispatch => {
    dispatch(registerUserStart())

    const response = await UserService.register(data)

    if (response.statusText === 'Created') {
      dispatch(registerUserSuccess(response.data))
    } else {
      dispatch(registerUserFail(response.data || response))
    }
  }
}

export {
  IUserRegisterTypes,
  IRegisterUserStartAction,
  IRegisterUserSuccessAction,
  IRegisterUserFailAction,
}
export { registerUserStart, registerUserSuccess, registerUserFail, registerUser }
