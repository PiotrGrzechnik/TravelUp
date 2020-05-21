import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

import WelcomeScreen from 'src/containers/WelcomeScreen'

Enzyme.configure({ adapter: new Adapter() })

describe('WelcomeScreen', () => {
  test('renders component without crashing', () => {
    const wrapper = shallow(
      <WelcomeScreen>
        <h2>Hello!</h2>
      </WelcomeScreen>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
