import { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Repositories></Repositories>
      </header>
    </div>
  );
}

const Repositories = () => {
  const [repos, setRepos] = useState([])

  const repoList = repos.map((repo) => (
    <div style={{ fontSize: 18 }}>
      <div>
        <div>{repo.name}</div>
        <div>{repo.description}</div>
        <a href={repo.html_url}>Acessar Repositorio</a>
      </div>
      <br />
    </div>
  ))
  const gatherApiData = async () => {
    const response = await fetch("https://api.github.com/orgs/rocketseat/repos")
    const data = await response.json()

    setRepos(data)
  }

  useEffect(() => {
    gatherApiData()
  }, [])

  return (
    <div style={{
      textAlign: "left", fontSize: 20
    }}>
      <h1>Lista de Repositorios</h1>
      {repoList}
    </div >
  )
}

export default App;