import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.background.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  padding: 12px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 8px;
  padding: 8px;
`

export const Title = styled.h1`
  color: ${props => props.theme.color.secondary};
  font-size: 1em;
`

export const Description = styled.p`
  font-size: 0.9em;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.background.secondary};
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.5em;
  border: none;
  padding: 8px;
  transition: color 0.4s;

  :hover {
    color: ${props => props.theme.color.secondary};
  }
`
