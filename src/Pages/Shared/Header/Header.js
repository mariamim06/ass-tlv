
import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
    
<>
  <Navbar className="nav-bar" sticky="top" variant="light" collapseOnSelect expand="lg">
    <Container>
    <Navbar className="logo" href="#home">carX</Navbar>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/products">Collections</Nav.Link>
      {/* <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link> */}
      <Nav.Link as={HashLink} to="/home#reviews">Reviews</Nav.Link>
      
     
      {user?.email ?

      <div className="">
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      <Button onClick={ logOut } variant="danger mx-3">Logout</Button>
      </div>
      :
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      
    </Navbar.Collapse>

    </Container>
  </Navbar>
</>

     

      
    );
};

export default Header;