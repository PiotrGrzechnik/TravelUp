import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Card, Avatar, Descriptions, Button, Form, Input } from 'antd'

const avatarMale = require('src/images/avatars/male-1.png')
const avatarFemale = require('src/images/avatars/female-1.png')
const avatarAstro = require('src/images/avatars/astronaut.png')

const DescItem = Descriptions.Item

const avatars = {
  male: avatarMale,
  female: avatarFemale,
  undefined: avatarAstro,
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const CardMainStyled = styled(Card)`
  flex: 0;
`
const AvatarStyled = styled.img`
  display: block;
  height: 140px;
  width: 140px;
  margin: auto;
`
const CardContent = styled(Card)`
  flex: 1;
  min-height: 400px;
`
const CardContentRow = styled.p`
  text-align: center;
  min-width: 200px;
`
const DescriptionColumn = styled.div`
  min-width: 400px;
`
const DescItemStyled = styled(DescItem)``

type UserProfileProps = {
  user?: {
    id?: number
    name?: string
    email?: string
    gender?: string
    country?: string
  }
}

const UserProfile: React.FC<UserProfileProps> = props => {
  const [isEdit, setIsEdit] = useState(false)
  const { user } = props
  const avatar = avatars[user.gender]

  const initiaValues = {
    country: user.country,
    gender: user.gender,
  }

  const ruleRequired = { required: true }

  const handleSubmit = data => {
    console.log(data)
    setIsEdit(false)
  }

  return (
    <>
      {user && (
        <Container>
          <CardMainStyled title={<AvatarStyled src={avatar} />}>
            <CardContentRow>{user.name}</CardContentRow>
            <CardContentRow>{user.email}</CardContentRow>
          </CardMainStyled>
          <CardContent
            title={
              <div>
                User Info {!isEdit && <Button onClick={() => setIsEdit(true)}>Edit</Button>}
              </div>
            }
          >
            {isEdit ? (
              <Form onFinish={handleSubmit} initialValues={initiaValues}>
                <Form.Item name="country" label="Country" rules={[ruleRequired]}>
                  <Input />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[ruleRequired]}>
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="ghost" onClick={() => setIsEdit(false)}>
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            ) : (
              <Descriptions>
                <DescriptionColumn>
                  <DescItemStyled label="Country">Country</DescItemStyled>
                  <DescItemStyled label="Gender">Gender</DescItemStyled>
                </DescriptionColumn>
              </Descriptions>
            )}
          </CardContent>
        </Container>
      )}
    </>
  )
}

export default UserProfile
