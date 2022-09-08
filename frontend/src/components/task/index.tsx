import React from 'react'
import { useTasks } from '../../contexts/tasksContext'
import { deleteTodo } from '../../services/api'
import {
  ButtonWrapper,
  CancelButton,
  ConfirmButton,
  Container,
  Content,
  Description,
  Title,
  TrashButton,
} from './styles'

type Props = {
  _id: string
  title: string
  description: string
}

const Task: React.FC<Props> = ({ _id, title, description }) => {
  const [showConfirmCancelButtons, setShowConfirmCancelButtons] =
    React.useState(false)
  const { setTasksHaveChanged } = useTasks()

  const deleteTask = async () => {
    await deleteTodo(_id)
  }

  const handleClick = () => {
    setShowConfirmCancelButtons(!showConfirmCancelButtons)
  }

  const handleClickDelete = () => {
    deleteTask()
    setTasksHaveChanged(true)
  }

  const displayTrashButton = () => {
    return (
      <TrashButton onClick={() => handleClick()}>
        <i className="far fa-trash-alt"></i>
      </TrashButton>
    )
  }

  const displayConfirmCancelButtons = () => {
    return (
      <ButtonWrapper>
        <CancelButton onClick={() => handleClick()}>
          <i className="fas fa-times"></i>
        </CancelButton>
        <ConfirmButton onClick={() => handleClickDelete()}>
          <i className="fas fa-check"></i>
        </ConfirmButton>
      </ButtonWrapper>
    )
  }

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>

      {showConfirmCancelButtons
        ? displayConfirmCancelButtons()
        : displayTrashButton()}
    </Container>
  )
}

export default Task
