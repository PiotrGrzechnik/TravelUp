import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Card, Avatar, Descriptions, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const Container = styled.div`
  display: flex;
`
const AvatarStyled = styled(Avatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  margin: auto;

  && {
    font-size: 44px;
  }
`
const CardContent = styled(Card)`
  min-height: 400px;
`

type UserProfileProps = {
  user?: {
    id?: number
    name?: string
    email?: string
  }
}

const UserProfile: React.FC<UserProfileProps> = props => {
  const [isEdit, setIsEdit] = useState(false)
  const { user } = props

  return (
    <>
      {user && (
        <Container>
          <Card title={<AvatarStyled size="large" icon={<UserOutlined />} />}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </Card>
          <CardContent
            title={
              <div>
                User Info {!isEdit && <Button onClick={() => setIsEdit(true)}>Edit</Button>}
              </div>
            }
          >
            {isEdit ? (
              <div>Edit page</div>
            ) : (
              <Descriptions>
                <Descriptions.Item label="UserName">{user.name}</Descriptions.Item>
                <Descriptions.Item label="E-mail">{user.email}</Descriptions.Item>
              </Descriptions>
            )}
          </CardContent>
        </Container>
      )}
    </>
  )
}

export default UserProfile
