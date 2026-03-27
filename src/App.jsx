import { api } from './api/api'
import s from'./App.module.css'
import { useEffect, useState } from 'react'
import logo from '/logo.png'
import { Card } from './components/card'

function App() {
  const [data, setData] = useState([])
  const [searchPage, setPage] = useState(1)
  const [searchName, setName] = useState('')
  const [erro, setError] = useState(false)

  useEffect(() => {
    setError(false)
    api.get(`/character/?page=${searchPage}&name=${searchName}`).then(( response) => { 
      setData(response.data.results)
    }).catch((err) => {
      setError(true)
      console.error(err)
    })
  }, [searchPage, searchName])

  return (
    <main>
      <img className={s.logo} src={logo} alt="Logo RICK AND MORTY" />
      <div className={s.input}>
        <input type="number" value={searchPage} onChange={(e) => setPage(e.target.value)}  placeholder='1/42' />
        <input type="text" value={searchName} onChange={(e) => setName(e.target.value)}  placeholder='Nome do personagem' />
      </div>
      { erro ? <h2 style={{ color: 'red',  background: 'lightgray',padding: '10px', borderRadius: '5px'}}>Erro ao carregar dados</h2> : <div className={s.wrapCards}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Card
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
              />
            </div>
          )
        })}
      </div>}
    </main>
  )
}

export default App
