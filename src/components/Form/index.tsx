import { ReactNode, FormHTMLAttributes } from 'react'
import { StyeledForm } from './styles'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode
	border?: true | false
}

export function Form({ children, border, ...rest }: FormProps) {
	return (
		<StyeledForm border={border} {...rest}>
			{children}
		</StyeledForm>
	)
}
