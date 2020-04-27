import { ActionTypes } from './actionTypes'
import { IUserTypes } from '../reducers'
import UserService from '../services'

import { t } from 'src/locales'

interface IGetUserDataStartAction {
  type: ActionTypes.GET_USER_DATA_START
}

interface IGetUserDataSuccessAction {
  type: ActionTypes.GET_USER_DATA_SUCCESS
  payload: IUserTypes
}

interface IGetUserDataFailAction {
  type: ActionTypes.GET_USER_DATA_FAIL
  payload: IUserTypes
}

const getUserDataStart = (): IGetUserDataStartAction => ({
  type: ActionTypes.GET_USER_DATA_START,
})

const getUserDataSuccess = (data: IUserTypes): IGetUserDataSuccessAction => ({
  type: ActionTypes.GET_USER_DATA_SUCCESS,
  payload: data,
})

const getUserDataFail = (error: IUserTypes): IGetUserDataFailAction => ({
  type: ActionTypes.GET_USER_DATA_FAIL,
  payload: error,
})

const getUserData = (id: number) => {
  return async dispatch => {
    if (!id) {
      const error = {
        authorized: false,
        loading: false,
        message: null,
        error: t.userDataIdNotProvided,
        data: null,
      }

      dispatch(getUserDataFail(error))
      return
    }

    dispatch(getUserDataStart())

    const response = await UserService.getUserData(id)
    if (response.statusText === 'OK') {
      dispatch(getUserDataSuccess(response.data))
    } else {
      dispatch(getUserDataFail(response.data || response))
    }
  }
}

export { IGetUserDataStartAction, IGetUserDataSuccessAction, IGetUserDataFailAction }
export { getUserDataStart, getUserDataSuccess, getUserDataFail, getUserData }
