import React from 'react'
import {NavLink} from 'react-router-dom';
import {Button,Container,Nav,Navbar} from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="">Blog App</Navbar.Brand>
       <Nav className='me-auto'>
        <Nav.Link href="#account">Account</Nav.Link>
        <NavLink to="/" activeClassName='active'  className=" nav" exact>HomePage</NavLink>
        <NavLink to="/blogs" activeClassName='active'  className=" nav">BlogList</NavLink>
        <NavLink to="/create" activeClassName='active'  className=" nav">AddBlog</NavLink>
        </Nav>
      </Container>
      
    </Navbar>
    
    
    
  )
}

export default Header
