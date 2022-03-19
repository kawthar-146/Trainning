import React from "react";
import { BsSearch, BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import logo from "../../images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div className="logo">
              <p>Cosma</p>
            </div>
          </div>
          <div className="col-10 col-lg-6">
            <Navbar>
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-center">
                  <Nav className="me-auto ">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Shope</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Purchase Now</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="col-lg-4">
            <div>
              <div className="icon">
                <ul>
                  <li>
                    <a usehref="/">
                      <BsSearch />
                    </a>
                  </li>
                  <li>
                    <a usehref="/">
                      <BsPerson />
                    </a>
                  </li>
                  <li>
                    <a usehref="/">
                      <AiOutlineShoppingCart />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
