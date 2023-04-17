import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { MainRoutes } from './routes'
import { Container } from './components'
import { AuthContextProvider } from './contexts/AuthContext'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { postsApi } from './redux/features/postSlice'

export function App() {
  return (
    <BrowserRouter>
      <ApiProvider api={postsApi}>
        <AuthContextProvider>
          <Container>
            <MainRoutes />

            <ToastContainer />
          </Container>
        </AuthContextProvider>
      </ApiProvider>
    </BrowserRouter>
  )
}
