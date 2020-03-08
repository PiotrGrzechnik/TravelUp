import React from 'react'
import styled from 'styled-components'
import { Form, Input, Card, Button } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'

import WelcomeScreen from '../templates/WelcomeScreen'

const Logo = require('../images/logo.png')
const Background = require('../images/registration-bg.jpg')

const FormItem = Form.Item
const PasswordInput = Input.Password

const LogoStyled = styled.img`
  && {
    margin-bottom: 60px;
  }
`
const FormContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`
const CardStyled = styled(Card)``

type RegistrationScreenProps = {}

const RegistrationScreen = (props: RegistrationScreenProps) => {
  const {} = props
  // const handleSubmit = (data: object) => {
  //   console.log(data)
  // }
  return (
    <WelcomeScreen
      background={Background}
      mask="rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)"
    >
      <LogoStyled src={Logo} />
      <FormContainerStyled>
        <CardStyled title="Registration form">
          <Form>
            <FormItem>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </FormItem>
            <FormItem>
              <Input
                type="email"
                prefix={<MailOutlined />}
                placeholder="E-mail"
              />
            </FormItem>
            <FormItem>
              <PasswordInput prefix={<LockOutlined />} placeholder="Password" />
            </FormItem>
            <FormItem>
              <PasswordInput
                prefix={<LockOutlined />}
                placeholder="Confirm password"
              />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </FormItem>
          </Form>
        </CardStyled>
      </FormContainerStyled>
    </WelcomeScreen>
  )
}

export default RegistrationScreen
