import { TitleStyled } from './styles'

interface TitleProps {
  text: string
  color?: 'white' | 'black'
}

export function Title({ text, color }: TitleProps) {
  return <TitleStyled color={color}>{text}</TitleStyled>
}
