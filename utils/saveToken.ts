import { Dispatch } from 'redux'

import { TokenAction } from '~/store/actions'

export function saveToken(token: string, dispatch: Dispatch<TokenAction>) {
  dispatch({
    type: 'UPDATE_TOKEN',
    payload: token,
  })
}
