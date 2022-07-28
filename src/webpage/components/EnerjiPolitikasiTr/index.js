import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
import ImageBox from './imageBox';

class EnerjiPolitikasiClass extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                </Container>
                <Segment>
                    <Container>
                        <Row>
                            <Col xl={12} xs={12}>
                                <ImageBox src={'/esg/images/BMG_Enerji Politikası.png'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { EnerjiPolitikasiClass }