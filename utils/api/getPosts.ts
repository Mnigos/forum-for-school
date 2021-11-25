import { getWithToken } from '~/axios-instance'

export const getPosts = (token: string) =>
  getWithToken('/posts', token).then(res => res.data)
