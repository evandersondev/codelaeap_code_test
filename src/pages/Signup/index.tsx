import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { SignupContainer, SignupFormContainer, SignupWrapper } from './styles'
import { Button, Title } from '../../components'
import { useAuth } from '../../hooks/useAuth'

const loginFormSchema = z.object({
  username: z
    .string()
    .nonempty('Your username is required')
    .min(3, 'Your username must be at least 3 characters long'),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function Signup() {
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  function handleSignup(data: LoginFormData) {
    login(data.username)
  }

  return (
    <SignupWrapper>
      <SignupContainer>
        <Title text="Welcome to CodeLeap network!" />

        <SignupFormContainer onSubmit={handleSubmit(handleSignup)}>
          <p>Please enter your username</p>

          <input
            placeholder="John doe"
            id="username"
            {...register('username')}
          />

          {errors.username && <span>{errors.username.message}</span>}

          <Button type="submit" title="ENTER" />
        </SignupFormContainer>
      </SignupContainer>
    </SignupWrapper>
  )
}
