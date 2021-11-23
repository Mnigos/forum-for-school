import React from 'react'

import CreatePostCard from '~/components/posts/CreatePostCard'
import PostCard from '~/components/posts/PostCard'
import DefaultLayout from '~/layouts/default'
import { DialogProvider } from '~/providers/DialogProvider'

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
