import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Segment} from 'semantic-ui-react';
import ImageBox from './imageBox';

class EsgTR extends Component {
    render(){
        return(
            <>
                <Container style={{paddingTop:"10px"}}>
                        {/* <PageTitle pageName={'Kurumsal Yönetişim'}/> */}
                </Container>
                <Segment>
                    <Container>
                        <Row>
                        <Col xl={11} xs={11}>
                            <ImageBox src={'/esg/images/ESG_2.jpg'} width={'100%'}/>
                        </Col>
                    </Row>
                   </Container>
            </Segment>
        </>
        )
    }
}
export {EsgTR}