import styled from 'styled-components'

export const BackgroundContainer = styled.main`
  background-color: ${props => props.theme.background.secondary};
  // background-image: ${props => props.theme.color.gradient};
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  padding: 32px 24px;

  @media (min-width: 768px) {
    padding: 48px;
  }
`

export const Container = styled.div`
  background-color: ${props => props.theme.background.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  flex-grow: 1;
  padding: 32px;
  border-radius: 16px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2.8em;
`

export const FormContainer = styled.form`
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
