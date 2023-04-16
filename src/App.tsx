import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes'
import { Container } from './components/Container'
import { AuthContextProvider } from './contexts/AuthContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <Container>
            <MainRoutes />
          </Container>
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  )
}
