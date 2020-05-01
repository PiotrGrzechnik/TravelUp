import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { reducers } from 'src/modules/user/reducers'

import Theme from 'src/style/theme'
import LoginView from './LoginView'
import RegistrationView from './RegistrationView'
import UserView from './UserView'
import PrivateRoute from 'src/containers/PrivateRoute'
import Notifications from 'src/containers/Notifications'

const store = createStore(reducers, applyMiddleware(thunk))

if (process.env.NODE_ENV === 'development') {
  window.store = store.getState()
}

type AppProps = {}

const App: React.FC<AppProps> = props => {
  return (
    <Provider store={store}>
      <Theme>
        <Router>
          <Notifications>
            <Switch>
              <Route exact path={['/', '/login']}>
                <PrivateRoute>
                  <LoginView />
                </PrivateRoute>
              </Route>
              <Route path="/register">
                <RegistrationView />
              </Route>
              <Route path="/user">
                <PrivateRoute>
                  <UserView />
                </PrivateRoute>
              </Route>
            </Switch>
          </Notifications>
        </Router>
      </Theme>
    </Provider>
  )
}

export default App
