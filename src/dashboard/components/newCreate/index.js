import React, {Component} from 'react';
import {Form, Card, Icon, Image, Input, TextArea, Button, Segment, Flag} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import { InputFile } from 'semantic-ui-react-input-file';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; 
import {Redirect} from 'react-router-dom';
import { Calendar } from 'react-date-range';

class CreateNew extends Component {
  constructor(props){
    super(props);
    this.state={
        title: "",
        description: "",
        pageText: "",
        image: "",
        file: null,
        date: null,
        next: false,
        success: false,
        openCalender: null
    }
    this.onPhotoFormSubmit = this.onPhotoFormSubmit.bind(this)
    this.onPhotoChange = this.onPhotoChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  onPhotoChange(e){
    this.setState({
        loading: true,
        file: e.target.files[0]
    })
    setTimeout( () => this.onPhotoFormSubmit(e), 500);
  }

  onPhotoFormSubmit(e){
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
        this.setState({
          image: response.data.url
        }):
        console.log("API Error")
     })
    }

    handleChange(pageText){
      this.setState({
          pageText: pageText
      })
    }

    handleOnSubmit(event){
        event.preventDefault();
        let activity = {
            title: this.state.title,
            description: this.state.description,
            content: this.state.pageText,
            image: this.state.image,
            date: this.state.date,
        }
        if(this.state.next === true)
        agent.Activities.create(activity).then((response)=> {
          response.status === 200 ? 
          this.setState({success: true}):
          console.log("API ERROR")
        })
        if(this.state.next === false)
        agent.Aktiviteler.create(activity).then((response)=> {
          response.status === 200 ? 
          this.setState({success: true}):
          console.log("API ERROR")
          })
    }

  render(){
    if (this.state.success === true) {
      return <Redirect to='/do/news' />
    }
    return(
      <Form style={{marginBottom: '40px'}}>
        {
          !this.state.next ?
          <>
          <Card.Group itemsPerRow={2}>
            <Card>
              <Card.Content>
                  <div style={{float: 'left'}}>
                    <InputFile input={{ onChange: this.onPhotoChange }} />  
                  </div>
                  <div style={{float: 'right'}}>
                    <p>
                      <b className={'hiddenOnMobile'}> Dil : </b>
                      <i  style={{paddingTop: '12px'}} class="tr flag"/>
                      <Button icon floated='right' onClick={()=> {this.setState({next: true})}} primary ><Flag name="uk"/></Button>
                  </p>
                  </div>
                  <Card.Header>
                    <Input
                        value={this.state.date ? this.state.date.toLocaleDateString() : null}
                        onChange={(event) => {this.setState({date: event.target.value})}}
                        onClick={(event) => {event.preventDefault();this.setState({openCalender: true})}}
                        placeholder='Tarih'
                        style={{width:'100%', marginTop:'15px'}}
                        required/>
                    {this.state.openCalender ? <Calendar
                                        onChange={item => {this.setState({date: item})}}
                                        date={this.state.date}
                                        style={{minWidth: '86vh', fontSize: "16px"}}
                                    />: null}
                    <Input
                      value={this.state.title}
                      onChange={(event) => this.setState({title: event.target.value})}
                      placeholder='Başlık'
                      maxLength={'48'}
                      style={{width:'100%', marginTop:'15px'}}
                      required/>
                    <TextArea
                      value={this.state.description}
                      onChange={(event) => this.setState({description: event.target.value})}
                      placeholder='Açıklama'
                      style={{ marginTop:'15px', height:'16vh'}}
                      required/>
                  </Card.Header>
                </Card.Content>
              </Card>
            <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    src={this.state.image}
                    style={{maxHeight: '265px', maxWidth:'265px'}}
                  />
                  <Card.Header style={{marginTop: '10px'}}>{this.state.title}</Card.Header>
                  <Card.Meta style={{marginTop: '10px'}}>{this.state.description}</Card.Meta>
                </Card.Content>
              </Card>
          </Card.Group>
          <Segment>
          <SunEditor  onChange={this.handleChange}
                      setOptions={{height: '60vh',
                      buttonList: [['undo', 'redo','align',
                      'font','fontColor','fontSize','formatBlock',
                      'hiliteColor','horizontalRule','lineHeight',
                      'list','paragraphStyle','table', 'textStyle',
                      'codeView','image','link','video','preview']],}}/>
          </Segment>
              <Button icon color='orange' onClick={this.handleOnSubmit} labelPosition='right' floated='right'>Kaydet<Icon name='paper plane outline'/></Button>
          </>
          :
          <>
          <Card.Group itemsPerRow={2}>
            <Card>
              <Card.Content>
                  <div style={{float: 'left'}}>
                    <InputFile input={{ onChange: this.onPhotoChange }} />  
                  </div>
                  <div style={{float: 'right'}}>
                      <p>
                        <b className={'hiddenOnMobile' }> Dil : </b> <i  style={{paddingTop: '12px'}} class="uk flag"/>
                        <Button icon floated='right' onClick={()=> {this.setState({next: false})}} primary ><Flag name="tr"/></Button>
                      </p>
                  </div>
                  <Card.Header>
                    <Input
                        value={this.state.date ? this.state.date.toLocaleDateString() : null}
                        onChange={(event) => this.setState({date: event.target.value})}
                        onClick={(event) => {event.preventDefault();this.setState({openCalender: true})}}
                        placeholder='Tarih'
                        style={{width:'100%', marginTop:'15px'}}
                        required/>
                    {this.state.openCalender ? <Calendar
                                        onChange={item => this.setState({date: item})}
                                        date={this.state.date}
                                        style={{minWidth: '86vh', fontSize: "16px"}}
                                    />: null}
                    <Input
                      value={this.state.title}
                      onChange={(event) => this.setState({title: event.target.value})}
                      placeholder='Başlık'
                      maxLength={'46'}
                      style={{width:'100%', marginTop:'15px'}}/>
                    <TextArea
                      value={this.state.description}
                      onChange={(event) => this.setState({description: event.target.value})}
                      placeholder='Açıklama'
                      style={{ marginTop:'15px', height:'16vh'}}/>
                  </Card.Header>
                </Card.Content>
              </Card>
            <Card>
                <Card.Content>
                  <Image
                    floated='left'
                    src={this.state.image}
                    style={{maxHeight: '265px', maxWidth:'265px'}}
                  />
                  <Card.Header style={{marginTop: '10px'}}>{this.state.title}</Card.Header>
                  <Card.Meta style={{marginTop: '10px'}}>{this.state.description}</Card.Meta>
                </Card.Content>
              </Card>
          </Card.Group>
          <Segment>
          <SunEditor  onChange={this.handleChange}
                      setOptions={{height: '60vh',
                      buttonList: [['undo', 'redo','align',
                      'font','fontColor','fontSize','formatBlock',
                      'hiliteColor','horizontalRule','lineHeight',
                      'list','paragraphStyle','table', 'textStyle',
                      'codeView','image','link','video','preview']],}}/>
            </Segment>
            <Button icon color='orange' onClick={this.handleOnSubmit}
            labelPosition='right' floated='right'>Kaydet <Icon name='paper plane outline'/></Button>
          </>
        }
      </Form>
    )
  }
}

export {CreateNew}