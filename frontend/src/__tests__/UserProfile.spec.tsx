import React from 'react'
import { shallow } from 'enzyme'

import UserProfile from 'src/views/UserView/UserProfile'

describe('UserProfile', () => {
  test('renders component without user data without crashing', () => {
    const app = shallow(<UserProfile />)
    expect(app).toMatchSnapshot()
  })

  test('renders component with user data without crashing', () => {
    const user = {}
    const app = shallow(<UserProfile user={user} />)
    expect(app).toMatchSnapshot()
  })

  test('renders component with user name data without crashing', () => {
    const user = {
      name: 'Pedro',
    }

    const app = shallow(<UserProfile user={user} />)
    expect(app).toMatchSnapshot()
    expect(app.text()).toContain(user.name)
  })
})
