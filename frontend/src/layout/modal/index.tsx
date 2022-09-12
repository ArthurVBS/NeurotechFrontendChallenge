import React, { useEffect } from 'react'

import Field from '../../components/field'
import TextArea from '../../components/textarea'
import { useModal } from '../../contexts/modalContext'

import { useTasks } from '../../contexts/tasksContext'
import { createTodo, getTodoById, updateTodo } from '../../services/api'

import {
  BackgroundContainer,
  CloseButton,
  Container,
  SubmitButton,
  Title,
} from './styles'

const Modal: React.FC = () => {
  const { setTasksHaveChanged } = useTasks()
  const { modal, setModal } = useModal()

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  const AddTask = async () => {
    try {
      await createTodo({ title, description })
      setTasksHaveChanged(true)
      setModal({ _id: '', action: 'none', show: false })
    } catch (err) {
      console.log(err)
    }
  }

  const UpdateTask = async () => {
    try {
      await updateTodo(modal._id, { title, description })
      setTasksHaveChanged(true)
      setModal({ _id: '', action: 'none', show: false })
    } catch (err) {
      console.log(err)
    }
  }

  const GetTaskById = async () => {
    try {
      const response = await getTodoById(modal._id)
      setTitle(response.data.title)
      setDescription(response.data.description)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (modal.action == 'update') {
      GetTaskById()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    modal.action === 'add' ? AddTask() : UpdateTask()
  }

  const handleClick = () => {
    setModal({ _id: '', action: 'none', show: false })
  }

  return (
    <BackgroundContainer>
      <Container onSubmit={e => handleSubmit(e)}>
        <Title>
          {modal.action === 'add' ? 'Criar Tarefa' : 'Alterar Tarefa'}
        </Title>

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

        <SubmitButton>
          {modal.action === 'add' ? 'Adicionar' : 'Alterar'}
        </SubmitButton>
      </Container>
    </BackgroundContainer>
  )
}

export default Modal
