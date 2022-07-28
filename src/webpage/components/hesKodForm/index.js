import React, {Component} from 'react';
import agent from '../../../axios/agent';
import {Segment} from 'semantic-ui-react';
import {Form, Button, Container} from 'react-bootstrap';
import SuccessLogo from './tick.png';
import FalseLogo from './false.png';

class HesKodForm extends Component {
    constructor(props){
        super(props)
        this.state={
            tcNo: null,
            nameSurname: null,
            hesCode: null,
            onFormGoing: true,
            formCanceled: false,
        }
        this.createHesPerson = this.createHesPerson.bind(this)
    }

    createHesPerson(event){
        event.preventDefault();
        const {tcNo, nameSurname, hesCode} = this.state;
        let person = {
            TCNo: tcNo,
            NameSurname: nameSurname.toUpperCase(),
            HESCode: hesCode.toUpperCase()
        }
        agent.HESKod.create(person)
          .then(response => {
            if(response.status === 200)
              this.setState({
                onFormGoing: false
              })
            else this.setState({
                formCanceled:true
            })
      })
    }

    render(){
        const {formCanceled, onFormGoing} = this.state
        return(
            <Container>
                    {
                        onFormGoing ? 
                        <Segment style={{marginTop:'25px'}}>
                            <Form onSubmit={event => this.createHesPerson(event)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>TC Kimlik Numarası</Form.Label>
                                    <Form.Control 
                                    placeholder="11 haneli TC Kimlik No" 
                                    value={this.state.tcNo} 
                                    onChange={(event) => {this.setState({tcNo: event.target.value})}}
                                    maxlength={11}
                                    required/>
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                            
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Ad Soyad</Form.Label>
                                    <Form.Control  
                                    placeholder="İsim Soyisim" 
                                    value={this.state.nameSurname ? this.state.nameSurname.toUpperCase() : null} 
                                    onChange={(event) => {this.setState({nameSurname: event.target.value})}}
                                    required/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>HES Kodu</Form.Label>
                                    <Form.Control  
                                    placeholder="A1B2-C3D4-E5" 
                                    value={this.state.hesCode ? this.state.hesCode.toUpperCase() : null} 
                                    onChange={(event) => {this.setState({hesCode: event.target.value})}}
                                    minlength={12}
                                    required/>
                                </Form.Group>

                                <Button variant="primary" type="submit" > 
                                    Onayla
                                </Button>
                            </Form>        
                        </Segment>
                        :<div style={{textAlign:'center', marginTop:'25px'}}>
                            {
                                formCanceled ?
                                <>
                                <img src={FalseLogo} style={{width:'100%'}} alt=''/>
                                <h1 style={{color:'red'}}>Bir hata oluştu. Hes Kodu eklenemedi.</h1>
                                </>
                                :
                                <>
                                <img src={SuccessLogo} style={{width:'100%'}} alt=''/>
                                <h1 style={{color:'#32c671'}}>Hes Kodu başarıyla eklendi. Sağlıklı günler dileriz.</h1>
                                </>
                            }
                        </div>
                    }
            </Container>
        )
    }
}

export {HesKodForm}