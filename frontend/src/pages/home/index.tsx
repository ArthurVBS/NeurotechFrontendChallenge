import React from 'react'
import Task from '../../components/task'
import { useAuth } from '../../contexts/authContext'
import {
  BackgroundContainer,
  Container,
  Header,
  LogoutButton,
  TasksSection,
  TasksTitle,
  UserSection,
  UserImg,
  UserTitle,
  TasksWrapper,
  AddTaskButton,
} from './styles'

const Home: React.FC = () => {
  const { user, logout } = useAuth()

  const getTasks = () => {
    return (
      <>
        <Task _id={1} title="Teste" description="Testando o teste" />
        <Task _id={2} title="Teste 2" description="Testando o teste 2" />
        <Task _id={3} title="Teste 3" description="Testando o teste 3" />
      </>
    )
  }

  const displayAvatar = () => {
    return user.github.has ? (
      <UserImg src={user.github.avatar} alt="User profile" />
    ) : (
      <p>Sem imagem...</p>
    )
  }

  return (
    <BackgroundContainer>
      <Container>
        <Header>
          <LogoutButton onClick={() => logout()}>
            <i className="fas fa-angle-double-left"></i>
            <span>Sair</span>
          </LogoutButton>
          <img src="./favicon.svg" alt="logo" />
        </Header>

        <UserSection>
          {displayAvatar()}
          <UserTitle>Olá, {user.name}!</UserTitle>
        </UserSection>

        <TasksSection>
          <TasksTitle>Minhas Tasks</TasksTitle>
          <TasksWrapper>{getTasks()}</TasksWrapper>
          <AddTaskButton>+</AddTaskButton>
        </TasksSection>
      </Container>
    </BackgroundContainer>
  )
}

export default Home