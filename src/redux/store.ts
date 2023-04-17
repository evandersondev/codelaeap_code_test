import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './features/modalSlice'
import { postsApi } from './features/postSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: (gDM) => gDM().concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)