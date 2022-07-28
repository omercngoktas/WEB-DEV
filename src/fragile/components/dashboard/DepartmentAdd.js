import React, {Component} from 'react'
import { Button, Modal, Form, Input , Message } from 'semantic-ui-react'
import agent from '../../../axios/agent';

class NewDepartmentAdd extends Component {
 
  state = {
    
    departmentName: '',
    whoAdded: '',
    expired: '0',
    onFormGoing: false,
    openModal: false
  }
 
  handleSubmit(e) {
    e.preventDefault()
    const { departmentName } = this.state
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var WhoAdded = localStorage.getItem('UserEmail');
     let form = {
      DepartmentName: departmentName,
      WhoAdded: WhoAdded,
      Expired: '0',
      CreatedDate: time
    }
    agent.FragileDepartmentAdd.create(form)
     .then(response => {
      console.log(response)
      if(response.status === 200)
        this.resetForm()
        this.props.updatedList({ 'departmentName': departmentName })
      })
 }
 resetForm() {
  this.setState({
    departmentName: '',
    whoAdded: '',
    expired: '',
    onFormGoing: true,
  })
  setTimeout(() => {
    this.setState({
      onFormGoing: false,
    })
  }, 4000); 
  setTimeout(() => {
    this.setState({
      openModal: false
    })
  }, 3000); 
  
}
handleChange = (param, e) => {
  this.setState({ 
    [param]: e.target.value,
   })
}
render() {

  const {onFormGoing} = this.state
  return (
      <Modal
        open={this.state.openModal}
        onOpen={() => this.setState({openModal: true })}
        onClose={() => this.setState({ openModal: false }) }
        trigger={<Button color='blue'> Yeni Departmant Ekle</Button>}
          style={{
            position: 'relative',
            overflowX: 'scrolling',
            backgroundRepeat : 'relative',
            height : 'auto'
        }}
      >
          { onFormGoing ? 
           <Message positive>
            <Message.Header>Başarılı</Message.Header>
            <p>
              Yeni Departman <b>Başarı</b> ile Eklendi.
            </p> 
          </Message>: 
          <div >
           
          </div>
           }
          <Modal.Header  closeButton>
            Yeni Departman Ekliyorsunuz
            </Modal.Header>
            <Modal.Content>
        <Form style = {{
              marginTop: '20px'
            }} 
              onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field controlId="formBasicEmail">
            <label className="text-muted">Departman Adı</label>
            <Input
              type="text"
              name="departmentName"
              value={this.state.departmentName}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'departmentName')}
              placeholder="Departman İsmi Girin"
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

export default NewDepartmentAdd