import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  RequiredIndicator,
} from '@vechaiui/react'
import React, { ChangeEvent, useState } from 'react'

interface PasswordInputProps {
  error: string
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  name?: string
  label?: string
}

export function PasswordInput({
  error,
  value,
  handleInputChange,
  name = 'password',
  label = 'Password',
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const handleToggleShowPassword = () => setShowPassword(!showPassword)

  return (
    <FormControl invalid={Boolean(error)}>
      <FormLabel>
        {label}
        <RequiredIndicator />
      </FormLabel>

      <Input.Group>
        <Input
          placeholder="Enter your password"
          name={name}
          onChange={handleInputChange}
          value={value}
          type={showPassword ? 'text' : 'password'}
        />

        <Input.RightElement className="w-14">
          <Button
            className="cursor-pointer"
            type="button"
            size="xs"
            variant="solid"
            onClick={handleToggleShowPassword}
          >
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </Input.RightElement>
      </Input.Group>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}
