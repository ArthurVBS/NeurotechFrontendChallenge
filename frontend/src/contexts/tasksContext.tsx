import { createContext, ReactNode, useContext, useState } from 'react'

type TasksContextType = {
  tasksHaveChanged: boolean
  setTasksHaveChanged: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValue = {
  tasksHaveChanged: false,
  setTasksHaveChanged: () => {},
}

const TasksContext = createContext<TasksContextType>(initialValue)

export const useTasks = () => useContext(TasksContext)

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasksHaveChanged, setTasksHaveChanged] = useState(false)

  return (
    <TasksContext.Provider value={{ tasksHaveChanged, setTasksHaveChanged }}>
      {children}
    </TasksContext.Provider>
  )
}
