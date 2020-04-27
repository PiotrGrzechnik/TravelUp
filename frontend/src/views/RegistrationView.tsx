import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Form, Input, Card, Button, notification } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { t } from 'src/locales'
import { IStoreState } from 'src/modules/user/reducers'
import { registerUser, IUserRegisterTypes } from 'src/modules/user/actions'
import WelcomeScreen from 'src/containers/WelcomeScreen'

const Logo = require('src/images/logo.png')
const Background = require('src/images/registration-bg.jpg')

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
  const history = useHistory()
  const dispatch = useDispatch()
  const { message, error, loading } = useSelector(
    (store: IStoreState) => ({
      message: store.user.message,
      error: store.user.error,
      loading: store.user.loading,
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
    if (!message) return

    notification.success({
      message: message,
    })

    setTimeout(() => {
      history.push('/login')
    }, 1000)
  }, [message])

  const validateMessages = {
    required: '${name}' + t.userNameIsRequired,
  }

  const handleSubmit = (data: IUserRegisterTypes) => {
    data && delete data['password-confirm']
    dispatch(registerUser(data))
  }

  const handleErrors = (data: object) => {
    console.log(data)
  }

  return (
    <WelcomeScreen background={Background} mask="rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)">
      <LogoStyled src={Logo} />
      <FormContainerStyled>
        <Card title={t.registrationFormTitle}>
          <Form
            name="login-form"
            validateMessages={validateMessages}
            onFinish={handleSubmit}
            onFinishFailed={handleErrors}
          >
            <FormItem name="name" rules={[{ required: true }]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </FormItem>
            <FormItem name="email" rules={[{ required: true }]}>
              <Input type="email" prefix={<MailOutlined />} placeholder="E-mail" />
            </FormItem>
            <FormItem name="password" rules={[{ required: true }]}>
              <PasswordInput prefix={<LockOutlined />} placeholder="Password" />
            </FormItem>
            <FormItem
              name="password-confirm"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: t.userConfirmYourPassword,
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(t.userPasswordConfirmDifferent)
                  },
                }),
              ]}
            >
              <PasswordInput prefix={<LockOutlined />} placeholder="Confirm password" />
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
