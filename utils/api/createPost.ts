import { CreatePost } from '~/interfaces/Post'
import { postWithToken } from '~/axios-instance'

export const createPost = (token: string, body: CreatePost) =>
  postWithToken('/posts', token, body)
    .then(res => res.data)
    .catch(error => error.response.data.status)
