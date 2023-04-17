import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

interface ModalState {
  open: boolean
}

const initialState: ModalState = {
  open: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    hanldeModelOpen: (state) => {
      return {
        ...state,
        ope: !state,
      }
    },
    
  },
})

export const { hanldeModelOpen } = modalSlice.actions
export const modalReducer = modalSlice.reducer
