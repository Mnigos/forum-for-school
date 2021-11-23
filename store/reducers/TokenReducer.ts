import { TokenAction } from '../actions'

const initialState = ''

export default function reducer(
  state: string = initialState,
  action: TokenAction
): string {
  if (action.type === 'UPDATE_TOKEN') return action.payload

  return state
}
