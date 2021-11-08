import { Button } from '@vechaiui/react'
import React, { useContext } from 'react'

import CreatePostForm from './CreatePostForm'

import { DialogContext } from '~/providers/DialogProvider'

export default function CreatePostCard() {
  const { dialog, openDialog } = useContext(DialogContext)

  return (
    <div className="flex flex-col max-w-xs gap-4 p-8 bg-gray-100 rounded-xl">
      <h3 className="text-lg">Share your problem with others</h3>
      <Button
        className="cursor-pointer"
        color="primary"
        variant="solid"
        onClick={openDialog}
      >
        Create Post
      </Button>

      {dialog && (
        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-gray-600 bg-opacity-75">
          <CreatePostForm />
        </div>
      )}
    </div>
  )
}
