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
  UserGithubImg,
  UserSmileImg,
  UserTitle,
  TasksWrapper,
  AddTaskButton,
  Content,
  TasksHeader,
  UserHeader,
  UserFooter,
  UserTextWrapper,
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

  const displayGithubUserImg = () => {
    return <UserGithubImg src={user.github.avatar} alt="User profile" />
  }

  const displaySmileUserImg = () => {
    return (
      <UserSmileImg>
        <img src="./smile.svg" alt="User profile" />
      </UserSmileImg>
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

        <Content>
          <UserSection>
            <UserHeader>
              {user.github.has ? displayGithubUserImg() : displaySmileUserImg()}
              <UserTitle>Olá, {user.name}!</UserTitle>
            </UserHeader>
            <UserFooter>
              <img src="./medium_logo.svg" alt="logo" />
              <UserTextWrapper>
                <h3>do it!</h3>
                <p>seu to do app favorito ;)</p>
              </UserTextWrapper>
            </UserFooter>
          </UserSection>

          <TasksSection>
            <TasksHeader>
              <TasksTitle>Minhas tasks</TasksTitle>
              <AddTaskButton>+</AddTaskButton>
            </TasksHeader>
            <TasksWrapper>{displayTasks()}</TasksWrapper>
          </TasksSection>
        </Content>
      </Container>
    </BackgroundContainer>
  )
}

export default Home
