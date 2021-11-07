import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  RequiredIndicator,
} from '@vechaiui/react'
import React, { ChangeEvent } from 'react'

interface PasswordInputProps {
  errors: { password: string }
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  showPassword: boolean
  value: string
  handleToggleShowPassword: () => void
}

export function PasswordInput({
  errors,
  value,
  showPassword,
  handleToggleShowPassword,
  handleInputChange,
}: PasswordInputProps) {
  return (
    <FormControl invalid={Boolean(errors.password)}>
      <FormLabel>
        Password
        <RequiredIndicator />
      </FormLabel>

      <Input.Group>
        <Input
          placeholder="Enter your password"
          name="password"
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
      <FormErrorMessage>{errors.password}</FormErrorMessage>
    </FormControl>
  )
}
