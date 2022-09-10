import React from 'react'
import Field from '../../components/field'
import TextArea from '../../components/textarea'
import { useTasks } from '../../contexts/tasksContext'
import { createTodo } from '../../services/api'
import {
  BackgroundContainer,
  CloseButton,
  Container,
  SubmitButton,
  Title,
} from './styles'

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<Props> = ({ setShowModal }) => {
  const { setTasksHaveChanged } = useTasks()

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  const AddTask = async () => {
    const newTask = {
      title,
      description,
    }

    try {
      await createTodo(newTask)
      setTasksHaveChanged(true)
      setShowModal(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    AddTask()
  }

  const handleClick = () => {
    setShowModal(false)
  }

  return (
    <BackgroundContainer>
      <Container onSubmit={e => handleSubmit(e)}>
        <Title>Criar Tarefa</Title>
        <CloseButton onClick={() => handleClick()}>
          <i className="fas fa-times"></i>
        </CloseButton>
        <Field
          type="text"
          state={title}
          setState={setTitle}
          label="Título"
          placeholder="Insira o título da tarefa"
        />
        <TextArea
          state={description}
          setState={setDescription}
          label="Descrição"
          placeholder="Insira a descrição da tarefa"
        />
        <SubmitButton>Adicionar</SubmitButton>
      </Container>
    </BackgroundContainer>
  )
}

export default Modal
