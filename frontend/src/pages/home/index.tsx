import React, { useEffect, useState } from 'react'
import Task from '../../components/task'
import { useAuth } from '../../contexts/authContext'
import { useTasks } from '../../contexts/tasksContext'
import { ResponseType } from '../../types/response'
import { getAllTodos } from '../../services/api'
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
  const { tasksHaveChanged, setTasksHaveChanged } = useTasks()
  const [tasks, setTasks] = useState<ResponseType[]>([])

  const getTasks = async () => {
    const response = await getAllTodos()

    if (response.status == 200) {
      setTasks(response.data)
    }
  }

  useEffect(() => {
    getTasks()
    setTasksHaveChanged(false)
  }, [tasksHaveChanged])

  const displayTasks = () => {
    return tasks.map(task => (
      <Task
        key={task._id}
        _id={task._id}
        title={task.title}
        description={task.description}
      />
    ))
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
          <TasksWrapper>{displayTasks()}</TasksWrapper>
          <AddTaskButton>+</AddTaskButton>
        </TasksSection>
      </Container>
    </BackgroundContainer>
  )
}

export default Home
