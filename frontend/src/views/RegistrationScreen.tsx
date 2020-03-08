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

  .ant-form-item-explain::first-letter {
    text-transform: capitalize;
  }
`
const ButtonStyled = styled(Button)`
  width: 100%;
`

type RegistrationScreenProps = {}

const RegistrationScreen = (props: RegistrationScreenProps) => {
  const validateMessages = {
    required: '${name} is required!',
  }

  const handleSubmit = (data: object) => {
    console.log(data)
  }

  const handleErrors = (data: object) => {
    console.log(data)
  }

  return (
    <WelcomeScreen
      background={Background}
      mask="rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)"
    >
      <LogoStyled src={Logo} />
      <FormContainerStyled>
        <Card title="Create a new account">
          <Form
            name="login-form"
            validateMessages={validateMessages}
            onFinish={handleSubmit}
            onFinishFailed={handleErrors}
          >
            <FormItem name="username" rules={[{ required: true }]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </FormItem>
            <FormItem name="email" rules={[{ required: true }]}>
              <Input
                type="email"
                prefix={<MailOutlined />}
                placeholder="E-mail"
              />
            </FormItem>
            <FormItem name="password" rules={[{ required: true }]}>
              <PasswordInput prefix={<LockOutlined />} placeholder="Password" />
            </FormItem>
            <FormItem name="password-confirm" rules={[{ required: true }]}>
              <PasswordInput
                prefix={<LockOutlined />}
                placeholder="Confirm password"
              />
            </FormItem>
            <FormItem>
              <ButtonStyled type="primary" htmlType="submit">
                Sign up
              </ButtonStyled>
              <span>
                Already registered? <a href="/login">Log in</a>
              </span>
            </FormItem>
          </Form>
        </Card>
      </FormContainerStyled>
    </WelcomeScreen>
  )
}

export default RegistrationScreen
