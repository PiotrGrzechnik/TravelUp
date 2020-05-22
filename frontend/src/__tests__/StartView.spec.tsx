import React from 'react'
import { shallow } from 'enzyme'

import StartView from 'src/views/UserView/StartView'

describe('StartView', () => {
  test('renders component without crashing', () => {
    const app = shallow(<StartView />)
    expect(app).toMatchSnapshot()
  })

  test('pass props correctly', () => {
    const app = shallow(<StartView user={{ name: 'Mary' }} />)
    expect(app).toMatchSnapshot()
  })

  test('render title text properly', () => {
    const wrapper = shallow(<StartView user={{ name: 'Mary' }} />)
    expect(wrapper.html().includes('Hello, Mary')).toBe(true)
  })

  test('render days if createdAt prop is passed', () => {
    const wrapper = shallow(<StartView user={{ createdAt: '01 01 2020' }} />)
    expect(wrapper.html().includes('days')).toBe(true)
  })
})
