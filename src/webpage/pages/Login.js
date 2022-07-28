import React,{useState} from 'react'
import agent from '../../axios/agent'
import { Button, Form, Grid, Image, Segment } from 'semantic-ui-react'
import Logo from '../images/logo-white.png'
import {NotificationError} from '../components/notification';
import {ToastContainer} from 'react-toastify';
import LoaderCircle from '../../dashboard/components/layoutLoader';

const Login = (props) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Click, setClick] = useState(false);
  const {history} = props;

  const OnClickSubmit = event => {
    event.preventDefault();
    const user = {
      Email: Email,
      Password: Password
    }
    agent.User.login(user)
    .then(response => {
      if(response.status === 200)
      {
        localStorage.setItem('UserEmail', user.Email);
        localStorage.setItem('Username', response.data.displayName);
        localStorage.setItem('Password', user.Password);
        localStorage.setItem('UserToken', response.data.token);
        localStorage.setItem('Id', response.data.username.substring(0,3) + Math.random());
        setClick(true)
        setTimeout(() => {
          history.push('/do')
        }, 3000)
      } 
    })
    .catch(error => {
      NotificationError("Kullanıcı Adı ve ya Şifre Hatalı")
      throw error
     })
  }
  
  return (
    <div className="fullscreen_bg">
    <ToastContainer/>
    <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size='large'>
        <Image src={Logo} className='centered' style={{width: '30%'}}/> 
        <Segment stacked>
          <Form.Input 
            fluid 
            icon='user' 
            name='email'
            value={Email}
            onChange={event => setEmail(event.target.value)}
            iconPosition='left' 
            placeholder='E-mail' 
            type='email'/>
          <Form.Input
            fluid
            icon='lock'
            name='password'
            value={Password}
            onChange={event => setPassword(event.target.value)}
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          {
            Click ? 
            <Segment style={{border: 'none', boxShadow: 'none'}}>
              <LoaderCircle content=''/>
            </Segment>
             : <Button onClick={OnClickSubmit} color='twitter' fluid size='large'>Giriş</Button> 
          }
        </Segment>
         <h6 style={{color:'#fff'}} className='centered' stacked>Destek için <a href="mailto:it-mefar@mefar.com">it-mefar@mefar.com</a> adresinden ulaşabilirsiniz.</h6>
      </Form>
    </Grid.Column>
  </Grid>
  </div>
  ) 
}

export default Login;