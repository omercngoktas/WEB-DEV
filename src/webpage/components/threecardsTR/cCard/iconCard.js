import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const IconCard = ({title, buttons, color}) =>  {
  const rowLen = buttons.length
  return(
    <Col xl={4} xs={12} style={{ padding: '0', backgroundColor: color}} >
      <Card style={{backgroundColor: 'transparent', border: 'none'}}>
          <Card.Body style={{padding: '60px'}}>
              <Card.Title style={{color: 'white', fontSize: '22px', padding: '5px', textAlign:'center'}}>{title}</Card.Title>
              <Row>
              {
                buttons.length %2 === 1 ?
                  buttons.map((val, i) => {
                    if (rowLen === i + 1) {
                      return(
                        <Col xl={12} xs={12}>
                          <Button as={Link} to={'/products-services'} variant="outline-light" 
                          style={{paddingRight:'5px', margin: '0px 0px 10px 0px', width:'100%'}}>
                            {val} 
                          </Button>
                        </Col>)
                    } else {
                      return(
                        <Col xl={6} xs={12}>
                          <Button as={Link} to={'/products-services'} variant="outline-light" 
                          style={{paddingRight:'5px', margin: '0px 0px 10px 0px', width:'100%'}}>
                            {val} 
                          </Button>
                        </Col>)
                        }
                    })
                    :
                    buttons.map((val)=> {
                      return(
                        <Col xl={6} xs={12}>
                          <Button as={Link} to={'/products-services'} variant="outline-light" 
                          style={{paddingRight:'5px', margin: '0px 0px 10px 0px', width:'100%'}}>
                            {val} 
                          </Button>
                        </Col>)
                    })
              }
              </Row>
          </Card.Body>
      </Card>
    </Col>
  )
}

export default IconCard;
