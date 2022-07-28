import React from 'react';
import { Navbar , Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-white.png';

const NavBar = () =>  {
    return(
                <Navbar className="justify-content-md-center" style={{marginRight: '-15px'}} bg="primary" expand="xl" variant="dark">
                    <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Brand as={Link} to="/">
                                <img className="align-items-center" alt="Logo" src={Logo} width="100px"/>
                            </Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about" >About</Nav.Link>
                                    <Nav.Link as={Link} to="/companies" >Companies</Nav.Link>
                                    <Nav.Link as={Link} to="/products-services" >Products & Services</Nav.Link>
                                    <Nav.Link as={Link} to="/customers" >Customers</Nav.Link>
                                    <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/downloads" >Downloads</Nav.Link>
                                    <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
    )
}

export default NavBar;
