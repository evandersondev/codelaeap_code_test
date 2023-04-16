import { ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  username: string
  login: (username: string) => void
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  useEffect(() => {
    const usernameFromLocalstorage = localStorage.getItem('@codeleap:username')

    if (usernameFromLocalstorage) {
      setUsername(usernameFromLocalstorage)
      navigate(`/home/${username}`)
    } else {
      navigate('/signup')
    }
  }, [username])

  function login(username: string) {
    localStorage.setItem('@codeleap:username', username)

    navigate(`/home/${username}`)
  }

  return (
    <AuthContext.Provider value={{ username, login }}>
      {children}
    </AuthContext.Provider>
  )
}
