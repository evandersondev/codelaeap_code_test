import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { z } from 'zod'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from '../../../../redux/features/postSlice'
import { Form } from '../../../../components'
import { ModalButton, ModalContent, ModalFooter, ModalWrapper } from './styles'
import { showSuccessNotification } from '../../../../utils/notifications'

const postSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(3, 'The title must be at least 3 characters long')
    .nonempty('Title is required'),
  content: z
    .string()
    .min(10, 'The content must be at least 10 characters long')
    .nonempty('Content is required'),
})

type PostData = z.infer<typeof postSchema>

interface ModalProps {
  type: 'edit' | 'delete'
  post: PostData
}

export function Modal({ type, post }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [editPost] = useUpdatePostMutation()
  const [deletePost] = useDeletePostMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      id: post.id,
      title: post.title,
      content: post.content,
    },
  })

  async function handleEditPost({ id, title, content }: PostData) {
    await editPost({
      id,
      title,
      content,
    })
    setIsOpen(false)
    showSuccessNotification('Post updated successfully')
  }

  async function handleDeletePost() {
    await deletePost(post.id)
    setIsOpen(false)
    showSuccessNotification('Post deleted successfully')
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button>
          {type === 'edit' ? (
            <BiEdit size={22.5} />
          ) : (
            <MdDeleteForever size={22.5} />
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalWrapper>
          <ModalContent>
            <Dialog.Title>
              {type === 'edit'
                ? 'Edit item'
                : 'Are you sure you want to delete this item?'}
            </Dialog.Title>

            {type === 'edit' && (
              <Form>
                <label htmlFor="title">Title</label>
                <input
                  {...register('title')}
                  id="title"
                  type="text"
                  placeholder="Hello World"
                />
                {errors.title && <span>{errors.title.message}</span>}

                <label htmlFor="content">Content</label>
                <textarea
                  {...register('content')}
                  id="content"
                  placeholder="Content here"
                />
                {errors.content && <span>{errors.content.message}</span>}
              </Form>
            )}

            <ModalFooter marginTop={type === 'edit' ? 'normal' : 'bigger'}>
              <Dialog.Close asChild>
                <ModalButton border={type === 'edit' ? 'black' : 'gray'}>
                  Cancel
                </ModalButton>
              </Dialog.Close>

              <ModalButton
                onClick={
                  type === 'edit'
                    ? handleSubmit(handleEditPost)
                    : handleDeletePost
                }
                color={type === 'edit' ? 'success' : 'danger'}
              >
                {type === 'edit' ? 'Save' : 'Delete'}
              </ModalButton>
            </ModalFooter>
          </ModalContent>
        </ModalWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
