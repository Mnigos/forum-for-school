import { combineReducers } from 'redux'

import tokenReducer from './TokenReducer'
import userReducer from './UserReducer'

const reducers = combineReducers({
  token: tokenReducer,
  user: userReducer,
})

export default reducers
