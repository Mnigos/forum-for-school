import React, { useEffect } from 'react'
import router from 'next/router'
import { useDispatch } from 'react-redux'

import CreatePostCard from '~/components/posts/CreatePostCard'
import PostCard from '~/components/posts/PostCard'
import DefaultLayout from '~/layouts/default'
import { DialogProvider } from '~/providers/DialogProvider'
import { get } from '~/axios-instance'
import { store } from '~/store'
import { setUsername } from '~/utils/setUsername'

const cards = [
  {
    _id: '12345678iefsefg',
    title: 'First Card',
  },
  {
    _id: '12345678iawdawdawd',
    title: 'Second Card',
  },
  {
    _id: '12345678iawdawdawdsrhgh',
    title: 'Third Card',
  },
]

export default function Home() {
  const dispatch = useDispatch()

  const token = store.getState().token

  useEffect(() => {
    get('/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setUsername(res.data.name, dispatch)
      })
      .catch(() => router.push('/auth/login'))
  })

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen gap-20">
        <DialogProvider>
          <CreatePostCard />
        </DialogProvider>

        <div className="flex flex-col gap-5 w-3/4">
          {cards.map(({ title, _id }, index) => (
            <PostCard title={title} _id={_id} key={index} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}
