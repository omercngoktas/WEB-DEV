import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
import ImageBox from './imageBox';

class FECKClass extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    {/* <PageTitle pageName={'Fırsat Eşitliği, Çeşitlilik ve Kapsayıcılık Politikası'} /> */}
                </Container>
                <Segment>
                    <Container>
                        <Row>
                            <Col xl={12} xs={12}>
                                <ImageBox src={'/esg/images/Fırsat_Eşitliği_Çeşitlilik_ve_Kapsayıcılık_Politikası_1.jpg'} width={'100%'} />
                            </Col>
                            <Col xl={12} xs={12} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/Fırsat_Eşitliği_Çeşitlilik_ve_Kapsayıcılık_Politikası_2.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { FECKClass }