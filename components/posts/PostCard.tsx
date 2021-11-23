import { Button } from '@vechaiui/react'
import { useRouter } from 'next/router'
import React from 'react'

interface PostCardProps {
  _id: string
  title: string
}

export default function PostCard({ title, _id }: PostCardProps) {
  const router = useRouter()

  const postPath = `/posts/${_id}`

  return (
    <div className="flex justify-between gap-4 p-8 bg-gray-100  rounded-xl">
      <h2 className="text-xl">{title}</h2>

      <Button
        color="primary"
        variant="solid"
        className="cursor-pointer"
        onClick={() => router.push(postPath)}
      >
        show
      </Button>
    </div>
  )
}
