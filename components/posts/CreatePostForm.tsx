import { Button } from '@vechaiui/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  RequiredIndicator,
  Textarea,
} from '@vechaiui/forms'
import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'

import { CreatePost } from '~/interfaces/Post'
import { DialogContext } from '~/providers/DialogProvider'
import { store } from '~/store'
import { createPost } from '~/utils/api/createPost'
import { capitalize } from '~/utils/capitalize'

const initialCreatePostState: CreatePost = {
  title: '',
  content: '',
}

const initialErrorsState: CreatePost & { message: string } = {
  ...initialCreatePostState,
  message: '',
}

export default function CreatePostForm() {
  const [isCreating, setIsCreating] = useState(false)
  const [formValues, setFormValues] = useState(initialCreatePostState)
  const [errors, setErrors] = useState(initialErrorsState)

  const token = store.getState().token

  const { closeDialog } = useContext(DialogContext)

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = event.target

    if (!value)
      setErrors({
        ...errors,
        [name]: capitalize(`${name} cannot be empty`),
      })
    else
      setErrors({
        ...errors,
        [name]: '',
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  function validate(values: CreatePost): boolean {
    const foundedErrors = {
      title: '',
      content: '',
    }

    if (!values.title) foundedErrors.title = 'title cannot be empty'
    if (!values.content) foundedErrors.content = 'content cannot be empty'

    const { title, content } = foundedErrors

    setErrors({
      ...errors,
      title,
      content,
    })

    return !content && !title ? true : false
  }

  async function handleSubmitCreate(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    if (!validate(formValues)) return

    setIsCreating(true)

    try {
      await createPost(token, formValues)
    } catch {
      setIsCreating(false)
      setErrors({
        ...errors,
        message: 'Something went wrong...',
      })
    }

    closeDialog()
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

        <Input
          placeholder="Your post's title"
          name="title"
          onChange={handleInputChange}
          value={formValues.title}
        />
        <FormErrorMessage>{errors.title}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>
          Content
          <RequiredIndicator />
        </FormLabel>

        <Textarea
          placeholder="Your post's content"
          name="content"
          onChange={handleInputChange}
          value={formValues.content}
        />
        <FormErrorMessage>{errors.content}</FormErrorMessage>
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
      <FormErrorMessage>{errors.message}</FormErrorMessage>
    </form>
  )
}
