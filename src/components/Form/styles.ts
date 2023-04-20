import { styled } from '../../styles'

export const StyeledForm = styled('form', {
  width: '100%',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    border: {
      true: {
        border: '1px solid $gray400',
        borderRadius: '16px',
        padding: '1.5rem',
      },
      false: {
        border: 0,
        borderRadius: 0,
      },
    },
  },

  defaultVariants: {
    border: 'false',
  },

  h3: {
    fontSize: '$xl',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },

  label: {
    marginTop: '0.5rem',
  },

  input: {
    height: '32px',
    border: '1px solid $gray300',
    marginBottom: '1rem',
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
