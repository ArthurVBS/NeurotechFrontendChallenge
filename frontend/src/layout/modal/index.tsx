import React, { useEffect } from 'react'

import Field from '../../components/field'
import TextArea from '../../components/textarea'

import { useModal } from '../../contexts/modalContext'
import { useTasks } from '../../contexts/tasksContext'
import {
  createTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
} from '../../services/api'

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

  const addTask = async () => {
    await createTodo({ title, description })
    setTasksHaveChanged(true)
    setModal({ _id: '', action: 'none', show: false })
  }

  const deleteTask = async () => {
    await deleteTodo(modal._id)
    setTasksHaveChanged(true)
    setModal({ _id: '', action: 'none', show: false })
  }

  const updateTask = async () => {
    await updateTodo(modal._id, { title, description })
    setTasksHaveChanged(true)
    setModal({ _id: '', action: 'none', show: false })
  }

  const getTaskById = async () => {
    const response = await getTodoById(modal._id)
    setTitle(response.data.title)
    setDescription(response.data.description)
  }

  useEffect(() => {
    try {
      if (modal.action !== 'add') {
        getTaskById()
      }
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (modal.action === 'add') {
        addTask()
      } else if (modal.action === 'update') {
        updateTask()
      } else if (modal.action === 'delete') {
        deleteTask()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = () => {
    setModal({ _id: '', action: 'none', show: false })
  }

  const displayTitle = () => {
    if (modal.action == 'add') {
      return 'Criar Tarefa'
    } else if (modal.action == 'delete') {
      return 'Apagar Tarefa'
    } else if (modal.action == 'update') {
      return 'Alterar Tarefa'
    }
  }

  const displaySubmitButton = () => {
    if (modal.action == 'add') {
      return 'Adicionar'
    } else if (modal.action == 'delete') {
      return 'Apagar'
    } else if (modal.action == 'update') {
      return 'Alterar'
    }
  }

  return (
    <BackgroundContainer>
      <Container onSubmit={e => handleSubmit(e)}>
        <Title>{displayTitle()}</Title>

        <CloseButton onClick={() => handleClick()}>
          <i className="fas fa-times"></i>
        </CloseButton>

        <Field
          type="text"
          state={title}
          setState={setTitle}
          label="Título"
          placeholder={
            modal.action === 'add'
              ? 'Insira o título da tarefa'
              : 'carregando...'
          }
          disabled={modal.action === 'delete'}
        />

        <TextArea
          state={description}
          setState={setDescription}
          label="Descrição"
          placeholder={
            modal.action === 'add'
              ? 'Insira a descrição da tarefa'
              : 'carregando...'
          }
          disabled={modal.action === 'delete'}
        />

        <SubmitButton>{displaySubmitButton()}</SubmitButton>
      </Container>
    </BackgroundContainer>
  )
}

export default Modal
