import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { reducers } from 'src/modules/user/reducers'

import Theme from 'src/style/theme'
import LoginView from './LoginView'
import RegistrationView from './RegistrationView'

const store = createStore(reducers, applyMiddleware(thunk))

console.log('STORE:', store.getState())

type AppProps = {}

const App: React.FC<AppProps> = props => {
  return (
    <Provider store={store}>
      <Theme>
        <Router>
          <div>
            <Switch>
              <Route exact path={['/', '/login']}>
                <LoginView />
              </Route>
              <Route path="/registration">
                <RegistrationView />
              </Route>
            </Switch>
          </div>
        </Router>
      </Theme>
    </Provider>
  )
}

export default App
