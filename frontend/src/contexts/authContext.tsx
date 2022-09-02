import { createContext, ReactNode, useContext } from 'react'
import usePersistedState from '../utils/usePersistedState'

interface IUser {
  auth: boolean
  name: string
  email: string
  password: string
}

type AuthContextType = {
  user: IUser
  login: (name: string, email: string, password: string) => void
  logout: () => void
}

const initialValue = {
  user: {
    auth: false,
    name: '',
    email: '',
    password: '',
  },
  login: (name: string, email: string, password: string) => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextType>(initialValue)

export const useUser = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = usePersistedState('user', initialValue.user)

  const login = (name: string, email: string, password: string) => {
    setUser({ auth: true, name: name, email: email, password: password })
  }

  const logout = () => {
    setUser(initialValue.user)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
