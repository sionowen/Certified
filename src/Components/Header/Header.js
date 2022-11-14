import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../Assets/CertifiedLogoFixed.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

  return (
    <div>
      {/* <div className="row">
        <img
          className="certified-logo col-xs-offset-2 col-xs-8"
          src={Logo}
        ></img>
      </div> */}
      <Navbar bg="warning" variant="light" expand="lg">
      <Container>
        <Navbar.Brand position="left" href="/"> <div className="row">
        <img
          className="certified-logo col-xs-offset-2 col-xs-8"
          src={Logo}
        ></img>
      </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Container className="row justify-content-md-center">
                <Container className="col-md-auto">
            <Nav.Link href="/">
              <h4>Home</h4>
              </Nav.Link>
            <Nav.Link href="/Providers"><h4>Providers</h4></Nav.Link>
            <Nav.Link href="/Patients"><h4>Patients</h4></Nav.Link>
            <Nav.Link href="/facility"><h4>Facility</h4></Nav.Link>
            <Nav.Link href="/staff"><h4>Meet Us</h4></Nav.Link>
            <Nav.Link href="/community"><h4>Community</h4></Nav.Link>
            </Container>
            </Container>
            <NavDropdown className="btn btn-primary" bg="primary" title="Business" id="basic-nav-dropdown">
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="/Insurance">
              Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/career">
                Careers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      {/* <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-collapse row">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Providers">Providers</Link>
              </li>
              <li className="nav-item">
                <Link to="/Patients">Patients</Link>
              </li>
              <li className="nav-item">
                <Link to="/facility">Facility</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/Insurance">Insurance</Link>
              </li>
            </ul>
          </div>
        </div>
  </nav> */}
    </div> 
  );
}

export default Header;
