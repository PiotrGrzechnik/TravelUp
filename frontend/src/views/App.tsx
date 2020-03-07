import React from 'react'

import Theme from '../style/theme'
import LoginScreen from './LoginScreen'
import RegistrationScreen from './RegistrationScreen'

type AppProps = {
  screen?: string
}

const App: React.FC<AppProps> = props => {
  const { screen = 'registration' } = props

  return (
    <Theme>
      <div>
        {screen === 'registration' && <RegistrationScreen />}
        {screen === 'login' && <LoginScreen />}
      </div>
    </Theme>
  )
}

export default App
