import React from "react";
import { BsSearch, BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import logo from "../../images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo1 from "../../images/footer-img.png";
import imgF from "../../images/footer-payment-new (1).png"

const Footer = () => {
  return (
    <>
      <div className="footer1">
        <div className="row">
               <img src={logo1} className="imgL"/>
               <h2>Shop Limited Edition.</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor.</p>
               <img src={imgF} className="imgf1" />
       </div>
       </div>
    </>
  );
};

export default Footer;
