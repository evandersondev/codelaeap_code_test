import { HTMLProps } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
	children: string
}

export function Button({ children }: ButtonProps) {
	return <ButtonStyled>{children}</ButtonStyled>
}
