import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
import ImageBox from './imageBox';

class EnerjiPolitikasiClassEng extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    {/* <PageTitle pageName={'Enerji Politikası'} /> */}
                </Container>
                <Segment>
                    <Container>
                        <Row>
                            <Col xl={12} xs={12}>
                                <ImageBox src={'/esg/images/Energy-Policy.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { EnerjiPolitikasiClassEng }