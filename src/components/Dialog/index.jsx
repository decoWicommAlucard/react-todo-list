import { useEffect, useRef } from 'react'
import './dialog.style.css'
import { IconClose } from '../icons'
export function Dialog({ isOpen, toggleDialog, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      openDialog()
    } else {
      closeDialog()
    }
  }, [isOpen])

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="close-btn-wrapper">
          <button autoFocus onClick={toggleDialog} className="btn-close">
            <IconClose />
          </button>
        </div>
        {children}
      </dialog>
    </>
  )
}
