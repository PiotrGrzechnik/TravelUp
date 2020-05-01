import React from 'react'
import styled from 'styled-components'
import { Card, Avatar, Descriptions, Button } from 'antd'

const Container = styled.div`
  display: flex;
`

const numberOfDays = (createdAt: string): number => {
  return Math.floor((Date.now() - Date.parse(createdAt)) / 86400000) + 1
}

type StartViewProps = {
  user?: {
    name?: string
    createdAt?: string
  }
}

const StartView: React.FC<StartViewProps> = props => {
  const { user } = props
  const username = user && user.name
  const createdAt = user && user.createdAt

  return (
    <Container>
      <Card title={<span>Hello, {username}!</span>}>
        <span>You have been with us since {numberOfDays(createdAt)} days</span>
      </Card>
    </Container>
  )
}

export default StartView
