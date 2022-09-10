import React from 'react'

import Form from '../../layout/form'
import {
  BackgroundContainer,
  Header,
  Title,
  RightContainer,
  Container,
  LeftContainer,
  MobileLogo,
} from './styles'

const Login: React.FC = () => {
  return (
    <BackgroundContainer>
      <Container>
        <LeftContainer>
          <Header>
            <Title>do it!</Title>
            <MobileLogo src="./mobile_logo.svg" alt="mobile logo" />
          </Header>
          <Form />
        </LeftContainer>
        <RightContainer>
          <img src="./desktop_logo.svg" alt="desktop logo" />
        </RightContainer>
      </Container>
    </BackgroundContainer>
  )
}

export default Login
