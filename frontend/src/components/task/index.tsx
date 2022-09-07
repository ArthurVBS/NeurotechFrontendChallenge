import React from 'react'
import { Container, Content, Description, Title, TrashButton } from './styles'

type Props = {
  _id: string
  title: string
  description: string
}

const Task: React.FC<Props> = ({ _id, title, description }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>

      <TrashButton>
        <i className="far fa-trash-alt"></i>
      </TrashButton>
    </Container>
  )
}

export default Task
