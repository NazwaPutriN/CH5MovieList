import React from 'react'
import {useNavigate} from 'react-router-dom'
import Movie from './Movie'

const Card = ({movie}) => {
    const Image = 'https://image.tmdb.org/t/p/w500'
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/move/{movie.id}`)} className={"movie"}>
        <div className='movie-title'>
            {Movie.poster_path &&
            <img src={Image + movie.poster_path} alt={Movie.title}/>
            }
        </div>
    </div>
  )
}

export default Card