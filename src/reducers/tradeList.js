import { GET_TRADE_LIST } from '../actions/types'

export default function(state = [], action){
  switch (action.type) {
    case GET_TRADE_LIST:
      return [...state, ...action.payload]
  }
  return state;
}
