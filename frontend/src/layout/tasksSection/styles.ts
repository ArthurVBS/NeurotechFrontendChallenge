import styled from 'styled-components'

export const Container = styled.section`
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

export const Header = styled.header`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0px;
  }
`

export const Title = styled.h1`
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
