import { styled } from '../../styles'

export const HomeWrapper = styled('div', {
  height: '100%',
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

  h1: {
    color: '$white',
    fontSize: '$xl',
    fontWeight: 700,
  },
})

export const HomeForm = styled('form', {
  width: '100%',
  padding: '1.5rem',
  border: '1px solid $gray400',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',

  h3: {
    fontSize: '$xl',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },

  input: {
    height: '32px',
    border: '1px solid $gray300',
    marginBottom: '1.5rem',
    marginTop: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    fontSize: '$sm',

    '&::placeholder': {
      color: '$gray500',
    },
  },

  textarea: {
    height: '74px',
    border: '1px solid $gray300',
    marginTop: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    fontSize: '$sm',
    resize: 'none',

    '&::placeholder': {
      color: '$gray500',
    },
  },

  button: {
    width: '120px',
    height: '32px',
    borderRadius: '8px',
    border: 0,
    background: '$purple500',
    color: '$white',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: '1.5rem',
    transition: 'background 0.2s ease-in-out',

    '&:hover': {
      background: '$purple700',
    },
  },
})

export const HomeContent = styled('div', {
  height: '100%',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})
