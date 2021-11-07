import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  RequiredIndicator,
} from '@vechaiui/react'
import React, { ChangeEvent } from 'react'

interface UsernameInputProps {
  errors: { username: string }
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function UsernameInput({
  errors,
  value,
  handleInputChange,
}: UsernameInputProps) {
  return (
    <FormControl invalid={Boolean(errors.username)}>
      <FormLabel>
        Username
        <RequiredIndicator />
      </FormLabel>

      <Input
        placeholder="Enter your username"
        name="username"
        onChange={handleInputChange}
        value={value}
      />
      <FormErrorMessage>{errors.username}</FormErrorMessage>
    </FormControl>
  )
}
