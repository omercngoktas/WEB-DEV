import React from 'react';
import {Row, Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ShortCard = (props) => {
    return(
      <Card as={Link} to={props.link} className={'m-2 p-1 hoverable'}>
        <Row>
          <Col xs={12} md={12}>
          <img className={"image-area"} src={props.image} fluid={true} thumbnail style={{float:'left', height:'20vh', width:'30vh', paddingRight:'15px'}} alt=''/>
            <div className={'pt-4'}>
              <h3 className={'baslik'}>{props.title}</h3>
              <i>{props.date}</i>
            </div>
          </Col>
        </Row>
    </Card>
    )
}

export default ShortCard