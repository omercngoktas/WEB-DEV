import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Segment} from 'semantic-ui-react';
import PageTitle from '../content/pageTitle';
import ImageBox from './imageBox';

class Certificate extends Component {
    render(){
        return(
            <>
                <Container style={{paddingTop:"10px"}}>
                        <PageTitle pageName={'Certificate'}/>
                </Container>
                <Segment>
                    <Container>
                    <h5>Quality Policy</h5>
                    <ul>
                    <li>All of our products are manufactured in accordance with Good Manufacturing Practices (cGMP) rules and quality. To this end;
                    <ul>
                    <li>current rules and technology are pursued</li>
                    <li>the necessary measures are taken to ensure continuous improvement and development</li>
                    <li>customers' expectations are met at a maximum level</li>
                    <li>the end-user is enabled to use our products in a fully secure manner</li>
                    </ul>
                    </li>
                    <li>In accordance with this policy, the senior management of the company completely fulfills the requirements of the quality management system and commits to increase its efficiency continuously.</li>
                    <li>In order to fulfill this commitment, the management sets new targets for all processes every year and evaluates those targets periodically.</li>
                    <li>The senior management of the company:
                    <ul>
                    <li>acts with transparency, equity and integrity in all of its relations with suppliers, customers and employees</li>
                    <li>enables a democratic atmosphere to flourish in the company</li>
                    <li>prioritises the interests of the society and the protection of nature in all kind of work carried out</li>
                    <li>trains and develops its personnel on a continuous basis. Considers labor health and security of utmost importance</li>
                    </ul>
                    </li>
                    </ul>

                    <p>Executive Committee</p>
                    <p>Issued on: October 26, 2004</p>
                    <p>Revision No: 05</p>
                    <Row>
                        <Col xl={3} xs={12}>
                        <ImageBox src={'/certificates/images/1.jpg'} width={'100%'}/>
                        </Col>
                        <Col xl={3} xs={12}>
                        <ImageBox src={'/certificates/images/2.jpg'} width={'100%'}/>
                        </Col>
                    </Row>

                    
                    <Row>
                        <Col xl={4}></Col>
                        <Col xl={4} xs={12}><ImageBox src={'/certificates/images/1(1).jpg'} width={'100%'}/></Col>
                        <Col xl={4}></Col>
                    </Row>
                    <Row>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/2(1).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/3.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/4.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/5.jpg'} width={'100%'}/></Col>
                    </Row>
                    <Row>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/TSENISO_9001_2015.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/TSENISO_9001_2015_ek_1.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/TSENISO_13485_2016.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/TSENISO_13485_2016_EK_1.jpg'} width={'100%'}/></Col>
                    </Row>
                    <Row>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/Kalite_yonetim.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/Kalite_yonetim_ek_1.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/Tibbi_cihazlar.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/Tibbi_cihazlar_ek_1.jpg'} width={'100%'}/></Col>
                    </Row>
                    <h5>GMP Certificates</h5>
                    <Row>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/1(2).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/2(2).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/3(1).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/4(1).png'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/3(1).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/6.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/7.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/8.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/9.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/10.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/11.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/12.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/13.jpg'} width={'100%'}/></Col>
                    </Row>
                    <h5>Information Security Policy</h5>
                    <ul>
                    <li>The BirgiMefar Group of Companies strives to create a sustainable environment for continuous improvement with its expert and motivated employees.</li>
                    <li>While doing so ;</li>
                    <li>We promise to ensure the prevention of all employees potential legal consequences which may arise from any breach of information security,</li>
                    <li>We promise to ensure the protection of highly critical data such as financial and technical,</li>
                    <li>We promise to ensure the confidentiality and integrity of the information systems,</li>
                    <li>We promise to ensure the continuity of the business,</li>
                    <li>We promise to prtotect the reputation and investments of our society, clients and suppliers,</li>
                    <li>For these objectives;</li>
                    <li>Up-to-date security technologies and regulations are followed,</li>
                    <li>Continuous improvement and development measures are taken,</li>
                    <li>Ongoing training to our employess is provided,</li>
                    <li>New targets and goals are set every year for each process and periodic evalutaions are done to evaluate the progress,</li>
                    </ul>
                    <h5>Policy of Customer Satisfaction and Handling Customer Complaints</h5>
                    <p>In accordance with our corporate culture as Birgi Mefar group of companies satisfaction of our customers and using our products by end-users in a complete confidence are our priorities.To this end;</p>
                    <ul>
                    <li>1. Customers' and end-users' complaints are handled in a quick, attentive, in compliance with regulations and laws and TS ISO 10002 standard,</li>
                    <li>2. Every step of investigating complaints is performed in compliance with the principles of transparency,confidentiality and being fair. nobody, institutions and parties are given deceptive and misleading information.</li>
                    <li>3. All complaints and claims are treated as added value opportunities and continuous improvement.Therefore complaints are evaluated in an efficient and effective manner and concluded certainly</li>
                    <li>4. Corrective and preventive actions required in order to prevent repetition are determined and applied without any delay</li>
                    <li>5. Our complaint management system is periodically reviewed and efficiency of the system is reported to the company management.</li>
                    <li>6. Our main goal is to eliminate all kind of situations that may create any complaints.All kinds of precautions needed for this are taken and monitored.</li>
                    </ul>
                    
                    <p>Executive Committee</p>
                    <p>Release Date: 08.03.2016</p>
                    <p>
                    <a href={'/certificates/mefarsertifikalari.pdf'}>Click for Mefar certificates</a>
                    </p>
                    <p>
                    <a href={'/certificates/birgisertifikalari.pdf'}>Click for Birgi certificates</a>
                    </p>
                    <p>
                    <a href={'/certificates/gmpsertifikalari.pdf'}>Click for GMP certificates</a>
                    </p>

                    <h5>BirgiMefar Personel Data Protection and Processing Policy</h5>
                    <a href={'/kvkk/Mefar_KVKK_Politikası.pdf'}>Click for Personel Data Protection and Processing Policy</a>
                    
                </Container>
            </Segment>
        </>
        )
    }
}
export {Certificate}