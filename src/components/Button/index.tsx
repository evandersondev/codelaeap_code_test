import { HTMLProps } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  title: string
}

export function Button({ title }: ButtonProps) {
  return <ButtonStyled>{title}</ButtonStyled>
}
