import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Theme from '../style/theme'
import LoginScreen from './LoginScreen'
import RegistrationScreen from './RegistrationScreen'

type AppProps = {
  screen?: string
}

const App: React.FC<AppProps> = props => {
  return (
    <Theme>
      <Router>
        <div>
          <Switch>
            <Route exact path={['/', '/login']}>
              <LoginScreen />
            </Route>
            <Route path="/registration">
              <RegistrationScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </Theme>
  )
}

export default App
