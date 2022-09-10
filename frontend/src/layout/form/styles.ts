import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
`

export const SubmitButton = styled.button`
  background-image: ${props => props.theme.color.gradient};
  color: ${props => props.theme.background.primary};
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1em;
  margin-top: 24px;
  padding: 12px;
  border: none;
`
