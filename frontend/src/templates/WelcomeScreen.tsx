import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-height: 630px;
  background-color: ${({ theme }) => theme.colors.primaryAll[1]};
  background: linear-gradient(
      ${({ mask }) => (mask ? mask : 'rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)')}
    )
    ${({ background }) => background && `, url(${background})`};
  background-size: cover;
`

type WelcomeScreenProps = {
  children: React.ReactNode
  background?: string
  mask?: string
}

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const { children } = props

  return <Container {...props}>{children}</Container>
}

export default WelcomeScreen
