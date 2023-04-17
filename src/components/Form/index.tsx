import { ReactNode, FormHTMLAttributes } from 'react'
import { StyeledForm } from './styles'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export function Form({ children, ...rest }: FormProps) {
  return <StyeledForm {...rest}>{children}</StyeledForm>
}
