import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Linkedin from '../../../images/social-icons/linkedin.svg';
//import {onClickDownload} from '../../helpers'

const Extend = ({facebook, instagram, linkedin}) =>  {

  return (
    <Container>
        <Row className='p-4 text-center'>
            <Col xl={4} xs={4}>
                <a href='https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/11924' style={{textDecoration: 'none', textAlign: 'left'}}>
                    <h6 style={{color: 'white', fontSize: '14px'}}>
                        Mefar Int Bilgi Toplumu Hizmetleri
                    </h6>
                </a>
                <a href='https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/13373' style={{textDecoration: 'none', textAlign: 'left'}}>
                    <h6 style={{color: 'white', fontSize: '14px'}}>
                    Mefar Bilgi Toplumu Hizmetleri
                    </h6>
                </a>
                <a href='https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/13372' style={{textDecoration: 'none', textAlign: 'left'}}>
                    <h6 style={{color: 'white', fontSize: '14px'}}>
                    Birgi Bilgi Toplumu Hizmetleri
                    </h6>
                </a>
            </Col>
            <Col xl={4} xs={4}>
            <a href={"/kvkk/Mefar_KVKK_Politikası.pdf"} style={{textDecoration: 'none',cursor:'pointer'}}>
                <h6 style={{color: 'white', fontSize: '14px'}}>
                    Gizlilik Politikası
                </h6>
            </a>
            <a href={"/kvkk/Mefar_Kisisel_Veri_Saklama_ve_İmha_Politikası.pdf"} style={{textDecoration: 'none',cursor:'pointer'}}>
                <h6 style={{color: 'white', fontSize: '14px'}}>
                    Kisisel Veri Saklama ve İmha Politikası
                </h6>
            </a>
            </Col>
            <Col xl={4} xs={4}>
                <h6 style={{color: 'white', fontSize: '14px'}}>
                    <a href={linkedin} style={{textDecoration: 'none'}}>
                        <img className='social-icons' alt="linkedin" src={Linkedin} />
                    </a>
                    </h6>
            </Col>
        </Row>
    </Container>
  )
}

export {Extend};
