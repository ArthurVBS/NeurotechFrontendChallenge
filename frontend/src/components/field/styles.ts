import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
`

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.1em;
  letter-spacing: 1px;
`

export const Input = styled.input`
  background-color: ${props => props.theme.background.secondary};
  color: ${props => props.theme.text};
  font-size: 1em;
  min-height: 40px;
  padding: 8px;
  border-radius: 4px;
  border: none;
`
