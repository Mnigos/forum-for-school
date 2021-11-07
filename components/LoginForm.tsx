import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  RequiredIndicator,
} from '@vechaiui/forms'
import { Button } from '@vechaiui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'

import { LoginState } from '~/interfaces/LoginState'
import { capitalize } from '~/utils/capitalize'

const initialLoginState: LoginState = {
  username: '',
  password: '',
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState(initialLoginState)
  const [errors, setError] = useState(initialLoginState)

  const handleToggleShowPassword = () => setShowPassword(!showPassword)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    if (!value)
      setError({
        ...errors,
        [name]: capitalize(`${name} cannot be empty`),
      })
    else
      setError({
        ...errors,
        [name]: '',
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  function validate(values: LoginState): boolean {
    const foundedErrors = {
      username: '',
      password: '',
    }

    if (!values.username) foundedErrors.username = 'Username cannot be empty'
    if (!values.password) foundedErrors.password = 'Password cannot be empty'

    const { username, password } = foundedErrors

    setError({
      username,
      password,
    })

    return !password && !username ? true : false
  }

  function handleSubmitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // eslint-disable-next-line no-console
    if (validate(formValues)) console.log('logged in!')
  }

  return (
    <form
      className="flex flex-col max-w-xs gap-4 p-8 bg-gray-100 rounded-xl"
      onSubmit={handleSubmitLogin}
    >
      <FormControl invalid={Boolean(errors.username)}>
        <FormLabel>
          Username
          <RequiredIndicator />
        </FormLabel>

        <Input
          placeholder="Enter your username"
          name="username"
          onChange={handleInputChange}
          value={formValues.username}
        />
        <FormErrorMessage>{errors.username}</FormErrorMessage>
      </FormControl>

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
            value={formValues.password}
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

      <Button className="mt-4 cursor-pointer" type="submit" onClick={() => {}}>
        Login
      </Button>
    </form>
  )
}
