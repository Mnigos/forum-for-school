import { UserAction } from '../actions'

import { User } from '~/interfaces/User'

const initialState: User = {
  username: '',
}

export default function reducer(
  state: User = initialState,
  action: UserAction
): User {
  if (action.type === 'UPDATE_USERNAME')
    return { ...state, username: action.payload }

  return state
}
