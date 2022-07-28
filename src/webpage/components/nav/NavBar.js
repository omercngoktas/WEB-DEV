import React, { Component } from 'react';
import { Navbar , Nav, Container, NavDropdown} from 'react-bootstrap';
//import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-white.png';
import HoverLogo from '../../images/logo.png';

class NavBar extends Component {
    render(){
        return (
                <Navbar className={`justify-content-md-center`} style={{marginRight: '-15px'}} bg={"primary" } expand="xl" variant={"dark"}>
                <Container fluid>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Brand as={Link} to="/">
                            <img src={Logo}
                                className="align-items-center logo" 
                                alt="Logo"
                                onMouseOver={e => (e.currentTarget.src = HoverLogo)}
                                onMouseLeave={e => (e.currentTarget.src = Logo)}
                                width="80px" />
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                <Nav.Link as={Link} to="/latestNews" >News</Nav.Link>
                                <Nav.Link as={Link} to="/about" >About</Nav.Link>
                                <Nav.Link as={Link} to="/companies" >Companies</Nav.Link>
                                <Nav.Link as={Link} to="/products-services" >Products & Services</Nav.Link>
                                <NavDropdown title="Sustainability" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/SustainabilityPolicy">Sustainability Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/HealthSafetyEnviromentSocialGovernancePolicy">Health Safety Environment Social and Governance Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/BusinessContinuityPolicy">Business Continuity Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/EnergyPolicy">Energy Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ClimateChangeStatementPolicy">Climate Change Statement Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ResponsibleSupplyChainPolicy">Responsible Supply Chain Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/CustomerPrivacyPolicy">Customer Privacy Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/EqualOpportunityDiversitInclusionPolicy">Equal Opportunity Diversit and Inclusion Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/HumanRightsPolicy">Human Rights Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/CorporateGovernancePolicy">Corporate Governance Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/QualityPolicy">Quality Policy</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/certificates/BMG 2021 Sustainability Report.pdf" target="_blank">BMG 2021 Sustainability Report</NavDropdown.Item>
                                    
                                </NavDropdown>
                                <Nav.Link as={Link} to="/customers" >Customers</Nav.Link>
                                <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                                <Nav.Link as={Link} to="/downloads" >Downloads</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar>
                            <Nav>
                                <Nav.Link as={Link} to="/tr" ><i className="tr flag"/></Nav.Link>
                            </Nav>
                        </Navbar>
                </Container>
            </Navbar>
             )
        }
};

export default NavBar
