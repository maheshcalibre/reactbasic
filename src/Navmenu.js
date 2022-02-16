import React from 'react';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';

import AddUsers from './AddUsers';
import EditUser from './EditUser';
import View from './View';

import Register from './Register';
import Login from './Login';





function Navmenu() {
  return (
    <Router>
      <div>

        <Navbar bg="info" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Demo</Navbar.Brand>
            {/* <Nav.Link as={Link} to="/">React-Bootstrap</Nav.Link> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link  as={Link} to="/register">Register</Nav.Link>
                <Nav.Link  as={Link} to="/login">Login</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>

      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />

        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/edituser/:id" element={<EditUser />} />

        <Route path="/view/:id" element={<View />} />


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


      </Routes>



    </Router>


  );
}

export default Navmenu;