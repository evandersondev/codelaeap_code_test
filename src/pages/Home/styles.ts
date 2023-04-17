import { styled } from '../../styles'

export const HomeWrapper = styled('div', {
  minHeight: '100%',
  width: '100%',
  background: '$white',
})

export const HomeHeader = styled('header', {
  height: '80px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: '$purple500',
  padding: '1.6875rem 2.3125rem',
})

export const HomeContent = styled('div', {
  height: '100%',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})
