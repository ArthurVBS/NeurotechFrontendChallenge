import React from 'react'
import Routes from './routes'

import { AuthContextProvider } from './contexts/authContext'
import { TasksContextProvider } from './contexts/tasksContext'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <TasksContextProvider>
          <GlobalStyles />
          <Routes />
        </TasksContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
