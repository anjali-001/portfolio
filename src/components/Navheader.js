import React, { useState,useContext } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {Context} from '../context';
import wlogo from '../img/wlogo.png';
import blogo from '../img/blogo.png';

const Navheader = (props) => {
    const {darkMode, toggleTheme} = useContext(Context);

  return (
    <div>
    <Navbar variant={darkMode?"dark":"light"} expand="" className={darkMode?"nonav-dark":"nonav-light"}>
  <Navbar.Brand href="/"><img src={darkMode?blogo:wlogo} className="img-fluid nav-logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto text-center">
      <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link onClick={()=>toggleTheme()}><i className={darkMode?"fa fa-sun-o":"fa fa-moon-o"}/> {darkMode?"Light":"Dark"}</Nav.Link>
     
    </Nav>

  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Navheader;