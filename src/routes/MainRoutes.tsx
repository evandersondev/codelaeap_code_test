import { Home } from '../pages/Home'
import { Signup } from '../pages/Signup'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoutes'

export function MainRoutes() {
	return (
		<Routes>
			<Route path="/signup" element={<Signup />} />
			<Route
				path="/home/:username"
				element={
					<PrivateRoute redirectTo="/signup">
						<Home />
					</PrivateRoute>
				}
			/>

			<Route path="*" element={<h1>Page not found!</h1>} />
		</Routes>
	)
}
