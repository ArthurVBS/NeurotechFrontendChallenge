import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
      tertiary: string
      gradient: string
    }

    background: {
      primary: string
      secondary: string
    }

    text: string
  }
}
