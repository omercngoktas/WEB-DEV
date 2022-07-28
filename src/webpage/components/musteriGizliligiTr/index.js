import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
import ImageBox from './imageBox';

class MGPclass extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    {/* <PageTitle pageName={'Musteri Gizliligi Politikası'} /> */}
                </Container>
                <Segment>
                    <Container>
                        <Row>
                            <Col xl={12} xs={12} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/BMG_Müşteri_Gizliliği_Politikası.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { MGPclass }