import React from 'react'
import { BackgroundContainer, Container, Content } from './styles'

import Header from '../../layout/header'
import UserSection from '../../layout/userSection'
import TasksSection from '../../layout/tasksSection'
import Modal from '../../layout/modal'

import { useModal } from '../../contexts/modalContext'

const Home: React.FC = () => {
  const { modal } = useModal()

  return (
    <BackgroundContainer>
      <Container>
        <Header />
        {modal.show && <Modal />}
        <Content>
          <UserSection />
          <TasksSection />
        </Content>
      </Container>
    </BackgroundContainer>
  )
}

export default Home
