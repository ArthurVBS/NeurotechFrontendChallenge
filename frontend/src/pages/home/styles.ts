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
  position: relative;
  background-color: ${props => props.theme.background.primary};
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-grow: 1;
  border-radius: 16px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
`

export const LogoutButton = styled.button`
  background-color: ${props => props.theme.background.primary};
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

export const UserSection = styled.section`
  padding: 8px 24px;
`

export const UserTitle = styled.h1`
  font-size: 1.3em;
`

export const UserImg = styled.img`
  display: none;
  border-radius: 50%;
  max-width: 144px;

  @media (min-width: 768px) {
    display: initial;
  }
`

export const TasksSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  padding: 16px 24px;
`

export const TasksTitle = styled.h1`
  font-size: 1em;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
`

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 72px;
  gap: 16px;
`

export const AddTaskButton = styled.button`
  background-image: ${props => props.theme.color.gradient};
  color: ${props => props.theme.text};
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 2em;
  min-width: 48px;
  min-height: 48px;
  border-radius: 50%;
  border: none;
`
