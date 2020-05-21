import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { setUserId } from 'src/modules/user/actions'
import { IStoreState } from 'src/modules/user/reducers'
import { getAuthToken } from 'src/utils'

const Container = styled.div``

const userRoute = '/user'
const loginRoute = '/login'

type PrivateRouteProps = {
  children: React.ReactNode
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { children } = props
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = history.location
  const { authorized } = useSelector(
    (store: IStoreState) => ({
      authorized: store.user.authorized,
    }),
    shallowEqual
  )

  const redirectUser = (isAuthorized: boolean) => {
    if (isAuthorized && pathname !== userRoute) {
      history.push(userRoute)
    } else if (!isAuthorized && pathname !== loginRoute) {
      history.push(loginRoute)
    }
  }

  useEffect(() => {
    const token = getAuthToken()

    token && dispatch(setUserId(token.id))
    redirectUser(!!token)
  }, [])

  useEffect(() => {
    redirectUser(authorized)
  }, [authorized])

  return <Container {...props}>{children}</Container>
}

export default PrivateRoute
