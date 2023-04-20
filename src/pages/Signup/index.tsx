import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { SignupContainer, SignupFormContainer, SignupWrapper } from './styles'
import { Button, Title } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { saveUsername } from '../../redux/features/authSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/store'

const signupFormSchema = z.object({
  username: z
    .string()
    .nonempty('Your username is required')
    .min(3, 'Your username must be at least 3 characters long'),
})

type SignupFormData = z.infer<typeof signupFormSchema>

export function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUsername = useSelector((state: RootState) => state.auth.username)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
  })

  function handleSignup(data: SignupFormData) {
    const { username } = signupFormSchema.parse(data)
    dispatch(saveUsername(username))
  }

  useEffect(() => {
    if (currentUsername) {
      navigate(`/home/${currentUsername}`)
    }
  }, [currentUsername])

  return (
    <SignupWrapper>
      <SignupContainer>
        <Title>Welcome to CodeLeap network!</Title>

        <SignupFormContainer onSubmit={handleSubmit(handleSignup)}>
          <label>Please enter your username</label>

          <input
            placeholder="John doe"
            id="username"
            {...register('username')}
          />

          {errors.username && <span>{errors.username.message}</span>}

          <Button type="submit">ENTER</Button>
        </SignupFormContainer>
      </SignupContainer>
    </SignupWrapper>
  )
}
