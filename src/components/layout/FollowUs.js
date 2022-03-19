import React from "react";
import "../../App.css";
import { Row } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsDash} from "react-icons/bs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imgb4 from "../../images/insta1.jpg";
import imgb5 from "../../images/insta2.jpg";
import imgb6 from "../../images/insta3.jpg";
import "../../App.css";
const Followus= () => {
  return (
    <>
      <div className="follow">
      <div className="row">
          <div className="col-lg-3">
              <h1>Follow Us</h1>
              <h2 className="col">Our Collections</h2>
              <h2 className="cos">#cosmetics</h2>
          </div>
          <div className="col-lg-3">
              <img src={imgb4} className="imgF"/>
          </div>
          <div className="col-lg-3">
          <img src={imgb5} className="imgF"/>
            
          </div>
          <div className="col-lg-3">
          <img src={imgb6} className="imgF"/>
          </div>
      </div>
       
      </div>
    </>
  );
};

export default Followus;
