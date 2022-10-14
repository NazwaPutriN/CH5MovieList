import React, {useEffect, useState} from 'react'
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios'

const Navigationbar = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setSmShow(false);

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
                onChange={(e)=>setSearch(e.target.value)} 
                value={search} 
                onKeyPress={searchMovie}>
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
                      <Form.Group className="isilogin mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          autoFocus
                        />
                      </Form.Group>
                        <Form.Group className="isilogin mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            type="text"
                            placeholder="Password"
                            autoFocus
                          />
                        </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose} className='buttonlogin'>
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
                  <Button variant="danger" onClick={handleClose}> Register Now </Button>
                </Modal.Footer>
      </Modal>
          </div>
        </Nav>
      </Container>
      
    </div>
  )
}

export default Navigationbar