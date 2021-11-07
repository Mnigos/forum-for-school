import { Button, Link as StyledLink } from '@vechaiui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'

import { PasswordInput } from './PasswordInput'
import UsernameInput from './UsernameInput'

import { LoginState } from '~/interfaces/LoginState'
import { capitalize } from '~/utils/capitalize'

const initialLoginState: LoginState = {
  username: '',
  password: '',
}

export default function LoginForm() {
  const [formValues, setFormValues] = useState(initialLoginState)
  const [errors, setError] = useState(initialLoginState)

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
      <UsernameInput
        error={errors.username}
        value={formValues.username}
        handleInputChange={handleInputChange}
      />

      <PasswordInput
        error={errors.password}
        value={formValues.password}
        handleInputChange={handleInputChange}
      />

      <Button className="mt-4 cursor-pointer" type="submit">
        Login
      </Button>

      <StyledLink className="cursor-pointer">
        <Link href="/auth/register" passHref>
          Don&apos;t have an accout?
        </Link>
      </StyledLink>
    </form>
  )
}
