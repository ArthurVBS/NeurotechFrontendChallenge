import React from 'react'
import { Container, Input, InputWrapper, Label, Title } from './styles'

type Props = {
  state: any
  setState: React.SetStateAction<any>
}

const Radio: React.FC<Props> = ({ state, setState }) => {
  const handleChange = () => {
    setState(!state)
  }

  return (
    <Container>
      <Title htmlFor="div-radio">Você tem github?</Title>
      <InputWrapper id="div-radio">
        <Label checked={state === true} htmlFor="input-radio-yes">
          Sim
          <Input
            type="radio"
            name="hasGithub"
            id="input-radio-yes"
            checked={state === true}
            onChange={() => handleChange()}
          />
        </Label>

        <Label checked={state === false} htmlFor="input-radio-no">
          Não
          <Input
            type="radio"
            name="hasGithub"
            id="input-radio-no"
            checked={state === false}
            onChange={() => handleChange()}
          />
        </Label>
      </InputWrapper>
    </Container>
  )
}

export default Radio
