import React, {useState, useEffect} from 'react'

const AllContext = React.createContext()

function AllContextProvider(props) {
  const [movies, setMovies] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const url=`https://api.themoviedb.org/3/search/movie?api_key=328d760d9b2414d4f502638b62cf579c&language=en-US&query=${inputValue}&page=1&include_adult=false`
    
      fetch(url)
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            throw Error('Something went wrong')
          }
        })
        .then(data => setMovies(data.results))
        .catch(err => setError(err))
        setInputValue('')
  }

  const value = {
    handleSubmit,
    movies,
    setMovies,
    inputValue,
    setInputValue
  }

  return (
    <AllContext.Provider value={value}>
      {props.children}
    </AllContext.Provider>
  )
  
}

export {AllContext, AllContextProvider}