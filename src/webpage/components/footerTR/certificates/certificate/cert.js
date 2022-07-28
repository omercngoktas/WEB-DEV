import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Certificate = ({cert}) =>  {
  return (
      <Col as={Link} to={'/tr/sertifikalar'} className='text-center p-3'>
        <img className='cert pl-5' alt="certificate" src={cert} />
      </Col>
  )
}

export default Certificate;
