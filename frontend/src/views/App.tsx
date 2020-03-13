import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducers } from 'src/modules/user/reducers'

import Theme from 'src/style/theme'
import LoginScreen from './LoginScreen'
import RegistrationScreen from './RegistrationScreen'

const store = createStore(reducers)

type AppProps = {}

const App: React.FC<AppProps> = props => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
