import { ModalState } from '../redux/features/authSlice'

interface AuthActionsPayload {
  payload: string
}

export const authActions = {
  saveUsername: (state: ModalState, { payload }: AuthActionsPayload) => {
    localStorage.setItem('@codeleap:username', payload)

    return {
      username: payload,
    }
  },
  removeUsername: (state: ModalState) => {
    localStorage.removeItem('@codeleap:username')

    return {
      username: '',
    }
  },
}
