import React from 'react'
import { shallow } from 'enzyme'

import WelcomeScreen from 'src/containers/WelcomeScreen'

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
