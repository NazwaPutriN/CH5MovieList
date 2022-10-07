import React, {useEffect, useState} from 'react'
import {Navbar, Container, Nav, Button} from "react-bootstrap"
import axios from 'axios'


const Navigationbar = () => {
  const handleClickLogin = () => {
  console.log("hello guys");
  }
  const handleClickRegis = () => {
  console.log("Welcome to Website Movie");
  }

  const[data,setData]=useState();
  const[search,setSearch]=useState("");
  const[myMovie,setMovie]=useState();

  const API_MOVIELIST = 'https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=<<api_key>>&language=en-US&page=1'
  
  useEffect(() => {
    axios.get(API_MOVIELIST)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[setData, API_MOVIELIST])
  console.log(data)

  const searchMovie = (evt) => {
    if(evt.key=="Enter")
    {
      fetch(`https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=<<api_key>>&language=en-US&page=1${search}`)
      .then(res=>res.json())
      .then(data=>{
        setMovie(data.movies)
      })
    }
  }
  return (
    <div className='navbar'>
      <Container>
        <div className='navbar-judul'>
        <Navbar.Brand><h1>MovieList</h1></Navbar.Brand>
        </div>
        <Nav className='navbar navbar-expand- lg text-white bg-transparant z-index=2'>
          <div className='searchBox'> 
              <input 
                type="search" 
                className='search-bar' 
                placeholder='What do you want to watch?' 
                onChange={(e)=>setSearch(e.target.value)} 
                value={search} 
                onKeyPress={searchMovie}>
              </input>
          </div>
          <div className='Button'>
            <Button onClick={handleClickLogin} className='buttonfirst mr-4' variant='light'>Login</Button>
            <Button onClick={handleClickRegis} className='buttonsecond' variant='danger'>Register</Button>
          </div>
        </Nav>
      </Container>
      
    </div>
  )
}

export default Navigationbar