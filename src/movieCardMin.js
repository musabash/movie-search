import React from "react"
import { Link } from "react-router-dom"
import imag from './no-image.jpg'

function MovieCardMin({movie}) {
  return(
    <div className="item-min" key={movie.id}>
      {movie.poster_path ? <img className="item--image-min"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + ' poster'}
      /> : <img className="item--image-min"
          src={imag}
          alt="no image"
      />}
      <h4 className="title-min">
        <Link to={`/${movie.id}`} className="link">{movie.title}</Link>
      </h4>
      <p className="small">RATING: {movie.vote_average}</p>                  
    </div>
  )
}

export default MovieCardMin