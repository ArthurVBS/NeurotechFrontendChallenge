import React from 'react'
import { useAuth } from '../../contexts/authContext'
import {
  Container,
  Footer,
  GithubImg,
  Header,
  SmileImg,
  TextWrapper,
  Title,
} from './styles'

const UserSection: React.FC = () => {
  const { user } = useAuth()

  const displayGithubUserImg = () => {
    return <GithubImg src={user.github.avatar} alt="User profile" />
  }

  const displaySmileUserImg = () => {
    return (
      <SmileImg>
        <img src="./smile.svg" alt="User profile" />
      </SmileImg>
    )
  }

  return (
    <Container>
      <Header>
        {user.github.has ? displayGithubUserImg() : displaySmileUserImg()}
        <Title>Olá, {user.name}!</Title>
      </Header>
      <Footer>
        <img src="./medium_logo.svg" alt="logo" />
        <TextWrapper>
          <h3>do it!</h3>
          <p>seu to do app favorito ;)</p>
        </TextWrapper>
      </Footer>
    </Container>
  )
}

export default UserSection
