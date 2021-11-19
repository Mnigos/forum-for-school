import { combineReducers } from 'redux'

import tokenReducer from './TokenReducer'

const reducers = combineReducers({
  token: tokenReducer,
})

export default reducers
