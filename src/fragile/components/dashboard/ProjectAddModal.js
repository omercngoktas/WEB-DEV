import React, {Component} from 'react';
import { Button, Modal, Form, Input , TextArea, Message, Select } from 'semantic-ui-react';
import agent from '../../../axios/agent';


class NewProjectAdd extends Component {
 
  state = {
    selectDepartment: '',
    message: '',
    topic: '',
    link: '',
    onFormGoing: false,
  }


  handleSubmit(e) {
    e.preventDefault()
    const { selectDepartment, message, topic,link } = this.state
    var today = new Date(),
    time = today.getDay() + '/' + today.getMonth() + '/' +  today.getFullYear()+ ' ' +today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var whoAdded = localStorage.getItem('UserEmail');
     let form = {
      Department: selectDepartment,
      Status: "0",
      Topic: topic,
      Message: message,
      Link : link,
      WhoAdded : whoAdded,
      Expired : "0",
      CreatedDate: time
    }
    this.resetForm(form)
 }
 resetForm() {
  this.setState({
    user_email: '',
    user_subject: '',
    message: '',
    onFormGoing: true,
  })
}
handleChange = (param, e) => {
  this.setState({ 
    [param]: e.target.value,
   })
}

render() {
  const departmantSelect = []
  agent.FragileDepartmentAdd.list().then(response => {response.data.map((item) => {
          let id = item.id;
          let name = item.departmentName;
          return departmantSelect.push({'key' : id, 'text': name, 'value': name })
  })})
  const {onFormGoing} = this.state
  var today = new Date(),
  time =  today.getDay() + '/' + today.getMonth() + '/' +  today.getFullYear()+ ' ' +today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return (
  <Modal
    trigger={<Button positive> Yeni Proje Ekle</Button>}
    style={{
    position: 'relative',
    overflowX: 'scrolling',
    backgroundRepeat : 'relative',
    height : 'auto'
    }} >
        { onFormGoing ? 
        <Message positive>
          <Message.Header>Başarılı</Message.Header>
          <p>
            Mesajınız <b>başarı</b> ile Gönderildi.
          </p> 
        </Message>: 
        <div >
        
        </div>
        }
        <Modal.Header  closeButton>
          Yeni Proje Ekliyorsunuz
        </Modal.Header>
        <Modal.Content>
          <Form style = {{marginTop: '20px' }} 
          onSubmit={this.handleSubmit.bind(this)}>
            <Form.Field controlId="formBasicSubject">
              <label className="text-muted">Tarih</label>
              <Input
                type="text"
                name="time"
                value={time}
                onChange={this.handleChange.bind(this, time)}
                disabled  
              ><b>{time}</b></Input>
            </Form.Field>
            <Form.Field controlId="formBasicEmail">
              <label className="text-muted">Departman Seçin</label>
              <Select 
              name="selectDepartment"
              value={this.state.selectDepartment}
              onChange={this.handleChange.bind(this, 'selectDepartment')}
              placeholder='Lütfen Departman Seçin' 
              required
              options={departmantSelect} />
            </Form.Field>

            <Form.Field controlId="formBasicSubject">
              <label className="text-muted">Başlık</label>
              <Input
                type="text"
                name="topic"
                value={this.state.topic}
                onChange={this.handleChange.bind(this, 'topic')}
                placeholder="topic"
                required
              />
            </Form.Field>

            <Form.Field controlId="formBasicMessage">
              <label className="text-muted">Proje Detayı</label>
              <TextArea
                name="projectDetail"
                className="text-primary"
                value={this.state.projectDetail}
                onChange={this.handleChange.bind(this, 'projectDetail')}
                placeholder="projectDetail"
                required
              />
            </Form.Field>

            <Form.Field controlId="formBasicSubject">
              <label className="text-muted">Kim</label>
              <Input
                type="text"
                name="WhoAdded"
                value={this.state.createdDate}
                onChange={this.handleChange.bind(this, 'WhoAdded')}
                placeholder="WhoAdded"
                required
              />
            </Form.Field>
            <Button positive variant="primary" type="submit" value="send">
              Gönder
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default NewProjectAdd