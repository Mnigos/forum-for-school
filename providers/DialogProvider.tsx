import React, { createContext, FC, useState } from 'react'

interface DialogContext {
  dialog: boolean
  openDialog: () => void
  closeDialog: () => void
}

export const DialogContext = createContext<DialogContext>({
  dialog: false,
  openDialog: () => {},
  closeDialog: () => {},
})

export const DialogProvider: FC = ({ children }) => {
  const [dialog, changeDialogStatus] = useState(false)

  const openDialog = () => changeDialogStatus(true)
  const closeDialog = () => changeDialogStatus(false)

  return (
    <DialogContext.Provider
      value={{
        dialog,
        openDialog,
        closeDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}
