import { Button } from '@vechaiui/react'
import React from 'react'

interface PostCardProps {
  title: string
}

export default function PostCard({ title }: PostCardProps) {
  return (
    <div className="flex justify-between gap-4 p-8 bg-gray-100  rounded-xl">
      <h2 className="text-xl">{title}</h2>

      <Button color="primary" variant="solid" className="cursor-pointer">
        show
      </Button>
    </div>
  )
}
