import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { MainRoutes } from './routes'
import { Container } from './components'
import { AuthContextProvider } from './contexts/AuthContext'
import { postsApi } from './redux/features/postSlice'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export function App() {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <AuthContextProvider>
            <Container>
              <MainRoutes />

              <ToastContainer />
            </Container>
          </AuthContextProvider>
        </Provider>
    </BrowserRouter>
  )
}
