import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { HomeContent, HomeHeader, HomeWrapper } from './styles'
import {
  useAddPostMutation,
  useGetAllPostsQuery,
} from '../../redux/features/postSlice'
import { PostItem } from './components/PostItem'
import { Button, Form, Title } from '../../components'
import { showSuccessNotification } from '../../utils/notifications'

const addPostSchema = z.object({
  title: z
    .string()
    .min(3, 'The title must be at least 3 characters long')
    .nonempty('Title is required'),
  content: z
    .string()
    .min(10, 'The content must be at least 10 characters long')
    .nonempty('Content is required'),
})

type AddPostData = z.infer<typeof addPostSchema>

export function Home() {
  const username = localStorage.getItem('@codeleap:username')
  const { data: posts } = useGetAllPostsQuery({})
  const [addPost] = useAddPostMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddPostData>({
    resolver: zodResolver(addPostSchema),
  })

  async function hanldeAddNewPost(data: AddPostData) {
    const { title, content } = addPostSchema.parse(data)

    await addPost({
      username: username!,
      title,
      content,
    })

    showSuccessNotification('Post created')

    reset()
  }

  return (
    <HomeWrapper>
      <HomeHeader>
        <Title color="white">CodeLeap Network</Title>
      </HomeHeader>

      <HomeContent>
        <Form onSubmit={handleSubmit(hanldeAddNewPost)} border>
          <Title>What's on your mind?</Title>

          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Hello World"
            {...register('title')}
          />
          {errors.title && <span>{errors.title.message}</span>}

          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Content here"
            {...register('content')}
          />
          {errors.content && <span>{errors.content.message}</span>}

          <Button type="submit">Create</Button>
        </Form>

        {posts?.results.map((post) => {
          return <PostItem key={post.id} post={post} />
        })}
      </HomeContent>
    </HomeWrapper>
  )
}
