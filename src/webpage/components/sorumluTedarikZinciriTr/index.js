import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
import ImageBox from './imageBox';

class STZClass extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    {/* <PageTitle pageName={'Sorumlu Tedarik Zinciri Politikası'} /> */}
                </Container>
                <Segment>
                    <Container>
                        <Row>
                            <Col xl={12} xs={12} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/BMG_Sorumlu_Tedarik_Zinciri_Politikası_1.jpg'} width={'100%'} />
                            </Col>
                            <Col xl={12} xs={12} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/BMG_Sorumlu_Tedarik_Zinciri_Politikası_2.jpg'} width={'100%'} />
                            </Col>
                            <Col xl={12} xs={12} style={{ marginTop: '2rem' }}>
                                <ImageBox src={'/esg/images/BMG_Sorumlu_Tedarik_Zinciri_Politikası_3.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { STZClass }