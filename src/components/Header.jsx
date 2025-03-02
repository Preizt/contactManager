import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <Navbar className="navbar">
      <Container>
        
        <Link to={'/'}  style={{textDecoration:'none',fontSize:'40px',}}>  ContactHub <i className="fa-solid fa-address-book "></i></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome !
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header