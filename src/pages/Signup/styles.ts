import { styled } from '../../styles'

export const SignupWrapper = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SignupContainer = styled('main', {
  width: '500px',
  backgroundColor: '$white',
  border: '1px solid $gray400',
  padding: '1.5rem',
  borderRadius: '16px',
})

export const SignupFormContainer = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  label: {
    marginTop: '1.5rem',
  },

  span: {
    color: '$red500',
    fontSize: '$sm',
    marginTop: '0.5rem',
  },

  button: {
    marginTop: '1rem',
  },

  input: {
    height: '32px',
    border: '1px solid $gray300',
    marginTop: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    fontSize: '$sm',

    '&::placeholder': {
      color: '$gray500',
    },
  },
})
