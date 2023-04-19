import { StyledTitle } from './styles'

interface TitleProps {
	children: string
	color?: 'white' | 'black'
}

export function Title({ children, color }: TitleProps) {
	return <StyledTitle color={color}>{children}</StyledTitle>
}
