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
    padding: 32px 64px;
  }
`

export const Container = styled.div`
  background-color: ${props => props.theme.background.primary};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-grow: 1;
  border-radius: 16px;

  @media (min-width: 768px) {
    border-radius: 8px;
  }
`

export const Header = styled.header`
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (min-width: 768px) {
    background-color: #1a1a21;
    flex-direction: row;
    flex-grow: 1;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`

export const UserSection = styled.section`
  padding: 8px 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 1;
    flex-basis: 320px;
  }
`

export const UserHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const UserTitle = styled.h1`
  font-size: 1.3em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`

export const UserGithubImg = styled.img`
  display: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    display: initial;
  }
`

export const UserSmileImg = styled.div`
  background-image: ${props => props.theme.color.gradient};
  display: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const UserFooter = styled.footer`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    padding: 16px 0px;
  }
`

export const UserTextWrapper = styled.div`
  font-size: 0.9em;
`

export const TasksSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  padding: 16px 24px;

  @media (min-width: 768px) {
    background-color: ${props => props.theme.background.primary};
    border-bottom-right-radius: 8px;
    flex-shrink: 1;
  }
`

export const TasksHeader = styled.header`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0px;
  }
`

export const TasksTitle = styled.h1`
  font-size: 1em;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.2em;
    letter-spacing: normal;
    font-weight: 700;
    text-transform: none;
  }
`

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 72px;
  gap: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
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

  @media (min-width: 768px) {
    position: static;
    min-width: 40px;
    min-height: 40px;
  }
`
