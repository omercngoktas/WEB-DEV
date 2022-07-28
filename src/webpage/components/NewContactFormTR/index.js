import React, {Component} from 'react'
import { Button, Image, Modal, Form, Input , TextArea, Message } from 'semantic-ui-react'
import ChatIcon from '../../images/ChatIcon.png';
import Logo from '../../images/logo.png';
import emailjs from 'emailjs-com';
import agent from '../../../axios/agent';

//import SuccessLogo from './tick.png';
//import FalseLogo from './false.png';

class NewContactFormTR extends Component {
 
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    onFormGoing: false,
  }

  handleSubmit(e) {
    e.preventDefault()
    const { user_email, user_subject, message } = this.state
   
    let templateParams = {
      user_email: user_email,
      user_subject: user_subject,
      message: message,
     }
     let form = {
      VisitorEmail: user_email,
      VisitorSubject: user_subject,
      VisitorMessage: message.toUpperCase(),
      CreatedDate: new Date()
    }
     emailjs.send(
      'gmail_service',
      'template_h9kkxvm',
       templateParams,
      'user_sYzG1ti0KxwG2LJiHJmYg'
     )
     agent.ContactFormList.create(form)
     .then(response => {
      console.log(response)
      if(response.status === 200)
        this.resetForm()
        
        })
   
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
  const {onFormGoing} = this.state
  return (
      <Modal
        trigger={<Button 
          style = {{
          position:' fixed',
          bottom: '15px',
          right: '15px',
          height: '%20',
          padding : '10px',
          borderRadius:100,
          backgroundColor:'#007bff',
          }} >
        <img src={ChatIcon} alt=''
        style = {{ maxHeight : '50px' }} /></Button>}
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
              Mesajınız <b>başarı</b> ile Gönderildi.
            </p> 
          </Message>: 
          <div >
           
          </div>
           }
          <Modal.Header  >
            <Image
                src={Logo} centered verticalAlign='middle' />{'Birgi Mefar Group'}
            </Modal.Header>
            <Modal.Content>
            BMG websitemize hoşgeldiniz, iletişim formumuzu eksiksiz doldurmanız halinde İş Geliştirme Ekibimiz sizinle en kısa sürede iletişime geçiyor olacaktır.
        <Form style = {{
              marginTop: '20px'
            }} 
              onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field controlId="formBasicEmail">
            <label className="text-muted">Email Adresiniz</label>
            <Input
              type="email"
              name="user_email"
              value={this.state.user_email}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'user_email')}
              placeholder="Email Adresiniz"
              required
            />
          </Form.Field>
            <Form.Field controlId="formBasicSubject">
            <label className="text-muted">Konu</label>
            <Input
              type="text"
              name="user_subject"
              value={this.state.user_subject}
              onChange={this.handleChange.bind(this, 'user_subject')}
              placeholder="Konu"
              required
            />
          </Form.Field>
          <Form.Field controlId="formBasicMessage">
            <label className="text-muted">Mesaj</label>
            <TextArea
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
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

export default NewContactFormTR