import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IStoreState } from 'src/modules/user/reducers'

type UserViewProps = {}

const UserView: React.FC<UserViewProps> = props => {
  const user = useSelector((store: IStoreState) => store.user)

  return <div>USER VIEW {user.data && user.data.id}</div>
}

export default UserView
