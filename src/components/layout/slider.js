import React from "react";
import "../slider.css";
import imgslider from "../../images/banner.jpg";
import { Card ,Carousel} from "react-bootstrap";
const Slider = () => {
  return (
    <>
      <div className="slider">
        {/* <Card className="bg-dark text-white border-0 ">
          <Card.Img src={imgslider} alt="Card image" height="991px" />
          <Card.ImgOverlay>
            <div className="container">
              <Card.Title className="card-title display-3 fw-bolder ">
                Clean beauty
              </Card.Title>
              <Card.Text className="card-text lead fs-2">
                For colorful people
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card> */}
        <Carousel className="slider1">
        <Carousel.Item >
    <img
     
      src={imgslider}
      className="imgC"
    />
    <Carousel.Caption>
    
      <h3  >Clean beauty</h3>
      <p>For colorful people</p>
      
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
      </div>
    </>
  );
};

export default Slider;
