import React, {Component} from 'react';
import axios from 'axios';
import {Segment} from 'semantic-ui-react';
import {Form, Button, Container} from 'react-bootstrap';
import { DataTable } from "./dataTable";

class Covid19Form extends Component {
    constructor(props){
        super(props)
        this.state={
            tcNo: null,
            onFormGoing: true,
            formCanceled: false,
            data: null,
            filteredData: null
        }
        this.findPerson = this.findPerson.bind(this)
        this.findTcNumber = this.findTcNumber.bind(this)
    }

    findPerson(event){
        event.preventDefault();
        const {tcNo} = this.state;
        axios.post(`/files/check/${tcNo}`)
        .then(response => {
            this.setState({
                onFormGoing: false,
                data: response.data
            })
            this.findTcNumber(this.state.tcNo)
        })
    }

    findTcNumber(tcNumber){
        const {data} = this.state;
        const filteredData = data.map(item => {
            return item.filter(item => {
                return item.tc === tcNumber
            })
        })
        this.setState({
            filteredData: filteredData
        })
    }
    
    render(){
        const { onFormGoing, filteredData} = this.state
        let workedOn = filteredData ? <DataTable filteredData={filteredData}/>: null
        return(
            <Container>
                    {
                        onFormGoing ? 
                        <Segment style={{marginTop:'25px'}}>
                            <Form onSubmit={event => this.findPerson(event)}>
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

                                <Button variant="primary" type="submit" > 
                                    Sorgula
                                </Button>
                            </Form>        
                        </Segment>
                        : <>{workedOn}</>
                    }
            </Container>
        )
    }
}

export {Covid19Form}