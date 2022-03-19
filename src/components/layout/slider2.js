import React from "react";
import imgB from "../../images/category-img.jpg";
import imgC from "../../images/home-scroll-01.jpg";
import imgD from "../../images/collection-1.jpg"
import "../../App.css";
import { Col, Row, Container, Carousel} from "react-bootstrap";
import { AiOutlineArrowRight} from "react-icons/ai";
const Slider2 = () => {
  return (
    <>
   <div className="slider2">
    <Container className="slider3" >
  <Row>
    <Col >     
       
       <Carousel className="slider2A">
       <Carousel.Item  className="change">
   <img
    
     src={imgB}
     className="imgB"
     height="880px" width="659px"
   />
   <Carousel.Caption>
   
     <h3>NEW ARRIVALS</h3>
     <p>SHOP COLLECTION  <div className="line"></div></p>
     
   </Carousel.Caption>
 </Carousel.Item>

</Carousel>

    </Col>
    <Col>  
    <Carousel className="slider2B">
  <Carousel.Item>
    <img
     
      src={imgC}
      height="552px"
      width="489px"
    />
    <Carousel.Caption >
      <h3>New Elevated <br/> Looks</h3>
      <p> shop essential <AiOutlineArrowRight/></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={imgD}
      height="552px"
      width="489px" 
    
    />

    <Carousel.Caption>
      <h3>Beautiful & Soft <br/> Skin</h3>
      <p> shop essential <AiOutlineArrowRight/></p>
    </Carousel.Caption>
  </Carousel.Item>   
</Carousel></Col>
  </Row>
</Container>
</div>
     </>
  );
};

export default Slider2;
