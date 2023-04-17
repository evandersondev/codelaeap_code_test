import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { z } from 'zod'

interface Post {
  id?: string
  username: string
  title: string
  content: string
}

interface PostUpdate {
  id: number
  title: string
  content: string
}

const requestSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      id: z.number(),
      username: z.string().refine((username) => username.toLowerCase()),
      created_datetime: z.string(),
      title: z.string(),
      content: z.string(),
    }),
  ),
})

type RequestType = z.infer<typeof requestSchema>

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev.codeleap.co.uk/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getAllPosts: builder.query<RequestType, {}>({
      query: () => 'careers/',
      providesTags: ['Post'],
    }),
    addPost: builder.mutation<void, Post>({
      query: (post) => ({
        url: 'careers/',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation<void, PostUpdate>({
      query: ({ id, ...rest }) => ({
        url: `careers/${id}/`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `careers/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

export const {
  useGetAllPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi
