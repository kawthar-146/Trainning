import React from "react";
import "../slider.css";
import { Container, Card, CardGroup, Col } from "react-bootstrap";
import imgP1 from "../../images/product1-11.png";
import imgP2 from "../../images/Shop-01.png";
import imgP3 from "../../images/Shop-02.png";
import imgP4 from "../../images/Shop-03.png";
import imgP5 from "../../images/Shop-05.png";
import imgP6 from "../../images/Shop-06.png";
import imgP7 from "../../images/Shop-08.png";
import imgP8 from "../../images/Shop-10.png";
// import { BsSearch, BsPerson } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product2 = () => {
  return (
    <>
      <div className="product">
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
          <div className="col-lg-3">
            <img src={imgP1} alt="Pic1" />

            <h3>Hydrating Serum</h3>
            <div className="icon2">
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
          <div className="col-lg-3">
            <img src={imgP2} alt="Pic2" />
            <h3>Anti-Aging Serum</h3>
            <div className="icon2">
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
          <div className="col-lg-3">
            <img src={imgP3} alt="Pic3" />
            <h3>Antioxidant Serum</h3>
            <div className="icon2">
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
          {/*  */}
          <div className="col-lg-3">
            <img src={imgP4} alt="Pic4" />
            <h3>Brightening Serum</h3>
            <div className="icon2">
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
        </div>
        <div className="row items">
          <div className="col-lg-3">
            <img src={imgP5} alt="Pic5" />

            <h3>Dry Skin Lotion</h3>
            <div className="icon2">
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
          <div className="col-lg-3">
            <img src={imgP6} alt="Pic6" />
            <h3> Nourishing Skin Cream</h3>
            <div className="icon2">
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
          <div className="col-lg-3">
            <img src={imgP7} alt="Pic7" />
            <h3>Light Moisturising Cream</h3>
            <div className="icon2">
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
          {/*  */}
          <div className="col-lg-3">
            <img src={imgP8} alt="Pic8" />
            <h3> Daily Moisturizing Cream</h3>
            <div className="icon2">
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
        
        </div>
      </div>
    </>
  );
};

export default Product2;
