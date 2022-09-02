import React from 'react'

import { AuthContextProvider } from './contexts/authContext'
import Routes from './routes'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <GlobalStyles />
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
