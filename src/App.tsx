import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { MainRoutes } from './routes/MainRoutes'
import { Container } from './components'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container>
          <MainRoutes />

          <ToastContainer />
        </Container>
      </Provider>
    </BrowserRouter>
  )
}
