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
  display: flex;
  flex-grow: 1;
  padding: 32px;
  border-radius: 16px;

  @media (min-width: 768px) {
    gap: calc(48px * 2);
    border-radius: 8px;
    padding: 16px 48px;
  }
`

export const LeftContainer = styled.div`
  background-color: ${props => props.theme.background.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  flex-grow: 1;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2.8em;

  @media (min-width: 768px) {
    font-size: 3.5em;
  }
`

export const MobileLogo = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`

export const RightContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
  }
`
