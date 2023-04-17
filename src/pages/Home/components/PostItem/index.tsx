import { MdDeleteForever } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { HomePostContent, PostWrapper } from './styles'
import { Modal } from '../../../../components/Modal'
import { formatDistanceToNow } from 'date-fns'
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from '../../../../redux/features/postSlice'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { number, z } from 'zod'
import { Form } from '../../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'



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

  return (
    <HomePostContent>
      <PostWrapper>
      <header>
        <h3>{post.title}</h3>
        {post.username === username && (
          <div>
            <Modal
            post={post}
            type='delete'
              actionButtonTitle="Delete"
              variant="danger"
              title="Are you sure you want to delete this item?"
            >
              <MdDeleteForever size={22.5} />
            </Modal>

            <Modal
              post={post}
              type='edit'
              actionButtonTitle="Save"
              variant="success"
              title="Edit item"
            >
              <BiEdit size={22.5} />
            </Modal>
          </div>
        )}
      </header>
        
      <section>
        <span>@{post.username}</span>
        <span>
          {formatDistanceToNow(new Date(post.created_datetime), {
            addSuffix: true,
          })}
        </span>
      </section>

        <p>{post.content}</p>
      </PostWrapper>
    </HomePostContent>
  )
}
