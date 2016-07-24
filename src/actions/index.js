import axios from 'axios';
import { browserHistory } from 'react-router'
import { GET_TRADE_LIST, AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types'

const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }){
  return function(dispatch) {

    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {

        // if request is good...
        // Update state to indicate user is authenticated.
        dispatch({ type: AUTH_USER });

        // Save the JWT Token in localStorage.
        localStorage.setItem('token', response.data.token);

        // redirect to feature page.
        browserHistory.push('/mybooks');
      })
      .catch( () => {

        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser( {email, password} ){
  return function(dispatch) {

    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {

        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);

        browserHistory.push('/mybooks');
      }).catch(function (error) {

        const errorMessage = JSON.parse(error.response.data);

        dispatch(authError(errorMessage.error));
      });
  }
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signOutUser(){

  // delete jwt token on signout
  localStorage.removeItem('token');

  browserHistory.push('/');
  return { type: UNAUTH_USER }

}

export function getTradeList(){
  return function(dispatch){
    axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then( (response) => {
        dispatch({ type: GET_TRADE_LIST, payload: response.data.items})
      });
  }
}
