import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';
// import PageTitle from '../content/pageTitle';
import ImageBox from './imageBox';

class SecPolicyTR extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    {/* <PageTitle pageName={'Sağlık, Emniyet, Çevre, Sosyal ve Yönetişim Politikası'} /> */}
                </Container>
                <Segment>
                    <Container>
                        <Row>
                            <Col xl={12} xs={12}>
                                <ImageBox src={'/esg/images/Sağlık_Emniyet_Çevre_Sosyal_ve_Yönetişim_Politikası2.jpg'} width={'100%'} />
                            </Col>
                        </Row>
                    </Container>
                </Segment>
            </>
        )
    }
}
export { SecPolicyTR }