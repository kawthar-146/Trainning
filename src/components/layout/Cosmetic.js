import React from "react";
import { BsFlower1, BsFlower2, BsFlower3,BsArrowRightShort} from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import logo from "../../images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import imgCo from "../../images/hotspot-image1.jpg"
const Cosmetic = () => {
  return (
    <>
      <div className="cosmetic">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">
              Cosmetic Care Solutions <div className="line1"></div>
            </h1>
            <p>Body Care Results</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          </div>
          <div className="row items">
          <div className="col-lg-5">
                <div className="row l1">
                <h3><BsFlower1/> Natural Ingredients</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</h6>
                <div className="shopNow"> SHOP NOW<BsArrowRightShort size={30}/></div>
                </div>
                <div className="row">
                <h3><BsFlower2/> No Mineral Oil</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</h6>
                <div className="shopNow"> SHOP NOW<BsArrowRightShort size={30}/></div>
                </div>
                <div className="row">
                <h3><BsFlower3/> Clean Cosmetics</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</h6>
                <div className="shopNow"> SHOP NOW<BsArrowRightShort size={30}/></div>
                </div>
          </div>
          <div className="col-lg-7">
               <img src={imgCo} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cosmetic;
