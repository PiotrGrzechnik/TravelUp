import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { notification } from 'antd'

import { IStoreState } from 'src/modules/user/reducers'

type NotificationsProps = {
  children: React.ReactNode
}

const Notifications = (props: NotificationsProps) => {
  const { message, error } = useSelector(
    (store: IStoreState) => ({
      message: store.user.message,
      error: store.user.error,
    }),
    shallowEqual
  )

  useEffect(() => {
    error &&
      notification.error({
        message: error,
      })
  }, [error])

  useEffect(() => {
    message &&
      notification.success({
        message: message,
      })
  }, [message])

  const { children } = props

  return <div {...props}>{children}</div>
}

export default Notifications
