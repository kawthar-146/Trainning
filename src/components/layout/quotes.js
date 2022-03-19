import React from "react";
import "../../App.css";
import { Row } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsDash} from "react-icons/bs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import bg from "../../images/Shop-01.png";
import p1 from "../../images/profile1.jpg";
import p2 from "../../images/profile2.jpg";
import p3 from "../../images/profile3.jpg";
import p4 from "../../images/profile4.jpg";
import "../../App.css";
const Quotes= () => {
  return (
    <>
      <div className="slider3">
        {/* <Container className="slider3" > */}
        <Row>
          <div className="col-lg-6">
            <OwlCarousel
              className="owl-theme"
              loop={true}
              items={1}
              autoplay={true}
              dots={false}
            >
              <div className="item">
                <img src={p1} className="img-fluid profile-pic" />
                <div className="icon3">
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
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vel mi quam. Fusce vehicula vitae mauris sit amet tempor.
                  Donec consectetur nisi eu mauris auctor, in egestodio mollis
                  phasellus urna lacus.
                </p>
                
                <h2>Isabella</h2>
              </div>
              <div className="item">
                <img src={p2} className="img-fluid profile-pic" />
                <div className="icon3">
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
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vel mi quam. Fusce vehicula vitae mauris sit amet tempor.
                  Donec consectetur nisi eu mauris auctor, in egestodio mollis
                  phasellus urna lacus.
                </p>
                <h2>Isabella</h2>
              </div>

              {/* <div className="item">
            <img src={p1}/>
      </div> */}
            </OwlCarousel>
          </div>
          <div className="col-lg-6">
          <OwlCarousel
              className="owl-theme"
              loop={true}
              items={1}
              autoplay={true}
              dots={false}
            >
              <div className="item">
                <img src={p3} className="img-fluid profile-pic" />

                <div className="icon3">
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
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vel mi quam. Fusce vehicula vitae mauris sit amet tempor.
                  Donec consectetur nisi eu mauris auctor, in egestodio mollis
                  phasellus urna lacus.
                </p>
                
                <h2>Isabella</h2>
              </div>
              <div className="item">
                <img src={p4} className="img-fluid profile-pic" />
                <div className="icon3">
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
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vel mi quam. Fusce vehicula vitae mauris sit amet tempor.
                  Donec consectetur nisi eu mauris auctor, in egestodio mollis
                  phasellus urna lacus.
                </p>
                <h2>Isabella</h2>
              </div>

              {/* <div className="item">
            <img src={p1}/>
      </div> */}
            </OwlCarousel>
          
          </div>
        </Row>
      </div>
    </>
  );
};

export default Quotes;
