import { Button, FormErrorMessage, Link as StyledLink } from '@vechaiui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { PasswordInput } from './PasswordInput'
import UsernameInput from './UsernameInput'

import { get, post } from '~/axios-instance'
import { LoginState } from '~/interfaces/LoginState'
import { capitalize } from '~/utils/capitalize'
import { saveToken } from '~/utils/saveToken'
import { setUsername } from '~/utils/setUsername'

const initialLoginState: LoginState = {
  username: '',
  password: '',
}

const initialErrorState: LoginState & { message: string } = {
  ...initialLoginState,
  message: '',
}

export default function LoginForm() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState(initialLoginState)
  const [errors, setError] = useState(initialErrorState)

  async function authenticate(
    values: LoginState
  ): Promise<{ access_token: string; username: string } | false> {
    const credentials = {
      nameOrEmail: values.username,
      pass: values.password,
    }

    try {
      return (await post('/auth/login', credentials)).data
    } catch {
      setError({
        ...errors,
        message: 'Wrong login or password',
      })

      return false
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
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
      ...errors,
      username,
      password,
    })

    return !password && !username ? true : false
  }

  async function handleSubmitLogin(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    if (!validate(formValues)) return

    setLoading(true)

    const response = await authenticate(formValues)

    if (response) {
      setLoading(false)

      const token = response.access_token

      saveToken(token, dispatch)
      const user = await get('/auth', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setUsername(user.data.name, dispatch)

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

      <Button className="mt-4 cursor-pointer" type="submit" loading={isLoading}>
        Login
      </Button>

      <FormErrorMessage>{errors.message}</FormErrorMessage>

      <StyledLink className="cursor-pointer">
        <Link href="/auth/register" passHref>
          Don&apos;t have an accout?
        </Link>
      </StyledLink>
    </form>
  )
}
