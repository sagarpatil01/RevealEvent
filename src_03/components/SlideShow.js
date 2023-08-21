import Carousel from 'react-bootstrap/Carousel';
import image1 from '../static/images/Event_Music/image_ls_1.jpg'
import image2 from '../static/images/slideshow_img_2.jpg'
import image3 from '../static/images/slideshow_img_3.jpg'
export default function SlideShow() {
  return (
    <Carousel data-bs-theme="dark" fade>
      <Carousel.Item interval={500} >
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

