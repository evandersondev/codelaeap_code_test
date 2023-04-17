import * as Dialog from '@radix-ui/react-dialog'
import { ModalButton, ModalContent, ModalFooter, ModalWrapper } from './styles'
import { ReactNode } from 'react'
import { Form } from '../Form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDeletePostMutation, useUpdatePostMutation } from '../../redux/features/postSlice'
import { hanldeModelOpen } from '../../redux/features/modalSlice'

const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
})

type PostData = z.infer<typeof postSchema>

interface ModalProps {
  actionButtonTitle: string
  variant: 'danger' | 'success'
  children: ReactNode
  title: string
  post: PostData
  type: 'edit' | 'delete'
}

export function Modal({
  title,
  variant,
  actionButtonTitle,
  post,
  type,
  children,
}: ModalProps) {
  const dispatch = useDispatch()
  const selectModal = useSelector((state: RootState) => state.modal.open)
  const [deletePost] = useDeletePostMutation()
  const [editPost] = useUpdatePostMutation()
  const { register, handleSubmit } = useForm<PostData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      id: post.id,
      title: post.title,
      content: post.content,
    },
  })

  async function handleDeletePost() {
    // await deletePost(post.id)
    dispatch(hanldeModelOpen())
  }

  async function handleEditPost({ id, title, content }: PostData) {
    await editPost({
      id: id,
      title,
      content,
    })
    dispatch(hanldeModelOpen())
  }

  return (
    <Dialog.Root open={selectModal} onOpenChange={() => dispatch(hanldeModelOpen())}>
      <Dialog.Trigger asChild>
        <button>{children}</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalWrapper>
          <ModalContent>
            <Dialog.Title>{title}</Dialog.Title>

              {type === 'edit' && (
                <Form>
                <label htmlFor="title">Title</label>
                <input
                  {...register('title')}
                  id="title"
                  type="text"
                  placeholder="Hello World"
                />
  
                <label htmlFor="content">Content</label>
                <textarea
                  {...register('content')}
                  id="content"
                  placeholder="Content here"
                />
              </Form>
              )}

            <ModalFooter marginTop={type === 'edit' ? 'normal' : 'bigger'}>
              <Dialog.Close asChild>
                <ModalButton border={type === 'edit' ? 'black' : 'gray'}>
                  Cancel
                </ModalButton>
              </Dialog.Close>

              <ModalButton
                onClick={type === 'edit' ? handleSubmit(handleEditPost) : handleDeletePost} color={variant}>
                {actionButtonTitle}
              </ModalButton>
            </ModalFooter>
          </ModalContent>
        </ModalWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
