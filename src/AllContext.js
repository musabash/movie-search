import React, {useState, useEffect} from 'react'

const AllContext = React.createContext()

function AllContextProvider(props) {
  const [movies, setMovies] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const webAddress = process.env.REACT_APP_WEB_ADDRESS
  const apiKey = process.env.REACT_APP_API_KEY

  const handleSubmit = (e) => {
    e.preventDefault()
    const url=`${webAddress}?api_key=${apiKey}&language=en-US&query=${inputValue}&page=1&include_adult=false`
    
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
        console.log(movies)
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