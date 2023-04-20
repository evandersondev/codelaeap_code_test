import { authActions } from './../../actions/authActions'
import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  username: string
}

const initialState: ModalState = {
  username: localStorage.getItem('@codeleap:username') || '',
}

export const authSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    saveUsername: authActions.saveUsername,
    removeUsername: authActions.removeUsername,
  },
})

export const { saveUsername, removeUsername } = authSlice.actions
export const authReducer = authSlice.reducer
