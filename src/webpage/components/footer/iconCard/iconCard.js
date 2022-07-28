import React from 'react';
import {Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

const IconCard = ({icon, color, counter, text, addon}) =>  {
  return (
    <Col className="text-center" xl={3} xs={6} style={{backgroundColor: color, padding: '40px'}} >
        <FontAwesomeIcon icon={icon} color='white' style={{fontSize: '48px'}} />
        <h3 style={{fontWeight:'bold', color: 'white', paddingTop: '5px'}}>
            <CountUp delay={2} end={counter} />{ ' '+ addon}
        </h3>
        <h5 style={{ color: 'white', paddingTop: '5px'}}>
            {text}
        </h5>
    </Col>
  )
}

export default IconCard;
