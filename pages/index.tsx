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

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

const cards = [
  {
    title: 'First Card',
    body: loremIpsum,
  },
  {
    title: 'Second Card',
    body: loremIpsum,
  },
  {
    title: 'Third Card',
    body: loremIpsum,
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

        <div className="flex flex-col w-3/4 gap-5">
          {cards.map(({ title, body }, index) => (
            <PostCard title={title} body={body} key={index} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}
