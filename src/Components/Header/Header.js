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
      <div className="row">
        <img
          className="certified-logo col-xs-offset-2 col-xs-8"
          src={Logo}
        ></img>
      </div>
      <div>
      <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/Providers">Providers</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
      <nav className="navbar navbar-default">
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
  </nav>
    </div> 
  );
}

export default Header;
