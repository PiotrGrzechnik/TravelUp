import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Form, Input, Card, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { t } from 'src/locales'
import { logInUser } from 'src/modules/user/actions'
import { IUserTypes, IStoreState } from 'src/modules/user/reducers'
import WelcomeScreen from 'src/containers/WelcomeScreen'

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
  const { loading } = useSelector(
    (store: IStoreState) => ({
      loading: store.user.loading,
    }),
    shallowEqual
  )

  const validateMessages = {
    required: '${name}' + t.userNameIsRequired,
  }

  const ruleRequired = { required: true }

  const handleSubmit = async (data: IUserTypes) => {
    dispatch(logInUser(data))
  }

  const handleErrors = (errors: object) => {
    console.log(errors)
  }

  return (
    <WelcomeScreen background={Background} mask="rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)">
      <LogoStyled src={Logo} />
      <FormContainerStyled>
        <Card title="Log in to your account">
          <Form
            name="login-form"
            validateMessages={validateMessages}
            onFinish={handleSubmit}
            onFinishFailed={handleErrors}
          >
            <FormItem name="name" rules={[ruleRequired]}>
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </FormItem>
            <FormItem name="password" rules={[ruleRequired]}>
              <PasswordInput prefix={<LockOutlined />} placeholder="Password" />
            </FormItem>
            <FormItem>
              <ButtonStyled type="primary" htmlType="submit">
                Log in
              </ButtonStyled>
              <span>
                Or <a href="/register">register now!</a>
              </span>
            </FormItem>
          </Form>
        </Card>
      </FormContainerStyled>
    </WelcomeScreen>
  )
}

export default LoginScreen
