import React from 'react'
import { Card } from 'antd'

type StartViewProps = {
  user?: {
    name?: string
  }
}

const StartView: React.FC<StartViewProps> = props => {
  const { user } = props
  const username = user && user.name
  return <div>Welcome {username}!</div>
}

export default StartView
