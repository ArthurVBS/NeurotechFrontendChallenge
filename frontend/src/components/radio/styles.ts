import styled from 'styled-components'

interface IProps {
  checked: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
`

export const Title = styled.label`
  font-weight: 700;
  font-size: 1.1em;
  letter-spacing: 1px;
`

export const InputWrapper = styled.div`
  background-color: ${props => props.theme.background.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 6px;
  border-radius: 4px;
`

export const Input = styled.input.attrs({
  type: 'radio',
})`
  display: none;
`

export const Label = styled.label<IProps>`
  background-color: ${props =>
    props.checked
      ? props.theme.color.tertiary
      : props.theme.background.secondary};
  color: ${props => props.theme.text};
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.4s;

  :hover {
    background-color: ${props => props.theme.color.primary};
  }
`
