import Carousel from 'react-bootstrap/Carousel';

// import Scenic from './the-scenic-route.png'
import gitGud from './gitGud.png'
import CCW from './CCW.png'
import reel from './reel.png'

import "./works.css"
import { Icon } from '@iconify/react';

function Work() {
  return (
    <Carousel className="work" id="work">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CCW}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>Cambridge Cloudworks</h3>
          <p>Maintained and updated the Wordpress website</p>
          <a href='https://cambridgecloudworks.com/'>website</a>
          <br/>
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