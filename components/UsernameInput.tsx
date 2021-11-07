import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  RequiredIndicator,
} from '@vechaiui/react'
import React, { ChangeEvent } from 'react'

interface UsernameInputProps {
  error: string
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function UsernameInput({
  error,
  value,
  handleInputChange,
}: UsernameInputProps) {
  return (
    <FormControl invalid={Boolean(error)}>
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
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}
