import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
    }

    background: {
      primary: string
      secondary: string
    }

    text: string
  }
}
