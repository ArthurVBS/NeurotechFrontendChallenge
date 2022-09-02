import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { BackgroundContainer, Container } from './styles'

const Home: React.FC = () => {
  const { logout } = useAuth()

  return (
    <BackgroundContainer>
      <Container>
        <h1>Home ^^</h1>
        <button onClick={() => logout()}>logout</button>
      </Container>
    </BackgroundContainer>
  )
}

export default Home
