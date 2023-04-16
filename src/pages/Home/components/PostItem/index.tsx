import { MdDeleteForever } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { HomePostContent, PostForm, PostWrapper } from './styles'
import { Modal } from '../../../../components/Modal'
import { formatDistanceToNow } from 'date-fns'

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
  return (
    <HomePostContent>
      <PostWrapper>
        <header>
          <h3>{post.title}</h3>
          <div>
            <Modal
              actionButtonTitle="Delete"
              variant="danger"
              title="Are you sure you want to delete this item?"
            >
              <MdDeleteForever size={22.5} />
            </Modal>

            <Modal
              actionButtonTitle="Save"
              variant="success"
              title="Edit item"
              content={
                <PostForm>
                  <label htmlFor="title">Title</label>
                  <input id="title" type="text" placeholder="Hello World" />

                  <label htmlFor="content">Content</label>
                  <textarea id="content" placeholder="Content here" />
                </PostForm>
              }
            >
              <BiEdit size={22.5} />
            </Modal>
          </div>
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
