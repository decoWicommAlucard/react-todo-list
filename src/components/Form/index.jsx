import React, { useRef } from 'react'

export default function Form() {
  const labelRef = useRef(null)
  const inputRef = useRef(null)

  return (
    <form>
      <div>
        <label ref={labelRef} htmlFor="nome">
          Nome
        </label>
      </div>
      <div>
        <input type="text" id="nome" name="nome" ref={inputRef} />
      </div>
      <button>Salvar</button>
    </form>
  )
}
