import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
import ImageBox from './imageBox';

class InsanHaklarıClass extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    {/* <PageTitle pageName={'İnsan Hakları Politikası'} /> */}
                </Container>
                <Segment>
                    <Container>
                        <Row>
                            <Col xl={12} xs={12}>
                                <ImageBox src={'/esg/images/BMG_İnsan_Hakları_Politikası.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { InsanHaklarıClass }