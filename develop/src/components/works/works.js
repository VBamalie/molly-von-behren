import Carousel from 'react-bootstrap/Carousel';

// import Scenic from './the-scenic-route.png'
import gitGud from './gitGud.png'
import reel from './reel.png'

import "./works.css"
import { Icon } from '@iconify/react';

function Work() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={reel}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>The Scenic Route</h3>
          <p>Find, create, and share your favorite walking and running paths</p>
          <a href='https://github.com/ArchRascal2988/theScenicRoute'>website</a>
          <br/>
          <a href='https://github.com/ArchRascal2988/theScenicRoute'><Icon icon="brandico:github-text" /></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={reel}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Reel Good Movies</h3>
          <p>A movie review website</p>
          <a href='https://boiling-meadow-77947.herokuapp.com/'>website</a>
          <br/>
          <a href='https://github.com/MichaelMLetanosky/reel-good-movies'><Icon icon="brandico:github-text" /></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gitGud}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>gitGud</h3>
          <p>
            filter through free-to-play games and watch their top twitch streams
          </p>
          <a href='https://canro2b.github.io/gitGud/'>website</a>
          <br/>
          <a href='https://github.com/CanRo2B/gitGud'><Icon icon="brandico:github-text" /></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Work;