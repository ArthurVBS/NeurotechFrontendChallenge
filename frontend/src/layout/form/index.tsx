import React from 'react'
import { Container, SubmitButton } from './styles'

import { useAuth } from '../../contexts/authContext'
import { capitalizeSentence } from '../../utils/capitalizeSentence'

import Field from '../../components/field'
import Radio from '../../components/radio'

const Form: React.FC = () => {
  const { login } = useAuth()
  const [name, setName] = React.useState('')
  const [hasGithub, setHasGithub] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (name) {
      login(capitalizeSentence(name), hasGithub)
    }
  }

  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <Field
        label={hasGithub ? 'Github' : 'Nome'}
        type="text"
        state={name}
        setState={setName}
      />

      <Radio state={hasGithub} setState={setHasGithub} />
      <SubmitButton>Continuar</SubmitButton>
    </Container>
  )
}

export default Form
