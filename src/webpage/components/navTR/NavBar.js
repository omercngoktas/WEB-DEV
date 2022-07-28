import React from 'react';
import { Navbar , Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-white.png';
import HoverLogo from '../../images/logo.png';

const NavBarTR = () =>  {
    return(
                <Navbar className={"justify-content-md-center"} style={{marginRight: '-15px'}} bg="primary" expand="xl" variant="dark">
                    <Container fluid>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Brand as={Link} to="/tr">
                            <img src={Logo}
                                 className="align-items-center logo" 
                                 alt="Logo"
                                 onMouseOver={e => (e.currentTarget.src = HoverLogo)}
                                 onMouseLeave={e => (e.currentTarget.src = Logo)}
                                width="80px" />
                            </Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/tr" >Anasayfa</Nav.Link>
                                    <Nav.Link as={Link} to="/tr/haberler" >Haberler</Nav.Link>
                                    <Nav.Link as={Link} to="/tr/hakkimizda" >Hakkımızda</Nav.Link>
                                    <Nav.Link as={Link} to="/tr/sirketler" >ŞİRKETLER</Nav.Link>
                                    <Nav.Link as={Link} to="/tr/urunler-hizmetler" >ÜRÜN & SERVİSLER</Nav.Link>
                                        <NavDropdown title="SÜRDÜRÜLEBİLİRLİK" id="basic-nav-dropdown-2">
                                            <NavDropdown.Item as={Link} to="/tr/surdurulebilirlik">Sürdürülebilirlik Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/sec-politikasi">Sağlık, Emniyet, Çevre, Sosyal ve Yönetişim Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/is-surekliligi-politikasi">İş Sürekliliği Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/enerji-politikasi">Enerji Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/iklim-degisikligi-beyannamesi">İklim Değişikliği Beyanı</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/sorumlu-tedarik-zinciri-politikası">Sorumlu Tedarik Zinciri Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/musteri-gizliligi-politikası">Müşteri Gizliliği Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/fırsat-esitiligi-cesitlilik-kapsayıcılık">Fırsat Eşitliği, Çeşitlilik ve Kapsayıcılık Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/insan-hakları-politikası">İnsan Hakları Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/cevre-saglik-kurumsal">Kurumsal Yönetişim</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/tr/kalite-politikası">Kalite Politikası</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/certificates/Birgi Mefar Sürdürülülebilirlik Raporu.pdf" target="_blank">BMG 2021 Sürdürülebilirlik Raporumuz</NavDropdown.Item>
                                        </NavDropdown>
                                    <Nav.Link as={Link} to="/tr/musteriler" >MÜŞTERİLER</Nav.Link>
                                    <Nav.Link as={Link} to="/tr/iletisim" >İLETİŞİM</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/login" >GİRİŞ YAP</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar>
                                <Nav>
                                    <Nav.Link as={Link} to="/"><i class="gb uk flag"></i></Nav.Link>
                                </Nav>
                            </Navbar>
                    </Container>
                </Navbar>
    )
}

export default NavBarTR;
