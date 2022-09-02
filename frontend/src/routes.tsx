import React from 'react'
import { useUser } from './contexts/authContext'
import Home from './pages/home'
import Login from './pages/login'

const Routes: React.FC = () => {
  const { user } = useUser()

  const displayPage = () => {
    return user.auth ? <Home /> : <Login />
  }

  return displayPage()
}

export default Routes
