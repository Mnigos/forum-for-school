import Axios from 'axios'

const instance = Axios.create({ baseURL: process.env.BASE_URL })

/*
  Add `delete` method export

  https://github.com/axios/axios/issues/4268
*/
export const { post, get, request, head, put, patch } = instance

Axios.delete('')
