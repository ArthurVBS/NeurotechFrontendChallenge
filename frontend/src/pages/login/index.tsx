import React from 'react'
import Field from '../../components/field'
import Radio from '../../components/radio'

import { useAuth } from '../../contexts/authContext'
import { capitalizeSentence } from '../../utils/capitalizeSentence'
import {
  BackgroundContainer,
  Container,
  FormContainer,
  Header,
  SubmitButton,
  Title,
} from './styles'

const Login: React.FC = () => {
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
    <BackgroundContainer>
      <Container>
        <Header>
          <Title>do it!</Title>
          <img src="./mobile_logo.svg" alt="mobile logo" />
        </Header>

        <FormContainer onSubmit={e => handleSubmit(e)}>
          <Field
            label={hasGithub ? 'Github' : 'Nome'}
            type="text"
            state={name}
            setState={setName}
          />

          <Radio state={hasGithub} setState={setHasGithub} />
          <SubmitButton>Continuar</SubmitButton>
        </FormContainer>
      </Container>
    </BackgroundContainer>
  )
}

export default Login
