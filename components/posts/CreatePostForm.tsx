import { Button } from '@vechaiui/button'
import {
  FormControl,
  FormLabel,
  Input,
  RequiredIndicator,
  Textarea,
} from '@vechaiui/forms'
import React, { FormEvent, useContext, useState } from 'react'

import { DialogContext } from '~/providers/DialogProvider'

export default function CreatePostForm() {
  const [isCreating, setIsCreating] = useState(false)
  const { closeDialog } = useContext(DialogContext)

  function handleSubmitCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsCreating(true)
  }

  return (
    <form
      className="flex flex-col max-w-xs gap-4 p-8 bg-gray-100 rounded-xl"
      onSubmit={handleSubmitCreate}
    >
      <FormControl>
        <FormLabel>
          Title
          <RequiredIndicator />
        </FormLabel>

        <Input placeholder="Your post's title" />
      </FormControl>

      <FormControl>
        <FormLabel>
          Body
          <RequiredIndicator />
        </FormLabel>

        <Textarea />
      </FormControl>

      <div className="flex justify-between">
        <Button
          className="cursor-pointer"
          color="primary"
          variant="solid"
          type="submit"
          loading={isCreating}
        >
          Create
        </Button>

        <Button
          className="cursor-pointer"
          color="redd"
          variant="solid"
          onClick={closeDialog}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
