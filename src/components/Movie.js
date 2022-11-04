import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import NoImg from './No_Image_Available.jpg';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Movie = () => {
    const [movieData, setMovieData] = useState([]) 
    
    const Api = 'https://api.themoviedb.org/3/discover/movie'
    const Images = 'https://image.tmdb.org/t/p/w500'

    const Moviecall = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: "54e905008241b171e6fb2d81d113180a",
            }
        })
        const results = data.data.results
        setMovieData(results)
    }

    useEffect(() => {
        Moviecall()
    },[])
    console.log(movieData)
    
  return (
    <>
    <Fragment>
        <div className='mov'>
            <h1>Popular Movie</h1>
            <button className='btn_AllMovie'
                //onClick={() => navigate(`/movieData`)}
            > See All Movie </button>
        </div>
            <div className='movie-container'>
                <Swiper 
                        slidesPerView={4}
                        className="mySwiper"
                >
                    {movieData && movieData.map((movie) => (
                        <SwiperSlide>
                            <Fragment>
                                <div className='container'>
                                    <img 
                                        className='image' 
                                        src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt=""
                                        onClick={()=>movie.title}    
                                    />
                                    {/* <h3>{movie.title}</h3> */}
                                </div>
                            </Fragment>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    </>
  )
}

export default Movie

// <Fragment>
// <div className='mov2'>
//     <h1>Browse By Category</h1>
//     <button 
//         className='btn_AllMovie2'
//         //onClick={() => navigate(`/movieData`)}
//     > See All Movie </button>
// </div>
//     <div className='movie-container'>
//         <Swiper 
//                 slidesPerView={4}
//                 className="mySwiper"
//         >
//             {movieData.map((movie) => (
//                 <SwiperSlide>
//                     <Fragment
//                         key={movie.id}
//                         movie={movie}
//                        // onClick={() => Navigate(`/${movie.title}`)}
//                     >
//                         <div className='container'>
//                             <img 
//                                 className='image' 
//                                 src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} 
//                                 alt=""
//                             />
//                             {/* <h3>{movie.title}</h3> */}
//                         </div>
//                     </Fragment>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     </div>
// </Fragment>