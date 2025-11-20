import { Container } from './components/Container'
import LocalDoguinhos from './components/LocalDoguinhos/LocalDoguinhos'
import RemoteDoguinhosSearch from './components/RemoteDoguinhosSearch/RemoteDoguinhosSearch'

function App() {
  return (
    <main>
      <Container>
        <h1>Bem-vindo aos doguinhos!</h1>

        <h2>Filtro local (1 requisição só)</h2>
        {/* <LocalDoguinhos /> */}

        <hr />

        <h2>Busca na API (a partir de 4 letras)</h2>
        <RemoteDoguinhosSearch />
      </Container>
    </main>
  )
}

export default App
