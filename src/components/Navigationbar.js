import React, {useEffect, useState} from 'react'
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';

import axios from 'axios'

const Navigationbar = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleSubmit = () => {
    console.log('test')
  }

  const[data,setData]=useState();
  const[search,setSearch]=useState("");
  const[myMovie,setMovie]=useState();

  const API_MOVIELIST = 'https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=<<api_key>>&language=en-US&page=1'
  
  let {name} = useParams();

  useEffect(() => {
    axios.get(`https://api.themoveidb.org/3/search/movie?api_key=97caff1504fb5f9037e7c577be630b77&query=${search}`)
    .then((response) => {
      setSearch(response.data.results)
      });
  },[name])

  // const searchMovie = (evt) => {
  //   if(evt.key=="Enter")
  //   {
  //     fetch(`API_MOVIELIST${search}`)
  //     // https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=<<api_key>>&language=en-US&page=1${search}
  //     .then(res=>res.json())
  //     .then(data=>{
  //       setMovie(data.movies)
  //     })
  //   }
  // }

  return (
    <div className='navbar'>

      {/*--- Start Nav Logo --- */}
      <Container>
        <div className='navbar-judul'>
          <Navbar.Brand><h1>MovieList</h1></Navbar.Brand>
        </div>
      {/*--- End Nav Logo --- */}

        {/*--- Start Nav Search --- */}
        <Nav className='navbar navbar-expand- lg text-white bg-transparant z-index=2'>
          <div className='searchBox'> 
              <input 
                type="search" 
                className='search-bar' 
                placeholder='What do you want to watch?' 
                // onChange={(e)=>setSearch(e.target.value)} 
                value={search} 
                onKeyPress={name}>
              </input>
          </div>
          {/*--- End Nav Search --- */}

          {/*--- Start Nav Button --- */}
          <div className='Button'>
            <Button onClick={() => setSmShow(true)} className="buttonfirst me-2" variant='light'> Login </Button>
            <Button onClick={() => setLgShow(true)} className="buttonsecond" variant='danger'> Register </Button>
          
              <Modal
                className='formlogin'
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Log In to Your Account</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group 
                      className="isilogin mb-3" 
                      controlId="input"
                      >
                        <Form.Control
                          type="email"
                          onChange={(e)=>console.log(e.target.value)}
                          placeholder="Email Address"
                          autoFocus
                        />
                      </Form.Group>
                        <Form.Group className="isilogin mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            type="text"
                            // onChange={(e)=> tes}
                            placeholder="Password"
                            className="hover:border-rose-700 focus:bg-rose-700"
                            autoFocus
                          />
                        </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleSubmit} className='buttonlogin'>
                      Login
                    </Button>
                  </Modal.Footer>
      </Modal>

      <Modal
        className='formregis'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="text"
                      placeholder="Firts Name"
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        autoFocus
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        autoFocus
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        autoFocus
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        type="password"
                        placeholder="Password Confirmation"
                        autoFocus
                      />
                  </Form.Group>
                </Form>
              </Modal.Body>

                <Modal.Footer>
                  <Button variant="danger" onClick={handleSubmit}> Register Now </Button>
                </Modal.Footer>
      </Modal>
          </div>
        </Nav>
      </Container>
      
    </div>
  )
}

export default Navigationbar