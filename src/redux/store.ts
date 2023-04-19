import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './features/postSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authReducer } from './features/authSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[postsApi.reducerPath]: postsApi.reducer,
	},
	middleware: (gDM) => gDM().concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
