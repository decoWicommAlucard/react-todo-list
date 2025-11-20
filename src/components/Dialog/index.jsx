import { useEffect, useRef } from 'react'
import './dialog.style.css'
export function Dialog({ isOpen, toggleDialog }) {
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
      <dialog ref={dialogRef} className="dialog-backdrop">
        <button autoFocus onClick={toggleDialog}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
    </>
  )
}
