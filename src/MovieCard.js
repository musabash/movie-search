import React, {useContext} from "react"
import imag from './no-image.jpg'
import { useParams, history, useHistory } from 'react-router-dom'
import { AllContext } from "./AllContext"

function MovieCard() {
  const {movieId} = useParams()
  const {movies} = useContext(AllContext)
  const [movie] = movies.filter(movie => movie.id === Number(movieId))
  const history = useHistory()
  
  return(
    movie ?
    <>
      <button
          className="go-back"
          onClick={() => history.goBack()}
        >
          ◀ Back
      </button>  
      <div className="item">
        <h2 className="title">
          {movie.title}
        </h2>
        {movie.poster_path ? <img className="item--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
        /> : <img className="item--image no-img"
            src={imag}
            alt="no image"
        />}
        <p className="small">RELEASE DATE: <span>{movie.release_date}</span></p>
        <p className="small">RATING: <span>{movie.vote_average}</span></p>  
        <p className="description">{movie.overview}</p>           
      </div>
    </>
    : null
  )

}

export default MovieCard