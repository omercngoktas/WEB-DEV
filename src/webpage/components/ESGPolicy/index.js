import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Segment} from 'semantic-ui-react';
import ImageBox from './imageBox';

class SecPolicyEng extends Component {
    render(){
        return(
            <>
                <Segment>
                    <Container>
                        <Row>
                        <Col xl={12} xs={12}>
                            <ImageBox src={'/esg/images/Health-Safety-Environment-Social-and-Governance-Policy.jpg'} width={'100%'}/>
                        </Col>
                    </Row>
                   </Container>
            </Segment>
        </>
        )
    }
}
export {SecPolicyEng}