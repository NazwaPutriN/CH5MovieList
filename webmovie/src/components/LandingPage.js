import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Button} from "react-bootstrap"
import {Navbar, Nav} from "react-bootstrap"

function LandingPage() {
  const handleClickLogin = () => {
    console.log("hello guys");
  }
  const handleClickRegis = () => {
    console.log("Welcome to Website Movie");
  }
  return (
    <div className='page'>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          height="779vh"
          src="https://sportshub.cbsistatic.com/i/2022/04/11/9a4841a3-5632-4341-a013-5eb027c2cdc1/marvel-doctor-strange-in-the-multiverse-of-madness.png"
          alt=""
        />
        <Carousel.Caption className='description'>
          <div className='title'>Doctor Strange in the</div>
          <div className='title'>Multiverse of</div>
          <div className='title'>Madness</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button 
            className='button' 
            variant='danger' 
            href='https://www.youtube.com/watch?v=aWzlQ2N6qqg'>WATCH TRAILER</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          height="780vh"
          src="https://images3.alphacoders.com/123/thumb-1920-1235846.png"
          alt="Second slide"
        />

        <Carousel.Caption className='description'>
          <div className='title'>Moon Knight</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button 
          className='button' 
          variant='danger' 
          href='https://www.youtube.com/watch?v=x7Krla_UxRg'>WATCH TRAILER</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="780vh"
          src="https://cdn1.epicgames.com/offer/4817ba5c11504724ba4d5817c8995dff/EGS_JWE2DominionBiosynExpansion_FrontierDevelopments_DLC_S1_2560x1440-59cdd03c4b1ca96c9a1075e76c1d0007"
          alt="Third slide"
        />

        <Carousel.Caption className='description'>
          <div className='title'>Jurrasic World</div>
          <div className='title'>Dominion</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button 
            className='button' 
            variant='danger'
            href='https://www.youtube.com/watch?v=fb5ELWi-ekk'>WATCH TRAILER</Button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
    
  );
}

export default LandingPage;