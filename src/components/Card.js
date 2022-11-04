import React from 'react'
import {useNavigate} from 'react-router-dom'

const Card = ({movie}) => {
    const IMG = 'https://image.tmdb.org/t/p/w500'

  return (
  <>
    <div className='card'>
      {movie.cast((e) => {
        if (e.poster_path !== null ) {
          return (
            <div>
              <img className='imagecard' src={IMG + e.poster_path} alt={e.name}/>
              <h5>{e.name}</h5>
              <p>{e.character}</p>
            </div>
          )
        }else{
          return(
            <div>
              <img className='imagecard' src='https://i.pinimg.com/564x/93/6b/cf/936bcf6964b3bf3c0ccd503056df2bea.jpg' alt={e.name}/>
              <h5>{e.name}</h5>
              <p>{e.character}</p>
           </div>
          )
        }
      })}
    </div>
  </>
  )
}

export default Card

 // <div onClick={() => navigate(`/move/{movie.id}`)} className={"movie"}>
    //     <div className='movie-title'>
    //         {Movie.poster_path &&
    //         <img src={Image + movie.poster_path} alt={Movie.title}/>
    //         }
    //     </div>
    // </div>