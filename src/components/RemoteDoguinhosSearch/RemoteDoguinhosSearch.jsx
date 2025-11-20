import { useEffect, useState } from 'react'

const API_BASE_URL = 'http://localhost:8080/doguinhos'

export default function DoguinhosSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${API_BASE_URL}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erro ao buscar doguinhos:', error))
  }, [])

  useEffect(() => {
    if (searchTerm.length > 4) {
      fetch(`${API_BASE_URL}?nome=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Erro ao buscar doguinhos:', error))
    }
  }, [searchTerm])

  return (
    <section>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar doguinhos..."
      />
      
      <ul>
        {data.map((doguinho) => (
          <li key={doguinho.id}>{doguinho.nome}</li>
        ))}
      </ul>
    </section>
  )
}
