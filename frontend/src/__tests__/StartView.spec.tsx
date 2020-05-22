import React from 'react'
import { shallow } from 'enzyme'

import StartView from 'src/views/UserView/StartView'

describe('StartView', () => {
  test('renders component without crashing', () => {
    const wrapper = shallow(<StartView />)
    expect(wrapper).toMatchSnapshot()
  })

  test('pass props correctly', () => {
    const wrapper = shallow(<StartView user={{ name: 'Mary' }} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('render title text properly', () => {
    const wrapper = shallow(<StartView user={{ name: 'Mary' }} />)
    expect(wrapper.html()).toContain('Hello, Mary')
  })

  test('render days if createdAt prop is passed', () => {
    const today = new Date().toString()
    const wrapper = shallow(<StartView user={{ createdAt: today }} />)
    expect(wrapper.html()).toContain('1 days')
  })
})
