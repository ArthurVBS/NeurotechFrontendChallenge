import React from 'react'

import { AuthContextProvider } from './authContext'
import { ModalContextProvider } from './modalContext'
import { TasksContextProvider } from './tasksContext'

type Props = {
  children: React.ReactNode
}

const ContextsProvider: React.FC<Props> = ({ children }) => {
  return (
    <AuthContextProvider>
      <TasksContextProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </TasksContextProvider>
    </AuthContextProvider>
  )
}

export default ContextsProvider
