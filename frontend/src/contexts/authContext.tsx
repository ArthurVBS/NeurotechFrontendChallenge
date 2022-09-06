import { createContext, ReactNode, useContext } from 'react'
import { getData } from '../services/githubApi'
import usePersistedState from '../utils/usePersistedState'

interface IGithub {
  has: boolean
  avatar: string
}

interface IUser {
  auth: boolean
  name: string
  github: IGithub
}

type AuthContextType = {
  user: IUser
  login: (name: string, hasGithub: boolean) => void
  logout: () => void
}

const initialValue = {
  user: {
    auth: false,
    name: '',
    github: {
      has: false,
      avatar: '',
    },
  },
  login: (name: string, hasGithub: boolean) => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextType>(initialValue)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = usePersistedState('user', initialValue.user)

  const login = async (name: string, hasGithub: boolean) => {
    let github: IGithub = initialValue.user.github

    if (hasGithub) {
      const response = await getData(name)

      if (response.status === 200) {
        github = {
          has: true,
          avatar: response.data.avatar_url,
        }
        name = response.data.name
      }
    }

    setUser({ auth: true, name: name, github: github })
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
