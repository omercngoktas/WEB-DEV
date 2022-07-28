import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Segment} from 'semantic-ui-react';
import PageTitle from '../content/pageTitle';
import ImageBox from './imageBox';

class Esg extends Component {
    render(){
        return(
            <>
                <Container style={{paddingTop:"10px"}}>
                        <PageTitle pageName={'ENVIRONMENT, SOCIAL AND GOVERNANCE (ESG)'}/>
                </Container>
                <Segment>
                    <Container>
                        <Row>
                        <Col xl={12} xs={12}>
                        <ImageBox src={'/esg/images/ESG_1.jpg'} width={'100%'}/>
                        </Col>
                    </Row>
                   </Container>
            </Segment>
        </>
        )
    }
}
export {Esg}