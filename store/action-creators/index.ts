import { Dispatch } from 'redux'

import { TokenAction } from './../actions/index'

export const setToken = (token: string) => {
  return (dispatch: Dispatch<TokenAction>) => {
    dispatch({
      type: 'UPDATE_TOKEN',
      payload: token,
    })
  }
}
