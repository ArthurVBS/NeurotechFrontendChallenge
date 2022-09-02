import React, { useEffect } from 'react'

import { useUser } from '../../contexts/authContext'
import { Container } from './styles'

const Login: React.FC = () => {
  const { login } = useUser()

  useEffect(() => {
    login('John Doe', 'johndoe@gmail.com', '123456')
  }, [])

  return <Container>Login ^^</Container>
}

export default Login
