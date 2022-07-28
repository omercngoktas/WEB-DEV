import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import { InputFile } from 'semantic-ui-react-input-file'

class AddImage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            file: null,
            loading : false
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
      }

      onChange = (e) => {
        this.setState({
            loading: true,
            file: e.target.files[0]
        })
        setTimeout( () => this.onFormSubmit(e), 500);
      }

        onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('File',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        agent.Photos.add(formData, config).then((response)=> {
            response.status === 200 ? 
            window.location.reload():
            console.log("API Error")
            })
        }
    
    render(){
      return <Form onSubmit={this.onFormSubmit} style={{marginBottom:'18px'}}>
            {
                !this.state.loading ?
                <InputFile input={{ onChange: this.onChange }}/> : 
                <Button basic loading>Loading</Button>
            }
            </Form>
    }
}

export {AddImage}

