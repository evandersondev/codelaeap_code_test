import { useEffect, useState } from 'react'
import { PostItem } from './components/PostItem'
import { HomeContent, HomeForm, HomeHeader, HomeWrapper } from './styles'
import { api } from '../../services/api'
import { z } from 'zod'

const requestSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      id: z.number(),
      username: z.string(),
      created_datetime: z.string(),
      title: z.string(),
      content: z.string(),
    }),
  ),
})

type RequestType = z.infer<typeof requestSchema>

interface Post {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    api.get<RequestType>('/careers/').then((response) => {
      const { results } = requestSchema.parse(response)
      setPosts(results)
    })
  }, [])

  return (
    <HomeWrapper>
      <HomeHeader>
        <h1>CodeLeap Network</h1>
      </HomeHeader>

      <HomeContent>
        <HomeForm>
          <h3>What's on your mind?</h3>

          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Hello World" />

          <label htmlFor="content">Content</label>
          <textarea id="content" placeholder="Content here" />

          <button>Create</button>
        </HomeForm>

        {posts.map((post, index) => {
          return <PostItem key={index} post={post} />
        })}
      </HomeContent>
    </HomeWrapper>
  )
}
