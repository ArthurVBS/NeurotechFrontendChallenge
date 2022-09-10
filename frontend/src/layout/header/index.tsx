import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Container, LogoutButton } from './styles'

const Header: React.FC = () => {
  const { logout } = useAuth()

  return (
    <Container>
      <LogoutButton onClick={() => logout()}>
        <i className="fas fa-angle-double-left"></i>
        <span>Sair</span>
      </LogoutButton>
      <img src="./favicon.svg" alt="logo" />
    </Container>
  )
}

export default Header
