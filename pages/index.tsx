import React from 'react'

import CreatePostCard from '~/components/CreatePostCard'
import { DialogProvider } from '~/providers/DialogProvider'

export default function Home() {
  return (
    <div className="flex min-h-[80vh] justify-center items-center">
      <DialogProvider>
        <CreatePostCard />
      </DialogProvider>
    </div>
  )
}
