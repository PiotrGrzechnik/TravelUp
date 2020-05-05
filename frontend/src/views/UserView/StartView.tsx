import React from 'react'
import styled from 'styled-components'
import { Card, Avatar, Descriptions, Button } from 'antd'
import { t } from 'src/locales'

const Container = styled.div`
  display: flex;
`
const CardMainStyled = styled(Card)`
  min-height: 300px;
`
const CardMainTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`

const numberOfDays = (createdAt: string): number | null => {
  const days = Math.floor((Date.now() - Date.parse(createdAt)) / 86400000) + 1
  return isNaN(days) ? null : days
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
  const daysFrom = numberOfDays(createdAt)

  return (
    <Container>
      <CardMainStyled title={<CardMainTitle>Hello, {username}!</CardMainTitle>}>
        {createdAt && daysFrom && <p>{t.formatString(t.userBeenSince, { days: daysFrom })}</p>}
      </CardMainStyled>
    </Container>
  )
}

export default StartView
