import * as Dialog from '@radix-ui/react-dialog'
import { ModalButton, ModalContent, ModalFooter, ModalWrapper } from './styles'
import { ReactNode } from 'react'

interface ModalProps {
  actionButtonTitle: string
  variant: 'danger' | 'success'
  content?: ReactNode
  children: ReactNode
  title: string
  isOpen: boolean
  onClose: (open: boolean) => void
  onClick: () => void
}

export function Modal({
  title,
  variant,
  actionButtonTitle,
  isOpen = false,
  onClose,
  onClick,
  content,
  children,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Trigger asChild>
        <button onClick={() => {}}>{children}</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalWrapper>
          <ModalContent>
            <Dialog.Title>{title}</Dialog.Title>

            {content}

            <ModalFooter marginTop={content ? 'normal' : 'bigger'}>
              <Dialog.Close asChild>
                <ModalButton border={content ? 'black' : 'gray'}>
                  Cancel
                </ModalButton>
              </Dialog.Close>

              <ModalButton onClick={onClick} color={variant}>
                {actionButtonTitle}
              </ModalButton>
            </ModalFooter>
          </ModalContent>
        </ModalWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
