import React from 'react'
import './Navbar.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const MainNavbar = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Container>
         <Link className="link h4" to="/"> Home</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link className="link me-4" to="/counter"> Counter </Link>
            <Link className="link" to="/shop"> Shop </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default MainNavbar
