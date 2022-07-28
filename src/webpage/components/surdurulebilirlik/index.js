import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
import ImageBox from './imageBox';

class SustainabilityTR extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    {/* <PageTitle pageName={'Sürdürülebilirlik'} /> */}
                </Container>
                <Segment >
                    <Container >
                        {/* <h5>Sürdürülebilirlik</h5>
                        <p>
                            Türkiye ve yakın coğrafyanın en yüksek kapasiteli steril ilaç üretim hizmet merkezi (CDMO) olan Birgi Mefar Grubu yüksek kalite standartlarında faaliyetlerini toplum sağlığı için sürdürürken sürdürülebilirlik çalışmalarına da öncelik veriyor.
                        </p> */}
                        <Row>
                            <Col xl={12} xs={4} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/BMG_Sürdürülebilrlik_Politikası_1.jpg'} width={'100%'} />
                            </Col>
                            <Col xl={12} xs={4} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/BMG_Sürdürülebilrlik_Politikası_2.jpg'} width={'100%'} />
                            </Col>
                            <Col xl={12} xs={4} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/BMG_Sürdürülebilrlik_Politikası_3.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { SustainabilityTR }