import React, { useEffect, useState } from 'react'
import { AddTaskButton, Container, Header, TasksWrapper, Title } from './styles'

import Task from '../../components/task'
import { useTasks } from '../../contexts/tasksContext'
import { getAllTodos } from '../../services/api'
import { ResponseType } from '../../types/response'
import { MessageType } from '../../types/message'

const TasksSection: React.FC = () => {
  const { tasksHaveChanged, setTasksHaveChanged } = useTasks()
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

    const response = await getAllTodos()
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

  return (
    <Container>
      <Header>
        <Title>Minhas tasks</Title>
        <AddTaskButton>+</AddTaskButton>
      </Header>
      <TasksWrapper>
        {message.show ? displayMessage() : displayTasks()}
      </TasksWrapper>
    </Container>
  )
}

export default TasksSection
