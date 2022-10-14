import React, { Fragment, useEffect, useState, useRef } from 'react'
import axios from 'axios'
import NoImg from './No_Image_Available.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
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
        </div>
            <div className='movie-container'>
                <Swiper 
                        slidesPerView={4}
                        className="mySwiper"
                >
                    {movieData.map((movie) => (
                        <SwiperSlide>
                            <Fragment>
                                <div className='container'>
                                    <img className='image' src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt=""/>
                                    {/* <h3>{movie.title}</h3> */}
                                </div>
                            </Fragment>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    </Fragment>

    <Fragment>
        <div className='mov'>
        <h1>Browse By Category</h1>
        </div>
            <div className='movie-container'>
                <Swiper 
                        slidesPerView={4}
                        className="mySwiper"
                >
                    {movieData.map((movie) => (
                        <SwiperSlide>
                            <Fragment>
                                <div className='container'>
                                    <img className='image' src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt=""/>
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