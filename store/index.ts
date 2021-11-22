import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
} from 'react-redux'

import reducers from './reducers'

import { User } from '~/interfaces/User'

export const store = createStore(reducers, applyMiddleware(thunk))

export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector

export type RootState = {
  token: string
  user: User
}
export type AppDispatch = typeof store.dispatch
