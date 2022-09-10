import React from 'react'
import { Area, Container, Label } from './styles'

type Props = {
  label: string
  state: any
  setState: React.SetStateAction<any>
  placeholder?: string
}

const TextArea: React.FC<Props> = ({ label, state, setState, placeholder }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value)
  }

  return (
    <Container>
      <Label htmlFor={label.toLowerCase()}>{label}</Label>
      <Area
        required
        value={state}
        onChange={e => handleChange(e)}
        placeholder={placeholder}
        id={label.toLowerCase()}
      />
    </Container>
  )
}

export default TextArea
