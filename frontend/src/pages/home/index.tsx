import React from 'react'
import { BackgroundContainer, Container, Content } from './styles'

import Header from '../../layout/header'
import UserSection from '../../layout/userSection'
import TasksSection from '../../layout/tasksSection'

const Home: React.FC = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Header />
        <Content>
          <UserSection />
          <TasksSection />
        </Content>
      </Container>
    </BackgroundContainer>
  )
}

export default Home
