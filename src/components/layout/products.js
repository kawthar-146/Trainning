import React from "react";
import "../slider.css";
import { Container, Card, CardGroup, Col } from "react-bootstrap";
import imgP1 from "../../images/product1-11.png";
import imgP2 from "../../images/Shop-01.png";
import imgP3 from "../../images/Shop-02.png";
// import { BsSearch, BsPerson } from "react-icons/bs";
import { AiFillStar, AiOutlineStar,AiOutlineArrowRight } from "react-icons/ai";

const Products = () => {
  return (
    <>
      <div className="container product">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">
              Shop Products <div className="line1"></div>
            </h1>
            <p>Our Collections</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          </div>
        </div>
        <div className="row items">
          <div className="col-lg-4">
          
            <img src={imgP1} alt="Pic1" />

            <h3>Hydrating Serum</h3>
            <div className="icon1">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiOutlineStar size={20} />
                  </a>
                </li>
                <li>(1)</li>
              </ul>
            </div>
            <p data-hover="Select Options">$35 - $70</p>
          </div>
          <div className="col-lg-4">
            <img src={imgP2} alt="Pic2" />
            <h3>Hydrating Serum</h3>
            <div className="icon1">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>(1)</li>
              </ul>
            </div>
            <p data-hover="Select Options">$35 - $70</p>
          </div>
          <div className="col-lg-4">
            <img src={imgP3} alt="Pic3" />
            <h3>Hydrating Serum</h3>
            <div className="icon1">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={20} />
                  </a>
                </li>
                <li>(1)</li>
              </ul>
            </div>
            <p data-hover="Select Options">$35 - $70</p>
            
          </div>
          <div className="showall"> SHOP ALL COLLECTIONS<AiOutlineArrowRight/></div>
        </div>
      </div>
    </>
  );
};

export default Products;
