import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { notification, Layout, Menu, Avatar, Dropdown } from 'antd'
import styled from 'styled-components'

import { UserOutlined, RocketOutlined, BellOutlined, HomeOutlined } from '@ant-design/icons'

import { getUserData } from 'src/modules/user/actions'
import { IStoreState } from 'src/modules/user/reducers'
import { getAuthToken } from 'src/utils'
import UserProfile from './UserView/UserProfile'
import UserTrips from './UserView/UserTrips'
import StartView from './UserView/StartView'

const Logo = require('src/images/logo.png')

const { Header, Content, Sider } = Layout

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`
const HeaderMenuStyled = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`
const LogoStyled = styled.img`
  width: 100px;
`
const SiderStyled = styled(Sider)`
  .ant-layout-sider-zero-width-trigger {
    top: 10px;
    right: unset;
  }
`
const HeaderContentStyled = styled(Header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`
const TitleName = styled.span`
  flex-shrink: 0;
  margin-left: 30px;
`
const AvatarStyled = styled(Avatar)`
  margin-left: 30px;
  background-color: ${({ theme }) => theme.colors.neutralAll[6]};

  @media (max-width: 576px) {
    display: none;
  }
`
const NotificationIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
`
const ContentStyled = styled(Content)`
  padding: 40px;
`

const renderView = (data: object) => ({
  start: <StartView user={data} />,
  profile: <UserProfile user={data} />,
  trips: <UserTrips />,
})

const notificationMenu = (
  <Menu>
    <Menu.Item key="0">New app is coming!</Menu.Item>
    <Menu.Item key="1">Tomorrow is a trip to New Zealand</Menu.Item>
    <Menu.Item key="2">You have a new message from Melissa</Menu.Item>
  </Menu>
)

type UserViewProps = {}

const UserView: React.FC<UserViewProps> = props => {
  const dispatch = useDispatch()
  const [view, setView] = useState('start')
  const { message, error, data, loading } = useSelector(
    (store: IStoreState) => ({
      message: store.user.message,
      error: store.user.error,
      loading: store.user.loading,
      data: store.user.data,
    }),
    shallowEqual
  )

  useEffect(() => {
    let userId = data && data.id

    if (!userId) {
      const token = getAuthToken()
      userId = token ? token.id : null
    }

    userId && dispatch(getUserData(userId))
  }, [])

  useEffect(() => {
    error &&
      notification.error({
        message: error,
      })
  }, [error])

  useEffect(() => {
    message &&
      notification.success({
        message: message,
      })
  }, [message])

  return (
    <LayoutStyled>
      <SiderStyled breakpoint="sm" collapsedWidth="0">
        <HeaderMenuStyled className="logo">
          <LogoStyled src={Logo} />
        </HeaderMenuStyled>
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
          <Menu.Item key="0" onClick={() => setView('start')}>
            <HomeOutlined /> <span>Start</span>
          </Menu.Item>
          <Menu.Item key="1" onClick={() => setView('profile')}>
            <UserOutlined /> <span>Profile</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => setView('trips')}>
            <RocketOutlined /> <span>Trips</span>
          </Menu.Item>
        </Menu>
      </SiderStyled>
      <Layout>
        <HeaderContentStyled>
          <Dropdown overlay={notificationMenu} trigger={['click']} placement="bottomCenter">
            <NotificationIcon onClick={e => e.preventDefault()}>
              <BellOutlined />
            </NotificationIcon>
          </Dropdown>
          <AvatarStyled size="large" icon={<UserOutlined />} />
          <TitleName>Pedrito Rodriguez</TitleName>
        </HeaderContentStyled>
        <ContentStyled>{renderView(data)[view]}</ContentStyled>
      </Layout>
    </LayoutStyled>
  )
}

export default UserView
