import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../../styles'

export const ModalWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(119, 119, 119, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ModalContent = styled(Dialog.Content, {
  width: '660px',
  backgroundColor: '$white',
  border: '1px solid $gray400',
  borderRadius: '16px',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',

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

export const ModalFooter = styled('footer', {
  alignSelf: 'flex-end',

  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  variants: {
    marginTop: {
      normal: {
        marginTop: '1.5rem',
      },
      bigger: {
        marginTop: '2.5rem',
      },
    },
  },
})

export const ModalButton = styled('button', {
  height: '32px',
  width: '120px',
  borderRadius: '8px',
  color: '$black',
  fontWeight: 700,
  fontSize: '$md',
  border: '1px solid $gray400',
  background: '$white',

  variants: {
    border: {
      gray: {
        borderColor: '$gray400',
      },
      black: {
        borderColor: '$black',
      },
    },
    color: {
      danger: {
        background: '$red500',
        color: '$white',
        border: 0,
      },
      success: {
        background: '$green500',
        color: '$white',
        border: 0,
      },
    },
  },
})
