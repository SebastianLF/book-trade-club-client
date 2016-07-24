import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import auth from './auth'
import tradelist from './tradeList'

const rootReducer = combineReducers({
  form,
  auth,
  tradelist
});

export default rootReducer;
