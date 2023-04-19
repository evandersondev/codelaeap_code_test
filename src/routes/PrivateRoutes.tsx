import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { RootState } from '../redux/store'
import { ReactElement, useEffect } from 'react'

interface PrivateRouteProps {
	children: ReactElement
	redirectTo: string
}

export function PrivateRoute({ children, redirectTo }: PrivateRouteProps) {
	const location = useLocation()
	const navigate = useNavigate()
	const isAuthenticated = useSelector((state: RootState) => state.auth.username)

	useEffect(() => {
		if (!location.pathname.includes(isAuthenticated)) {
			navigate(redirectTo)
		}
	}, [isAuthenticated])

	return isAuthenticated ? children : <Navigate to={redirectTo} />
}
