import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #00000080;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Container = styled.form`
  background-color: ${props => props.theme.background.primary};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
  font-size: 0.9em;
  width: 100%;
  max-width: 450px;
  border: 4px solid ${props => props.theme.background.secondary};
  border-radius: 8px;
  box-shadow: 0px 0px 8px 4px ${props => props.theme.background.primary};
  padding: 32px;
  margin: 16px;
`

export const CloseButton = styled.span`
  background-color: transparent;
  color: ${props => props.theme.text};
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.1em;
  width: 32px;
  height: 32px;
  border: none;
  padding: 8px;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.color.secondary};
  }
`

export const Title = styled.h2`
  color: ${props => props.theme.color.secondary};
  margin-bottom: 16px;
`

export const SubmitButton = styled.button`
  background-image: ${props => props.theme.color.gradient};
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin-top: 16px;
`
