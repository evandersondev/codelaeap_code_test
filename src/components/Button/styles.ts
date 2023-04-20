import { styled } from '../../styles'

export const ButtonStyled = styled('button', {
  width: '111px',
  height: '32px',
  border: 0,
  background: '$purple500',
  color: '$white',
  alignSelf: 'flex-end',
  fontSize: '$md',
  fontWeight: 700,
  borderRadius: '8px',
  transition: 'background 0.2s ease-in-out',

  '&:hover': {
    background: '$purple700',
  },
})
