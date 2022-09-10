import React from 'react'
import { BackgroundContainer, Container, Content } from './styles'

import Header from '../../layout/header'
import UserSection from '../../layout/userSection'
import TasksSection from '../../layout/tasksSection'
import Modal from '../../layout/modal'

const Home: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <BackgroundContainer>
      <Container>
        <Header />
        {showModal && <Modal setShowModal={setShowModal} />}
        <Content>
          <UserSection />
          <TasksSection setShowModal={setShowModal} />
        </Content>
      </Container>
    </BackgroundContainer>
  )
}

export default Home
