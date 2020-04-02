import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Form, Input, Card, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'

import { logInUser } from 'src/modules/user/actions'
import { UserLoginTypes, StoreState } from 'src/modules/user/reducers'

import WelcomeScreen from 'src/templates/WelcomeScreen'
const Logo = require('src/images/logo.png')
const Background = require('src/images/login-bg.jpg')

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

type LoginScreenProps = {}

const LoginScreen = (props: LoginScreenProps) => {
  const dispatch = useDispatch()
  const user = useSelector((store: StoreState) => store.user)

  const validateMessages = {
    required: '${name} is required!',
  }

  const handleSubmit = (data: UserLoginTypes) => {
    console.log(data)
    // dispatch(logInUser(data))
  }

  const handleErrors = (errors: object) => {
    console.log(errors)
  }
  return (
    <WelcomeScreen
      background={Background}
      mask="rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)"
    >
      <LogoStyled src={Logo} />
      <FormContainerStyled>
        <Card title="Log in to your account">
          <Form
            name="login-form"
            validateMessages={validateMessages}
            onFinish={handleSubmit}
            onFinishFailed={handleErrors}
          >
            <FormItem name="username" rules={[{ required: true }]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </FormItem>
            <FormItem name="password" rules={[{ required: true }]}>
              <PasswordInput prefix={<LockOutlined />} placeholder="Password" />
            </FormItem>
            <FormItem>
              <ButtonStyled type="primary" htmlType="submit">
                Log in
              </ButtonStyled>
              <span>
                Or <a href="/registration">register now!</a>
              </span>
            </FormItem>
          </Form>
        </Card>
      </FormContainerStyled>
    </WelcomeScreen>
  )
}

export default LoginScreen
