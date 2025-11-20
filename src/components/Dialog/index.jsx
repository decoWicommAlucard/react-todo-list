import { useRef } from 'react'
import './dialog.style.css'
export function Dialog() {
  const dialogRef = useRef(null)

  const handleClose = () => {
    dialogRef.current.close()
  }

  const openShow = () => {
    dialogRef.current.showModal()
  }

  return (
    <>
      <dialog ref={dialogRef} className="dialog-backdrop">
        <button autoFocus onClick={handleClose}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      <button onClick={openShow}>Show the dialog</button>
    </>
  )
}
