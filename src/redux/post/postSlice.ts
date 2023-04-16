import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface PostsState {
  id: number
  username: string
  title: string
  content: string
  created_datetime: string
}

const initialState: PostsState[] = []

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

export const posts = (state: RootState) => state.posts
export const postReducer = postsSlice.reducer
