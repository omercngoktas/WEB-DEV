import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Segment} from 'semantic-ui-react';
// import PageTitle from '../content/pageTitle';
import ImageBox from './imageBox';

class Sustainability extends Component {
    render(){
        return(
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
                                <ImageBox src={'/esg/images/Sustainability-Policy-1.jpg'} width={'100%'} />
                            </Col>
                            <Col xl={12} xs={4} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/Sustainability-Policy-2.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
        </>
        )
    }
}
export {Sustainability}