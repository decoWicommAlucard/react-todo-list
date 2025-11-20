import React, { useEffect, useRef } from 'react'

export default function Form() {
  const labelRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    labelRef.current.innerHTML = 'Nome do usuário'
    labelRef.current.style.color = 'blue'

    inputRef.current.focus()
  }, [])

  const enviarFormulario = (event) => {
    event.preventDefault()
    alert(`Nome enviado: ${inputRef.current.value}`)
  }

  return (
    <form onSubmit={enviarFormulario}>
      <div>
        <label ref={labelRef} htmlFor="nome">
          Nome
        </label>
      </div>
      <div>
        <input
          type="text"
          id="nome"
          name="nome"
          ref={inputRef}
          placeholder="Digite seu nome..."
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email..."
        />
      </div>
      <button>Salvar</button>
    </form>
  )
}
