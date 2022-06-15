import Carousel from 'react-bootstrap/Carousel';

import Scenic from './the-scenic-route.png'
import gitGud from './gitGud.png'

import "./works.css"


function Work() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Scenic}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>The Scenic Route</h3>
          <p>Find, create, and share your favorite walking and running paths</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Scenic}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Reel Good Movies</h3>
          <p>A movie review website</p>
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
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Work;