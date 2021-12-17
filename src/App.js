import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'

export const App = () => {
  return <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>Your account</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/address" className="nav-link">Address book</NavLink>
            <NavLink to="/orders" className="nav-link">Orders</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="mt-3">
      <h1>Hello, hello, hello</h1>
      <Outlet/>
    </Container>
  </>
}

export default App;
