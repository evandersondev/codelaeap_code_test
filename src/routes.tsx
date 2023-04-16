import { Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Home } from './pages/Home'

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/home/:username" element={<Home />} />
    </Routes>
  )
}
