import styled from 'styled-components'

export const BackgroundContainer = styled.main`
  background-color: ${props => props.theme.background.secondary};
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  padding: 48px;
`

export const Container = styled.div`
  background-color: ${props => props.theme.background.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: 8px;
`
