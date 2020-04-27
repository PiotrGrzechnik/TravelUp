import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { setUserId } from 'src/modules/user/actions'
import { IStoreState } from 'src/modules/user/reducers'
import { getAuthToken } from 'src/utils'

type PrivateRouteProps = {
  children: React.ReactNode
}

const Container = styled.div``

const userRoute = '/user'
const loginRoute = '/login'

const PrivateRoute = (props: PrivateRouteProps) => {
  const { children } = props
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((store: IStoreState) => store.user)

  useEffect(() => {
    const token = getAuthToken()
    if (token) {
      dispatch(setUserId(token.id))
    }

    const { pathname } = history.location
    if (token && pathname !== userRoute) {
      history.push(userRoute)
    } else if (!token && pathname != loginRoute) {
      history.push(loginRoute)
    }
  }, [])

  useEffect(() => {
    if (user.authorized) {
      history.push(userRoute)
    }
  }, [user.authorized])

  return <Container {...props}>{children}</Container>
}

export default PrivateRoute
