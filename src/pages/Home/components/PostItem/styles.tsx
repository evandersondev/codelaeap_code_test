import { styled } from '../../../../styles'

export const HomePostContent = styled('div', {})

export const PostWrapper = styled('div', {
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid $gray400',

  header: {
    width: '100%',
    height: '70px',
    background: '$purple500',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    h3: {
      color: '$white',
      fontSize: '$xl',
    },

    div: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',

      button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        border: 0,
        color: '$white',
      },
    },
  },

  section: {
    padding: '1.5rem',
    color: '$gray300',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    span: {
      '&:first-child': {
        fontWeight: 700,
      },
    },
  },

  p: {
    fontSize: '$lg',
    display: 'block',
    padding: '0 1.5rem 1.5rem 1.5rem',
  },
})

export const PostForm = styled('form', {
  width: '100%',
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
