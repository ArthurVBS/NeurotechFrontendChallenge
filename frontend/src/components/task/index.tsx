import React from 'react'
import { useModal } from '../../contexts/modalContext'
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
  Button,
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
  const { setModal } = useModal()

  const deleteTask = async () => {
    await deleteTodo(_id)
  }

  const handleClick = () => {
    setShowConfirmCancelButtons(!showConfirmCancelButtons)
  }

  const handleClickDelete = () => {
    setTasksHaveChanged(true)
    deleteTask()
  }

  const displayButton = () => {
    return (
      <abbr title="Excluir">
        <Button onClick={() => handleClick()}>
          <i className="far fa-trash-alt"></i>
        </Button>
      </abbr>
    )
  }

  const displayConfirmCancelButtons = () => {
    return (
      <ButtonWrapper>
        <abbr title="Não apagar">
          <CancelButton onClick={() => handleClick()}>
            <i className="fas fa-times"></i>
          </CancelButton>
        </abbr>
        <abbr title="Apagar">
          <ConfirmButton onClick={() => handleClickDelete()}>
            <i className="fas fa-check"></i>
          </ConfirmButton>
        </abbr>
      </ButtonWrapper>
    )
  }

  const handleClickUpdate = () => {
    setModal({ _id: _id, action: 'update', show: true })
  }

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>

      <abbr title="Alterar">
        <Button onClick={() => handleClickUpdate()}>
          <i className="fas fa-pencil-alt"></i>
        </Button>
      </abbr>

      {showConfirmCancelButtons
        ? displayConfirmCancelButtons()
        : displayButton()}
    </Container>
  )
}

export default Task
