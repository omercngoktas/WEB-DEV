import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
import ImageBox from './imageBox';

class IsSurekliligiClass extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    {/* <PageTitle pageName={'İş Sürekliliği'} /> */}
                </Container>
                <Segment>
                    <Container>
                        <Row>
                            <Col xl={12} xs={12}>
                                <ImageBox src={'/esg/images/BMG_İs_Sürekliliği Politikası.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { IsSurekliligiClass }