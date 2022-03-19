import React from "react";
import {
  BsFlower1,
  BsFlower2,
  BsFlower3,
  BsArrowRightShort,
} from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import logo from "../../images/logo.png";
import { Col } from "react-bootstrap";
import imgb from "../../images/blog-01.jpg";
import imgb2 from "../../images/blog-03.jpg";
import imgb3 from "../../images/blog-details-02.jpg";

import { AiOutlineArrowRight } from "react-icons/ai";
const CosmeticNew = () => {
  return (
    <>
      <div className="cosmeticnew">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">
              Cosmetic Care Solutions <div className="line1"></div>
            </h1>
            <p>Body Care Results</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <div className="row">
              <div className="col-lg-5">
                <img src={imgb2} className="imgb2" />
                <h3> October 9, 2020</h3>
                <h4 className="do">Does serum contain lightweight formula?</h4>
                <h5>
                  Cosmetic Creams Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea..
                </h5>
                <div className="read">
                  {" "}
                  Read more
                  <AiOutlineArrowRight />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-4">
                    <img src={imgb} className="imgb" />
                  </div>
                  <div className="col-lg-8 imgb2T">
                    <h3> December 7, 2020</h3>
                    <h4>Treat your skin with organic products</h4>
                    <h5>
                      Cosmetic Creams Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea...
                    </h5>
                    <div className="read">
                      {" "}
                      Read more
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <img src={imgb3} className="imgb" />
                  </div>
                  <div className="col-lg-8 imgb2T">
                    <h3> November 9, 2020</h3>
                    <h4>
                      November 9, 2020 Interesting ingredients used in cosmetic
                    </h4>
                    <h5>
                      Cosmetic Creams Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea...
                    </h5>
                    <div className="read">
                      {" "}
                      Read more
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CosmeticNew;
