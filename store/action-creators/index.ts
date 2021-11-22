import { Dispatch } from 'redux'

import { TokenAction, UserAction } from './../actions/index'

export const setToken = (token: string) => {
  return (dispatch: Dispatch<TokenAction>) => {
    dispatch({
      type: 'UPDATE_TOKEN',
      payload: token,
    })
  }
}

export const setUsername = (username: string) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: 'UPDATE_USERNAME',
      payload: username,
    })
  }
}
