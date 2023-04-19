import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
	username: string
}

const initialState: ModalState = {
	username: localStorage.getItem('@codeleap:username') || '',
}

export const authSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		saveUsername: (state, { payload }) => {
			localStorage.setItem('@codeleap:username', payload)

			return {
				username: payload,
			}
		},
	},
})

export const { saveUsername } = authSlice.actions
export const authReducer = authSlice.reducer
