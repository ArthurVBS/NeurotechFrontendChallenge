import React from 'react'
import { deleteTodo } from '../../services/api'
import { Container, Content, Description, Title, TrashButton } from './styles'

type Props = {
  _id: string
  title: string
  description: string
}

const Task: React.FC<Props> = ({ _id, title, description }) => {
  const deleteTask = async () => {
    await deleteTodo(_id)
  }

  const handleClick = () => {
    deleteTask()
  }

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>

      <TrashButton onClick={() => handleClick()}>
        <i className="far fa-trash-alt"></i>
      </TrashButton>
    </Container>
  )
}

export default Task
