import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AuthState {
  username: string
}

const initialState: AuthState = { username: '' }

export const authSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    login: (state, { payload }) => {},
  },
})

export const { login } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export const authReducer = authSlice.reducer
