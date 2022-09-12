import React, { useEffect, useState } from 'react'
import {
  Button,
  ButtonWrapper,
  Container,
  Header,
  TasksWrapper,
  Title,
} from './styles'

import Task from '../../components/task'
import { useTasks } from '../../contexts/tasksContext'
import { getAllTodo } from '../../services/api'

import { ResponseType } from '../../types/response'
import { MessageType } from '../../types/message'
import { useModal } from '../../contexts/modalContext'

const TasksSection: React.FC = () => {
  const { tasksHaveChanged, setTasksHaveChanged } = useTasks()
  const { modal, setModal } = useModal()

  const [message, setMessage] = useState<MessageType>({
    msg: '',
    show: false,
  })
  const [tasks, setTasks] = useState<ResponseType[]>([])

  const getTasks = async () => {
    setMessage({
      msg: 'A obter as tasks...',
      show: true,
    })

    const response = await getAllTodo()
    response.status == 200
      ? (setTasks(response.data), setMessage({ msg: '', show: false }))
      : setMessage({
          msg: 'Ocorreu um erro ao obter as tasks.',
          show: true,
        })
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

  const displayMessage = () => {
    return <h3>{message.msg}</h3>
  }

  const handleClickAddTask = () => {
    setModal({ _id: '', action: 'add', show: true })
  }

  const handleClickRefreshTasks = () => {
    setTasksHaveChanged(true)
  }

  return (
    <Container>
      <Header>
        <Title>Minhas tasks</Title>
        <ButtonWrapper hide={modal.show}>
          <Button onClick={() => handleClickRefreshTasks()}>
            <i className="fas fa-sync"></i>
          </Button>
          <Button onClick={() => handleClickAddTask()}>
            <i className="fas fa-plus"></i>
          </Button>
        </ButtonWrapper>
      </Header>
      <TasksWrapper>
        {message.show ? displayMessage() : displayTasks()}
      </TasksWrapper>
    </Container>
  )
}

export default TasksSection
