import React, {Component} from 'react';
import { Form, Button, Table, Icon} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import {roleOptions} from '../userRole';

class UserRegisterForm extends Component {
  constructor(props){
    super(props);
    this.state={
        username: "",
        email: "",
        password: "Pa$$w0rd",
        role: "",
        roleId : "",
        companyName: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event)
  {
    const user = {
        DisplayName: this.state.username,
        Password: this.state.password,
        Email: this.state.email,
        CompanyName: this.state.companyName,
        Role: this.state.role.substring(0, 3)+ Math.random(),
        Username: this.state.role
    }

    if(this.state.role.substring(0,7) === "Musteri")
    {
      const customer = {
        CustomerName: this.state.username
      }
      agent.Customers.create(customer)
    }

    agent.User.register(user)
          .then(response => {
            if(response.status === 200)
              window.location.reload()
            else console.log(response)
      })
  }

  render(){
    const options = roleOptions.map((item)=> {return <option value={item.value}>{item.text}</option> })
    return(
      <Form>
        <Table style={{border: 'none', margin: '0px', padding: '0px'}}>
          <Table.Row style={{border: 'none', margin: '0px', padding: '0px'}}>
          <Table.Cell>
            <input
              value={this.state.username}
              onChange={(event) => this.setState({username: event.target.value})}
              placeholder='Kullanıcı Adı'
              required/>
          </Table.Cell>
          <Table.Cell>
            <input
              value={this.state.email}
              onChange={(event) => this.setState({email: event.target.value})}
              type="email"
              placeholder='E-mail'
              required
            />
          </Table.Cell>
          <Table.Cell>
            <input
              value={this.state.companyName}
              onChange={(event) => this.setState({companyName: event.target.value})}
              placeholder='Şirket'
              required
            />
          </Table.Cell>
          <Table.Cell>
            <input
              value={"Pa$$w0rd"}
              onChange={(event) => this.setState({password: event.target.value})}
              placeholder='Şifre'
              required
            />
          </Table.Cell>
            <Table.Cell>
              <select value={this.state.value} onChange={(event) => this.setState({role: event.target.value})} required>
                {options}
              </select>
            </Table.Cell>
            <Table.Cell>
                <Button
                    floated='left'
                    icon
                    labelPosition='left'
                    color="green"
                    size='small'
                    onClick={this.handleSubmit}
                    style={{ margin: '2px',width:'100%'}}>
                <Icon name='plus' /> Kullanıcı Ekle
                </Button>
              </Table.Cell>
          </Table.Row>
        </Table>
    </Form>
    )
  }
}

export default UserRegisterForm