import React from 'react'
import { useAuth } from './contexts/authContext'
import Home from './pages/home'
import Login from './pages/login'

const Routes: React.FC = () => {
  const { user } = useAuth()

  const displayPage = () => {
    return user.auth ? <Home /> : <Login />
  }

  return displayPage()
}

export default Routes
