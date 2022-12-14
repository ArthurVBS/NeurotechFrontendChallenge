import React from 'react'
import { Container, Input, Label } from './styles'

type Props = {
  label: string
  type: string
  state: any
  setState: React.SetStateAction<any>
  disabled?: boolean
  placeholder?: string
}

const Field: React.FC<Props> = ({
  label,
  type,
  state,
  setState,
  disabled,
  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }

  return (
    <Container>
      <Label htmlFor={label.toLowerCase()}>{label}</Label>
      <Input
        required
        type={type}
        value={state}
        onChange={e => handleChange(e)}
        placeholder={placeholder}
        disabled={disabled}
        id={label.toLowerCase()}
      />
    </Container>
  )
}

export default Field
