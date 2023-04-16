import { styled } from '../../styles'

export const TitleStyled = styled('h3', {
  fontSize: '$xl',
  fontWeight: 700,

  variants: {
    color: {
      white: {
        color: '$white',
      },
      black: {
        color: '$black',
      },
    },
  },
  defaultVariants: {
    color: 'black',
  },
})
