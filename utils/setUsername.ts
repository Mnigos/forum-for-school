import { Dispatch } from 'redux'

import { UserAction } from '~/store/actions'

export function setUsername(username: string, dispatch: Dispatch<UserAction>) {
  dispatch({
    type: 'UPDATE_USERNAME',
    payload: username,
  })
}
