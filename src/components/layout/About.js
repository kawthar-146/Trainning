import React from "react";
import imgA from "../../images/about-img.jpg";
import "../../App.css";
import { Col, Row, Container} from "react-bootstrap";
import { AiOutlineArrowRight} from "react-icons/ai";
const About = () => {
  return (
    <>
    <div className="about">
    {/* <Container> */}
  <Row>
    <Col> <img src={imgA} height="341px" width="551px"  /></Col>
   
    <Col >     <h1 className="title"> About Our <br/> Iconic Products </h1>
               <p className="lead">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor. Donec consectetur nisi eu mauris auctor, in egestodio mollis phasellus urna lacus.
               </p>
               <p className="next">Know more <AiOutlineArrowRight/> </p>
    </Col>
  </Row>
</div>
      {/* <div className="col-md-6 image">
        <img src={imgA} height="400px" width="400px" />
        </div>
        <div className="col-md-6 image">
               <h1 className="display-5"> About Our</h1>
               <h1 className="display-5">Iconic Products</h1>
               <p className="lead">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor. Donec consectetur nisi eu mauris auctor, in egestodio mollis phasellus urna lacus.
               </p>
        </div> */}
    </>
  );
};

export default About;
