import React, { useEffect, useRef, useState } from 'react'
import router from 'next/router'
import { useDispatch } from 'react-redux'

import CreatePostCard from '~/components/posts/CreatePostCard'
import PostCard from '~/components/posts/PostCard'
import DefaultLayout from '~/layouts/default'
import { DialogProvider } from '~/providers/DialogProvider'
import { getWithToken } from '~/axios-instance'
import { store } from '~/store'
import { setUsername } from '~/utils/setUsername'
import { getPosts } from '~/utils/api/getPosts'
import { Post } from '~/interfaces/Post'

export default function Home() {
  const dispatch = useDispatch()
  const [posts, setPosts] = useState([] as Post[])

  const token = store.getState().token

  useEffect(() => {
    getWithToken('/auth', token)
      .then(({ data: { name } }) => setUsername(name, dispatch))
      .catch(() => router.push('/auth/login'))

    getPosts(token).then(setPosts)
  }, [])

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen gap-20">
        <DialogProvider>
          <CreatePostCard />
        </DialogProvider>

        <div className="flex flex-col w-3/4 gap-5">
          {posts.map(({ title, _id }, index) => (
            <PostCard title={title} _id={_id} key={index} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}
