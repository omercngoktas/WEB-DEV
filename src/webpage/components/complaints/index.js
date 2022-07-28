import React, { Component } from 'react';
import agent from '../../../axios/agent';
import { Segment, Checkbox } from 'semantic-ui-react';
import { Form, Button, Container, Col, Modal, Row } from 'react-bootstrap';
import SuccessLogo from './tick.png';
import FalseLogo from './false.png';
import emailjs from 'emailjs-com';

class ComplaintsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameSurname: null,
            phoneNumber: null,
            companyName: null,
            email: null,
            subject: null,
            description: null,
            date: new Date(),
            onFormGoing: true,
            formCanceled: false,
            isOpen: false,
            isOpen1: false,
            isSelectedDepartment: false,
            status: null,
        }
        this.createComplaintsHandler = this.createComplaintsHandler.bind(this)
    }

    createComplaintsHandler(event) {
        console.log(event);
        event.preventDefault();
        const { nameSurname, phoneNumber, companyName, email, subject, description, date, status } = this.state;
        let newForm = {
            nameSurname: nameSurname,
            phoneNumber: phoneNumber,
            companyName: companyName,
            email: email,
            subject: subject,
            description: description,
            date: date,
            Department: status,
        }
        let templateParams = {
            user_email: email,
            user_subject: subject,
            message: '<hr></hr>Ad Soyad : ' + nameSurname + '<hr></hr>' + 'Telefon: ' + phoneNumber + '<hr></hr>' + 'Şirket: ' + companyName + '<hr></hr>' + 'Mesaj: ' + description,
        }
        if (status === "T") {
            emailjs.send(
                'gmail_service',
                'template_h9kkxvm',
                templateParams,
                'user_sYzG1ti0KxwG2LJiHJmYg'
            )
        }
        if (status === "KG") {
            emailjs.send(
                'gmail_service',
                'template_zw6xrm4',
                templateParams,
                'user_sOKqCxFMmdQ8JfRVrXVcl'
            )
        }
        if (status === "ISG") {
            emailjs.send(
                'gmail_service',
                'template_thdjj0f',
                templateParams,
                'user_sOKqCxFMmdQ8JfRVrXVcl'
            )
        }
        if (status === "KRM") {
            emailjs.send(
                'service_d1crp93',
                'template_e2ddv8l',
                templateParams,
                'user_2hkfkWS8PblJqszGjiCuu'
            )
        }
        if (status === "IRF") {
            emailjs.send(
                'service_d1crp93',
                'template_2n2fpnj',
                templateParams,
                'user_2hkfkWS8PblJqszGjiCuu'
            )
        }


        console.log(newForm);
        agent.ComplaintsForm.create(newForm)
            .then(response => {
                if (response.status === 200)
                    this.setState({
                        onFormGoing: false
                    })
                else this.setState({
                    formCanceled: true
                })
            })
    }
    handleChange = (e, { value }) => {
        this.setState({ value })
        if (value === "T") {
            console.log("T secildi");
            this.setState({
                status: "T",
                isSelectedDepartment: true,
            })
        }
        if (value === "KGD") {
            console.log("KG secildi");
            this.setState({
                status: "KG",
                isSelectedDepartment: true,
            })
        }
        if (value === "ISG") {
            console.log("ISG secildi");
            this.setState({
                status: "ISG",
                isSelectedDepartment: true,
            })
        }
        if (value === "KRM") {
            console.log("KRM secildi");
            this.setState({
                status: "KRM",
                isSelectedDepartment: true,
            })
        }
        if (value === "IRF") {
            console.log("IRF secildi");
            this.setState({
                status: "IRF",
                isSelectedDepartment: true,
            })
        }

    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    openModal1 = () => this.setState({ isOpen1: true });
    closeModal1 = () => this.setState({ isOpen1: false });

    render() {
        const { formCanceled, onFormGoing, isSelectedDepartment } = this.state
        return (
            <Segment style={{ marginTop: '25px' }}>
                <h2 style={{ textAlign: 'center', padding: '10px' }}>Stakeholder Contact Form</h2>
                <h4 style={{ textAlign: 'center', padding: '10px' }}>Please select the relevant department to convey your notifications about customer complaints, environment, occupational health and safety, business development and sales.</h4>
                <Container centered style={{textAlign: 'center', float:'center'}}>
                    <Row>
                        <Form>
                            <Form.Group>
                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='Business Development Team'
                                    name='checkboxRadioGroup'
                                    value='T'
                                    checked={this.state.value === 'T'}
                                    onChange={this.handleChange}
                                />

                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='Quality Assurance Department'
                                    name='checkboxRadioGroup'
                                    value='KGD'
                                    checked={this.state.value === 'KGD'}
                                    onChange={this.handleChange}
                                />
                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='Sustainability'
                                    name='checkboxRadioGroup'
                                    value='KRM' // Kurumsal İlişkiler
                                    checked={this.state.value === 'KRM'}
                                    onChange={this.handleChange}
                                />

                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='Occupational Health and Safety Department'
                                    name='checkboxRadioGroup'
                                    value='ISG'
                                    checked={this.state.value === 'ISG'}
                                    onChange={this.handleChange}
                                />
                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='Information Request Form'
                                    name='checkboxRadioGroup'
                                    value='IRF' // Kurumsal İlişkiler
                                    checked={this.state.value === 'IRF'}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form>
                      
                    </Row>
                </Container>



                {isSelectedDepartment ? <div>
                    {onFormGoing ?
                        <Container>
                            <Segment>
                                <Form onSubmit={event => this.createComplaintsHandler(event)}>
                                    <Form.Group>
                                        <Form.Row style={{ marginTop: '25px' }} >
                                            <Col>
                                                <Form.Label>Name Surname</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Name Surname"
                                                    value={this.state.nameSurname}
                                                    onChange={(event) => { this.setState({ nameSurname: event.target.value }) }}
                                                    required />
                                                <Form.Text className="text-muted"></Form.Text>
                                            </Col>
                                            <Col>
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Phone Number"
                                                    value={this.state.phoneNumber}
                                                    onChange={(event) => { this.setState({ phoneNumber: event.target.value }) }}
                                                    maxlength={11}
                                                    required />
                                                <Form.Text className="text-muted"></Form.Text>
                                            </Col>
                                        </Form.Row>

                                        <Form.Row style={{ marginTop: '10px' }}>
                                            <Col>
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Email"
                                                    value={this.state.email}
                                                    onChange={(event) => { this.setState({ email: event.target.value }) }}
                                                    required />
                                            </Col>
                                            <Col>
                                                <Form.Label>Company Name</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Company Name"
                                                    value={this.state.companyName}
                                                    onChange={(event) => { this.setState({ companyName: event.target.value }) }}
                                                    required />
                                            </Col>
                                        </Form.Row>

                                        <Form.Row style={{ marginTop: '10px' }}>
                                            <Col>
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Subject"
                                                    value={this.state.subject}
                                                    onChange={(event) => { this.setState({ subject: event.target.value }) }}
                                                    minlength={12}
                                                    required />
                                            </Col>
                                        </Form.Row>
                                        <Form.Label style={{ marginTop: '10px' }}>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3}
                                            placeholder="Description"
                                            value={this.state.description}
                                            onChange={(event) => { this.setState({ description: event.target.value }) }}
                                            required />

                                    </Form.Group>
                                    <Button variant="primary" type="submit" value="send">
                                        Submit
                                    </Button>
                                    <div style={{ float: 'right' }}
                                        className=""
                                    >
                                        <Button variant="secondary" onClick={this.openModal1}>
                                            Customer Complaint Mng.
                                        </Button>
                                    </div>
                                    <div style={{ float: 'right', marginRight: '10px' }}
                                        className=""
                                    >
                                        <Button variant="secondary" onClick={this.openModal}>
                                            Data Owner App
                                        </Button>
                                    </div>

                                    <Modal size="xl" show={this.state.isOpen} onHide={this.closeModal} aria-labelledby="example-modal-sizes-title-lg">
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-lg">Data Owner App</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h5>
                                                BIRGIMEFAR ENTERPRISE GROUP, DATA OWNER APPLICATION FORM
                                            </h5>
                                            <p>
                                                Specific rights with regard to processing personal data have been recognized in Article 11 of the Law to personal data owners ("Data Owner") defined as the relevant person in the Personal Data Protection Law ("Law") no. 6698.
                                            </p>
                                            <p>
                                                In pursuance of the first paragraph of Article 13 of the Law, the application to be made in relation these rights to our Company that is the data supervisor should be in writing or should be communicated to us with the other methods defined by the Personal Data Protection Board ("Board)". Within this framework, the applications to be made to our Company in "writing" should be communicated to us by using this form from the physical environment via notary public or registered e-mail.
                                            </p>
                                            <p>
                                                Your applications communicated to us shall be responded within "at the latest thirty days and as soon as possible" as of the date in which your request has been delivered to us as to the nature of the request as per paragraph 2 of Article 13. Our responses shall be delivered to you from the electronic environment or in writing as per the provision of Article 13 of the Law.
                                            </p>
                                            <p>
                                                As to nature of this form and your request, the information and documents requested from you should be delivered to us in accurate and correct manner. In cases where the requested information and documents are not provided as for how it should be, breakdowns can be experienced in full and qualified execution of the studies to be made based on the request by our Company. In this case, legal rights of our company are reserved. For this reason, the relevant form should be dispatched in a manner that shall include the requested information and documents correctly based on your request.
                                            </p>
                                            <h5>
                                                DATA OWNER INFORMATION
                                            </h5>
                                            <p>
                                                In order for us to contact you and to verify your identity, complete the following fields.
                                            </p>
                                            <ul>
                                                <li>Name-Surname</li>
                                                <li>Republic of Turkey TR Identification Number:</li>
                                                <li>Address</li>
                                                <li>Mobile Phone</li>
                                                <li>E-mail</li>
                                                <li>Your relationship with our Company</li>
                                                <li>Customer</li>
                                                <li>Visitor</li>
                                                <li>Business Partner</li>
                                                <li>Other</li>
                                            </ul>
                                            <p>
                                                In addition to this, your information you have indicated above can be requested for obtaining more detailed information relating to your application, informing your regarding the investigation process and communicating the application results.
                                            </p>
                                            <h5>
                                                APPLICATION CONTENT
                                            </h5>
                                            <p>
                                                Please specify what your personal data that is subject to your request is. Within this context, we kindly ask you to indicate below your request relating to personal data.
                                            </p>
                                            <h5>
                                                APPLICANT DECLARATION
                                            </h5>
                                            <p>
                                                I kindly request that I would be informed after my application made to your Company is considered as per Article 13 of the Law in line with the requests that I have specified above.
                                            </p>
                                            <p>
                                                I hereby undertake and declare that my information and documents that I have provided to you in this application are correct and up to date and I have been enlightened in the issue of necessity for me to pay the fee designated by the Board in cases where an additional cost is required and additional information can be requested in order for the Company to finalize my application.
                                            </p>
                                            <p>
                                                I hereby would like the response be sent to my mail address I have provided in Part 2.
                                            </p>
                                            <p>
                                                I hereby would like to responses be sent to my e-mail address I have provided in Part 2.
                                            </p>
                                            <strong>
                                                Relevant Applicant Person (Personal Data Owner)
                                                <br></br>
                                                Name & Surname:
                                                <br></br>
                                                Date of Application:
                                                <br></br>
                                                Signature:
                                                <br></br>
                                            </strong>
                                        </Modal.Body>
                                    </Modal>

                                    <Modal size="xl" show={this.state.isOpen1} onHide={this.closeModal1} id="example-modal-sizes-title-lg">
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-lg">Customer Complaint Mng.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h5> BİRGİ CUSTOMER COMPLAINT PROCESS </h5>
                                            <ul>
                                                <li>
                                                    <h6>
                                                        Notification of the complaints:
                                                    </h6>
                                                    <p>
                                                        Complaints should be notified in written form. For this purpose, "customer complaints notification form" defined in our web adress, could be filled out. The complaint which is sent by this link will directly notify Birgi Sales department.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Receipt of the complaint:
                                                    </h6>
                                                    <p>
                                                        When the authorized person of Sales department is informed from the complaint, she/he fills out the parts of the Customer Complaint Evaluation form: "complaint sent by" and "complaint notified by". If there is a form/e-mail sent by the customer, it will be attached to the evaluation form. Complaint evaluation form is sent to Quality System Administrator in the same day of the complaint is received.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Sending the preliminary answer letter to the customer explaining that the complaint has been received
                                                    </h6>
                                                    <p>
                                                        Quality System Administrator inspects the complaint and its samples if they have been sent. If the samples have not been sent, he evaluates whether the samples are required or not. A short information letter, is sent to the customer by Quality System Administrator, to explain that the complaint is received and the investigation is initiated, within the latest one working day after receiving the complaint. Samples for the complaint evaluation are requested, if it is required.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Planning the processes to be performed for evaluating the complaint:
                                                    </h6>
                                                    <p>
                                                        Quality System Administrator determines the inspections and investigations to be performed according to the characteristic of the complaint. Investigations to be performed are stated in the evaluation form. Responsiblity and the target date of each action is defined. The original of the customer evaluation form, is sent to the department who will perform the investigations, within the latest one working day after receiving the complaint. At the same time, customer evaluation form is distrubuted to other relevant departments by e-mail for information.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Sending the interim report to the customer regarding the investigations of the complaint:
                                                    </h6>
                                                    <p>
                                                        Complaints are concluded in the latest 5 working days after the date at which complaints are notified. The intertim report is sent to the customer by Quality System Administrator regarding the complaint which could not be concluded in this time according to the scope of performed investigations. Continuing studies and performed investigations up to that date, are explained in the interim report.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Concluding the complaint:
                                                    </h6>
                                                    <p>
                                                        The reason of nonconformance that leads to the complaint is detected with performed investigations and evaluations. It is clarified whether the complaint is generated from Birgi or not. Obtained result is sent objectively in written to the customer. In cases, it is determined that the complaint is clearly generated from Birgi, determined correction actions are informed to the customer to prevent reoccurence of the complaint. In cases, it is determined that the complaint is not clearly generated from Birgi, results of the performed investigations are explained to the customer. It is explained whether that there is no finding regarding that the problem is generated from Birgi. It is asked to the customer that they have a request regarding any additional investigation to be performed, in the response letter of the complaint
                                                    </p>
                                                </li>
                                            </ul>
                                            <h5>
                                                MEFAR CUSTOMER COMPLAINT PROCESS
                                            </h5>
                                            <ul>
                                                <li>
                                                    <h6>
                                                        Notification of the complaints:
                                                    </h6>
                                                    <p>
                                                        Complaints should be notified in written form. For this purpose, "customer complaints notification form" defined in our web adress, could be filled out. The complaint which is sent by this link will directly notify Birgi Sales department.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Receipt of the complaint:
                                                    </h6>
                                                    <p>
                                                        The sales department, if necessary, calls for the mentioned company / department, supplies the relevant sample, fills the customer complaint form and sends to the Quality Assurance department.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Evaluation of complaint and planning the processes to be performed for evaluating the complaint:
                                                    </h6>
                                                    <p>
                                                        Classification and risk assessment of current customer complaint are done and necessary investigations are initiated by Quality Assurance Manager.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Sending Pre-Respond to the Customer Regarding the Complaint:
                                                    </h6>
                                                    <p>
                                                        A pre-respond is sent to the complaining company that states the complaint is notified and the necessary actions are initiated within 3 working days. (The preliminary investigation information is sent to the customer in 24 hours for critical complaints). In case of the complaint declaration is come from market directly (not from customer), it is declared to customer in 24 hours by Commercial Affairs Management.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Sending Interim Report to the Customer Regarding the Complaint:
                                                    </h6>
                                                    <p>
                                                        The actions regarding the customer will be concluded within 5 working days. If a time extension is needed depending on the characteristics of the complaint, and if this extension exceeds 5 working days the Product Release Unit Supervisor prepares an interim report and sends to the customer.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h6>
                                                        Concluding of the complaint:
                                                    </h6>
                                                    <p>
                                                        The reason of nonconformance that leads to the complaint is detected with performed investigations and evaluations. It is clarified whether the complaint is generated from Mefar or not. Obtained result is sent objectively in written to the customer. In cases, it is determined that the complaint is clearly generated from Mefar, preventative actions are also informed to the customer to prevent recurrence of the complaint. In cases, it is determined that the complaint is not clearly generated from Mefar, results of the performed investigations are explained to the customer. It is explained whether that there is no finding regarding that the problem is generated from Mefar. It is asked to the customer that they have a request regarding any additional investigation to be performed, in the response letter of the complaint.
                                                    </p>
                                                </li>
                                            </ul>
                                        </Modal.Body>
                                    </Modal>

                                </Form>
                            </Segment>
                        </Container>

                        : <div style={{ textAlign: 'center', marginTop: '25px' }}>
                            {
                                formCanceled ?
                                    <>
                                        <img src={FalseLogo} style={{ maxHeight: '200px' }} alt='' />
                                        <h1 style={{ color: 'red' }}>Error.</h1>
                                    </>
                                    :
                                    <>
                                        <img src={SuccessLogo} style={{ maxHeight: '200px' }} alt='' />
                                        <h1 style={{ color: '#32c671' }}>Your Message Has Been Sent.</h1>
                                    </>
                            }
                        </div>
                    }
                </div> : null}
            </Segment>
        )
    }
}

export { ComplaintsForm }