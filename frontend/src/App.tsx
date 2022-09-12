import React from 'react'

import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import ContextsProvider from './contexts/contexts'
import Routes from './routes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextsProvider>
        <GlobalStyles />
        <Routes />
      </ContextsProvider>
    </ThemeProvider>
  )
}

export default App
