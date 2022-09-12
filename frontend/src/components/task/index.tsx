import React from 'react'
import { useModal } from '../../contexts/modalContext'
import {
  Container,
  Content,
  Description,
  Title,
  Button,
  ButtonWrapper,
} from './styles'

type Props = {
  _id: string
  title: string
  description: string
}

const Task: React.FC<Props> = ({ _id, title, description }) => {
  const { setModal } = useModal()

  const handleClickDelete = () => {
    setModal({ _id: _id, action: 'delete', show: true })
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

      <ButtonWrapper>
        <Button onClick={() => handleClickUpdate()}>
          <i className="fas fa-pencil-alt"></i>
        </Button>
        <Button onClick={() => handleClickDelete()}>
          <i className="far fa-trash-alt"></i>
        </Button>
      </ButtonWrapper>
    </Container>
  )
}

export default Task
