import React from 'react'
import { shallow, mount } from 'enzyme'

import UserProfile from 'src/views/UserView/UserProfile'

// Helper to find button by text and simulate click
const clickButtonWithText = (wrapper, text) =>
  wrapper
    .findWhere(el => {
      return el.text() === text
    })
    .at(0)
    .simulate('click')

describe('UserProfile', () => {
  test('renders component without user data without crashing', () => {
    const wrapper = shallow(<UserProfile />)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders component with empty user data without crashing', () => {
    const user = {}

    const wrapper = shallow(<UserProfile user={user} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders component with user name data without crashing', () => {
    const user = {
      name: 'Pedro',
    }

    const wrapper = shallow(<UserProfile user={user} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.text()).toContain(user.name)
  })

  test('pass props correctly', () => {
    const user = {
      name: 'Pedro',
    }

    const wrapper = mount(<UserProfile user={user} />)
    expect(wrapper.prop('user')).toBe(user)
  })

  test('changes to edit mode correctly', () => {
    const user = {}

    const wrapper = mount(<UserProfile user={user} />)
    expect(wrapper.exists('form')).toBe(false)

    clickButtonWithText(wrapper, 'Edit')
    expect(wrapper.exists('form')).toBe(true)
  })

  test('changes to edit mode and to info mode back correctly', () => {
    const user = {}

    const wrapper = mount(<UserProfile user={user} />)
    expect(wrapper.exists('form')).toBe(false)

    clickButtonWithText(wrapper, 'Edit')
    expect(wrapper.exists('form')).toBe(true)

    clickButtonWithText(wrapper, 'Cancel')
    expect(wrapper.exists('form')).toBe(false)
  })
})
