import React from 'react';
import {Row, Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const BigCard = (props) => {
    return(
      <Card as={Link} to={props.link} className={'m-2 p-1 hoverable bigCard'}>
        <Row>
          <Col xs={12} md={12}>
          <img className={"image-area"} src={props.image} thumbnail style={{float:'left', height:'50vh', width:'100%'}} />
            <div className={'p-4'} style={{display:'flow-root'}}>
              <h3 className={'baslik'}>{props.title}</h3>
              <i>{props.date}</i>
            </div>
          </Col>
        </Row>
    </Card>
    )
}

export default BigCard