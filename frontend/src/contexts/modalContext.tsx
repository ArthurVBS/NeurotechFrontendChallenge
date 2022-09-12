import { createContext, ReactNode, useContext, useState } from 'react'
import { ModalType } from '../types/modal'

type ModalContextType = {
  modal: ModalType
  setModal: React.Dispatch<React.SetStateAction<ModalType>>
}

const initialValue = {
  modal: { _id: '', action: 'none', show: false },
  setModal: () => {},
}

const ModalContext = createContext<ModalContextType>(initialValue)

export const useModal = () => useContext(ModalContext)

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalType>(initialValue.modal)

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}
