import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '@vechaiui/button'
import Link from 'next/link'
import { Link as StyledLink } from '@vechaiui/react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { PasswordInput } from './PasswordInput'
import UsernameInput from './UsernameInput'

import { capitalize } from '~/utils/capitalize'
import { post } from '~/axios-instance'
import { saveToken } from '~/utils/saveToken'

interface RegisterState {
  username: string
  password: string
  repeatedPassword: string
}

const initialRegisterState: RegisterState = {
  username: '',
  password: '',
  repeatedPassword: '',
}

export default function RegisterForm() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState(initialRegisterState)
  const [errors, setError] = useState(initialRegisterState)

  async function register(
    values: Omit<RegisterState, 'repeatedPassword'>
  ): Promise<{ access_token: string } | false> {
    const credentials = {
      name: values.username,
      pass: values.password,
    }

    try {
      return (await post('/auth/register', credentials)).data
    } catch {
      return false
    }
  }

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

    if (
      (['password', 'repeatedPassword'].includes(name) &&
        value !== formValues.password) ||
      value !== formValues.repeatedPassword
    )
      setError({
        ...errors,
        repeatedPassword: "Passwords don't match",
      })
    else
      setError({
        ...errors,
        repeatedPassword: '',
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  function validate(values: RegisterState): boolean {
    const foundedErrors: RegisterState = {
      username: '',
      password: '',
      repeatedPassword: '',
    }

    if (!values.username) foundedErrors.username = 'Username cannot be empty'
    if (!values.password) foundedErrors.password = 'Password cannot be empty'
    if (values.repeatedPassword !== values.password)
      foundedErrors.repeatedPassword = "Passwords don't match"

    const { username, password, repeatedPassword } = foundedErrors

    setError({
      username,
      password,
      repeatedPassword,
    })

    return !password && !username && !repeatedPassword ? true : false
  }

  async function handleSubmitLogin(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    if (!validate(formValues)) return
    setLoading(true)

    const { username, password } = formValues

    const response = await register({ username, password })

    if (response) {
      setLoading(false)

      saveToken(response.access_token, dispatch)
      router.push('/')
    }

    setLoading(false)
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

      <PasswordInput
        error={errors.repeatedPassword}
        name="repeatedPassword"
        label="Repeat Password"
        value={formValues.repeatedPassword}
        handleInputChange={handleInputChange}
      />

      <Button className="mt-4 cursor-pointer" type="submit" loading={isLoading}>
        Register
      </Button>

      <StyledLink className="cursor-pointer">
        <Link href="/auth/login" passHref>
          Already got accout?
        </Link>
      </StyledLink>
    </form>
  )
}
