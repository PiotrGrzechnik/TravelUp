import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUserData } from 'src/modules/user/actions'
import { IStoreState } from 'src/modules/user/reducers'
import { getAuthToken } from 'src/utils'

type UserViewProps = {}

const UserView: React.FC<UserViewProps> = props => {
  const dispatch = useDispatch()
  const user = useSelector((store: IStoreState) => store.user)
  const { data } = user

  console.log(user)

  useEffect(() => {
    let userId = data && data.id

    if (!userId) {
      const token = getAuthToken()
      userId = token ? token.id : null
    }

    userId && dispatch(getUserData(userId))
  }, [])

  return <div>USER VIEW {data && data.id}</div>
}

export default UserView
