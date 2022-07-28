import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Certificate = ({cert}) =>  {
  return (
      <Col as={Link} to={'/certificates'} className='text-center p-3 certdiv'>
        <img className='cert pl-5' alt="certificate" src={cert} />
      </Col>
  )
}

export default Certificate;
