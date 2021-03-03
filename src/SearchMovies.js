import React, {useContext} from "react"
import MovieCardMin from './movieCardMin'
import { AllContext } from "./AllContext"

function SearchMovies() {
  const { handleSubmit, movies, inputValue, setInputValue } = useContext(AllContext)
  return(
    <div>
      <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="query" className="label">Movie Name</label>
          <input required value={inputValue} type="text" className="input" name="query" placeholder="e.g. Titanic" onChange={(e) => {
            setInputValue(e.target.value)
          }}/>
          <button className="btn" type="submit">Search</button>
      </form>
      <div className="search-result-list">
        {movies && movies.map(movie =>
          <MovieCardMin movie={movie} key={movie.id}/>
        )}
      </div>
    </div>
  )
}

export default SearchMovies