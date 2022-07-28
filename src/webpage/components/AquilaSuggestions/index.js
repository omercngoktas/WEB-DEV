import React, { Component } from 'react';
import agent from '../../../axios/agent';
import { Segment } from 'semantic-ui-react';
import { Form, Button, Container, Col, Image } from 'react-bootstrap';
import SuccessLogo from './tick.png';
import FalseLogo from './false.png';
import './style.css';
import Logo from './logo1.png';

class AquilaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameSurname: null,
            description: null,
            departman: null,
            date: new Date(),
            onFormGoing: true,
            formCanceled: false,
            status: '0'
        }
        this.createComplaintsHandler = this.createComplaintsHandler.bind(this)
    }

    createComplaintsHandler(event) {
        console.log(event);
        event.preventDefault();
        const { nameSurname, description, date,departman } = this.state;
        let newForm = {
            adSoyad: nameSurname,
            oneri: description,
            departman: departman,
            date: date,
            status: 0,
            lastChange: "Yeni İleti"
        }
        console.log(newForm);
        agent.ProjectAquila.create(newForm)
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
    render() {
        const { formCanceled, onFormGoing } = this.state
        return (
            <Segment textAlign='center' vertical className='masthead'>

                <Container>
                    <p style={{ fontSize: '3rem' }}>SAP - Aquila Projesi Öneri Formuna Hoşgeldiniz!</p>
                    <p>Aşağıdaki formu doldurarak önerinizi IT ekibine ulaştırabilirsiniz.</p>

                </Container>

                {<div>
                    {onFormGoing ?
                        <Container>
                            <Segment style={{ marginTop: '10px' }}>
                                <Image src={Logo} style={{ maxHeight: '7rem', margin: '1rem' }} />
                                <Form onSubmit={event => this.createComplaintsHandler(event)}>
                                    <Form.Group>

                                        <Col style={{ margin: '1rem' }}>
                                            <Form.Label>Ad Soyad</Form.Label>
                                            <Form.Control controlId="formBasicSubject" style={{ textAlign: 'center' }}
                                                placeholder="Ad Soyad Yazınız..."
                                                value={this.state.nameSurname}
                                                onChange={(event) => { this.setState({ nameSurname: event.target.value }) }}
                                                required />
                                            <Form.Text className="text-muted"></Form.Text>
                                        </Col>
                                        <Col style={{ margin: '1rem' }}>
                                            <Form.Label>Departman</Form.Label>
                                            <Form.Control controlId="formBasicSubject" style={{ textAlign: 'center' }}
                                                placeholder="Departman Yazınız"
                                                value={this.state.departman}
                                                onChange={(event) => { this.setState({ departman: event.target.value }) }}
                                                required />
                                            <Form.Text className="text-muted"></Form.Text>
                                        </Col>
                                        <Col style={{ margin: '1rem' }}>
                                            <Form.Label >Öneri</Form.Label>
                                            <Form.Control as="textarea" rows={3} style={{ textAlign: 'center' }}
                                                placeholder="Öneri Yazınız.."
                                                value={this.state.description}
                                                onChange={(event) => { this.setState({ description: event.target.value }) }}
                                                required />
                                        </Col>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" value="send">
                                        Gönder
                                    </Button>
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
                                        <h1 style={{ color: '#32c671' }}>Teşekkürler, öneriniz başarı ile alındı.</h1>
                                    </>
                            }
                        </div>
                    }
                </div>}
            </Segment>
        )
    }
}

export { AquilaForm }