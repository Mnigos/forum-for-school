import { getWithToken } from '~/axios-instance'
import { Post } from '~/interfaces/Post'

export const getPosts = async (token: string) =>
  (await getWithToken('/posts', token)).data as Post[]
