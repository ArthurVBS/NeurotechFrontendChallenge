import styled from 'styled-components'

export const Container = styled.section`
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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.h1`
  font-size: 1.3em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`

export const GithubImg = styled.img`
  display: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    display: initial;
  }
`

export const SmileImg = styled.div`
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

export const Footer = styled.footer`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    padding: 16px 0px;
  }
`

export const TextWrapper = styled.div`
  font-size: 0.9em;
`
