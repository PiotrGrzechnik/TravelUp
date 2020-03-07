import React from 'react'
import styled from 'styled-components'
import { Form, Input, Card } from 'antd'

import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'

const FormItem = Form.Item

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryAll[1]};
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
      <FormContainerStyled>
        <CardStyled title="Please register:">
          <Form>
            <FormItem>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </FormItem>
            <FormItem>
              <Input prefix={<MailOutlined />} placeholder="E-mail" />
            </FormItem>
            <FormItem>
              <Input prefix={<LockOutlined />} placeholder="Password" />
            </FormItem>
            <FormItem>
              <Input prefix={<LockOutlined />} placeholder="Confirm password" />
            </FormItem>
          </Form>
        </CardStyled>
      </FormContainerStyled>
    </ContainerStyled>
  )
}

export default RegistrationScreen
