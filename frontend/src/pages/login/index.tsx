import React from 'react'
import Field from '../../components/field'

import { useAuth } from '../../contexts/authContext'
import { capitalizeSentence } from '../../utils/capitalizeSentence'
import { validateName } from '../../utils/validate'
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
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateName(name) && password) {
      login(capitalizeSentence(name), 'email@email.com', password)
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
          <Field label="Nome" type="text" state={name} setState={setName} />
          <Field
            label="Senha"
            type="password"
            state={password}
            setState={setPassword}
          />
          <SubmitButton>Continuar</SubmitButton>
        </FormContainer>
      </Container>
    </BackgroundContainer>
  )
}

export default Login
