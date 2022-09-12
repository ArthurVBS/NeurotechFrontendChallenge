import styled from 'styled-components'

export const BackgroundContainer = styled.main`
  background-color: ${props => props.theme.background.secondary};
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
    background-color: #1a1a21;
    border-radius: 8px;
    box-shadow: 0px 0px 4px ${props => props.theme.background.primary};
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
    max-height: calc(
      100vh - 64px - 64px
    ); // 64px is the height of the header and padding
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`
