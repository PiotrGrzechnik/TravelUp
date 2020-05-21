import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

import UserProfile from 'src/views/UserView/UserProfile'

describe('UserProfile', () => {
  test('renders component without crashing', () => {
    const user = {}
    const app = renderer.create(<UserProfile user={user} />).toJSON()
    expect(app).toMatchSnapshot()
  })
})
