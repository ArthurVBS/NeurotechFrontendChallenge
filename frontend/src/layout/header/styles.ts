import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;

  @media (min-width: 768px) {
    background-color: #1a1a21;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: color 0.4s;

  :hover {
    color: ${props => props.theme.color.secondary};
  }
`
