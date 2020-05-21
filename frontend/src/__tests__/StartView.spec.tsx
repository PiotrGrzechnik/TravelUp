import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

import StartView from 'src/views/UserView/StartView'

describe('StartView', () => {
  test('renders component without crashing', () => {
    const app = renderer.create(<StartView />).toJSON()
    expect(app).toMatchSnapshot()
  })

  test('pass props correctly', () => {
    const app = renderer.create(<StartView user={{ name: 'Mary' }} />).toJSON()
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
