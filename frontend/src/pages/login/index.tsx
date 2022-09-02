import React from 'react'

import { useAuth } from '../../contexts/authContext'
import { BackgroundContainer, Container } from './styles'

const Login: React.FC = () => {
  const { login } = useAuth()

  const handleClick = () => {
    login('John Doe', 'johndoe@gmail.com', '123456')
  }

  return (
    <BackgroundContainer>
      <Container>
        <h1>Login ^^</h1>
        <button onClick={() => handleClick()}>login</button>
      </Container>
    </BackgroundContainer>
  )
}

export default Login
