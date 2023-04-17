import { MdDeleteForever } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { HomePostContent, PostWrapper } from './styles'
import { Modal } from '../../../../components/Modal'
import { formatDistanceToNow } from 'date-fns'
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from '../../../../redux/features/postSlice'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form } from '../../../../components'

const editPostSchema = z.object({
  title: z.string(),
  content: z.string(),
})

type EditPostData = z.infer<typeof editPostSchema>

interface Post {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

interface PostProps {
  post: Post
}

export function PostItem({ post }: PostProps) {
  const username = localStorage.getItem('@codeleap:username')
  const [editModalIsOpen, setEditmodelIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const [deletePost] = useDeletePostMutation()
  const [editPost] = useUpdatePostMutation()
  const { register, handleSubmit } = useForm<EditPostData>({
    resolver: zodResolver(editPostSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  })

  async function hanldeDeletePost(id: number) {
    await deletePost(id)
    setDeleteModalIsOpen(false)
  }

  async function handleEditPost({ title, content }: EditPostData) {
    await editPost({
      id: post.id,
      title,
      content,
    })
    setEditmodelIsOpen(false)
  }

  function PostItemHeader() {
    return (
      <header>
        <h3>{post.title}</h3>
        {post.username === username && (
          <div>
            <Modal
              isOpen={deleteModalIsOpen}
              onClose={setDeleteModalIsOpen}
              onClick={() => hanldeDeletePost(post.id)}
              actionButtonTitle="Delete"
              variant="danger"
              title="Are you sure you want to delete this item?"
            >
              <MdDeleteForever size={22.5} />
            </Modal>

            <Modal
              isOpen={editModalIsOpen}
              onClose={setEditmodelIsOpen}
              onClick={handleSubmit(handleEditPost)}
              actionButtonTitle="Save"
              variant="success"
              title="Edit item"
              content={
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
              }
            >
              <BiEdit size={22.5} />
            </Modal>
          </div>
        )}
      </header>
    )
  }

  function PostItemInfo() {
    return (
      <section>
        <span>@{post.username}</span>
        <span>
          {formatDistanceToNow(new Date(post.created_datetime), {
            addSuffix: true,
          })}
        </span>
      </section>
    )
  }

  return (
    <HomePostContent>
      <PostWrapper>
        <PostItemHeader />
        <PostItemInfo />

        <p>{post.content}</p>
      </PostWrapper>
    </HomePostContent>
  )
}
