import React from 'react'
import styled from 'styled-components'
import { Typography, Form, Input, Card, Button } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'

const Logo = require('../images/logo.png')
const Bg = require('../images/registration-bg.jpg')

const FormItem = Form.Item
const PasswordInput = Input.Password

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryAll[1]};
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url(${Bg});
`
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
    <ContainerStyled>
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
    </ContainerStyled>
  )
}

export default RegistrationScreen
