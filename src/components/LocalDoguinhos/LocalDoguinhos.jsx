import { useEffect, useMemo, useState } from 'react'

export default function LocalDoguinhos() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Busca UMA VEZ só, na montagem
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:8080/doguinhos')
        if (!response.ok) {
          throw new Error('Erro na resposta da API')
        }
        const json = await response.json()
        setData(json)
      } catch (err) {
        console.error('Erro ao buscar dados:', err)
        setError('Não foi possível carregar os doguinhos.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  // Filtro em memória, sem nova requisição
  const filteredDoguinhos = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()

    if (!term) return data

    return data.filter((doguinho) =>
      doguinho.nome?.toLowerCase().includes(term)
    )
  }, [data, searchTerm])

  if (loading) return <p>Carregando doguinhos...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      <input
        type="text"
        placeholder="Buscar por raça (filtro local)"
        value={searchTerm}
        onChange={handleSearch}
      />

      {filteredDoguinhos.length === 0 ? (
        <p>Nenhum doguinho encontrado.</p>
      ) : (
        filteredDoguinhos.map((doguinho) => (
          <ul key={doguinho.id}>
            <li>{doguinho.nome}</li>
          </ul>
        ))
      )}
    </section>
  )
}
