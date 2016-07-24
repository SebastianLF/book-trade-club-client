import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import App from './components/app';
import Signin from './components/auth/signin'
import Signup from './components/auth/signup'
import Home from './components/home'
import Settings from './components/settings'
import Mybooks from './components/mybooks'
import Allbooks from './components/allbooks'
import requireAuth from './components/auth/require_auth'
import reducers from './reducers';
import { signOutUser } from './actions'
import { AUTH_USER } from './actions/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store=createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='signin' component={Signin}></Route>
        <Route path='signup' component={Signup}></Route>
        <Route path='settings' component={Settings}></Route>
        <Route path="allbooks" component={Allbooks}></Route>
        <Route path="mybooks" component={requireAuth(Mybooks)}></Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.app'));
