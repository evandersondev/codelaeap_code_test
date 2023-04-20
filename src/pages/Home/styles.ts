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
  justifyContent: 'space-between',
  background: '$purple500',
  padding: '1.6875rem 2.3125rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '$white',
    fontSize: '$lg',
    fontWeight: 700,
  },
})

export const HomeButtonLogout = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'transparent',
  border: 0,
  color: '$white',
})

export const HomeContent = styled('div', {
  height: '100%',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  form: {
    input: {
      marginTop: '0.5rem',
      marginBottom: 0,
    },

    label: {
      marginTop: '1.5rem',
    },

    span: {
      color: '$red500',
      fontSize: '$sm',
      marginTop: '0.5rem',
    },
  },
})

export const HomePaginationFooter = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem',

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
    gap: '0.5rem',
    marginTop: '1.5rem',
    transition: 'background 0.2s ease-in-out',

    '&:hover': {
      background: '$purple700',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      background: '$gray300',
      opacity: 0.2,
    },
  },
})
