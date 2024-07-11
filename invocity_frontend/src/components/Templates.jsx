import Carousel from "react-bootstrap/Carousel";

function Template() {
  return (
    <Carousel
      className="carousel .carousel-control-prev 
.carousel-control-next"
      controls
      interval={2000}
    >
      <Carousel.Item>
        <img
          src={require("../assets/templates/first.webp")}
          alt="first"
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../assets/templates/second.webp")}
          alt="second"
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../assets/templates/third.webp")}
          alt="third"
          className="carousel-image "
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../assets/templates/fourth.webp")}
          alt="fourth"
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../assets/templates/fifth.webp")}
          alt="fifth"
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../assets/templates/sixth.webp")}
          alt="sixth"
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../assets/templates/seventh.webp")}
          alt="seventh"
          className="carousel-image"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Template;
