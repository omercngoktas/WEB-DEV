import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Linkedin from '../../../images/social-icons/linkedin.svg';
import {onClickDownload} from '../../helpers';

const Extend = ({facebook, instagram, linkedin}) =>  {

  return (
    <Container>
        <Row className='p-4 text-center'>
            <Col xl={4} xs={12}>
                <h6 style={{color: 'white', fontSize: '14px'}}>
                    BirgiMefar Copyrights &copy; 2020 All Rights Reserved
                </h6>
            </Col>
            <Col xl={4} xs={12} onClick={event => onClickDownload(event, "kvkk/Mefar_KVKK_Politikası.pdf")}>
            <a href="!#" style={{textDecoration: 'none',cursor:'pointer'}}>
                <h6 style={{color: 'white', fontSize: '14px'}}>
                Privacy Policy
                </h6>
            </a>
            </Col>
            <Col xl={4} xs={12}>
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
