import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './1666993073.webp'
import img2 from './1667577835.webp'
import img3 from './1668543988.webp'

function CarouselFadeExample() {
  return (
    <Carousel fade className='contenedorImagen'>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;