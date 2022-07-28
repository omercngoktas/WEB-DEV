import React, {Component} from 'react';
import { Form, Button, Table, Icon, Checkbox, Popup} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import {NotificationError} from '../../../webpage/components/notification'
//import {roleOptions} from '../userRole';

class ReportAddForm extends Component {
  constructor(props){
    super(props);
    this.state={
        number: "",
        name: "",
        date: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event)
  {
    const report = {
        Number: this.state.number,
        Name: this.state.name,
        Date: this.state.date.toString(),
    }
    agent.Reports.create(report)
          .then(response => {
            if(response.status === 200)
              window.location.reload()
            else 
              {
                NotificationError('Hata')
              }
          })
  }

  render(){
    //const options = roleOptions.map((item)=> {return <option value={item.value}>{item.text}</option> })
    return(
      <Form>
        <Table style={{border: 'none', margin: '0px', padding: '0px'}}>
          <Table.Row style={{border: 'none', margin: '0px', padding: '0px'}}>
          <Table.Cell>
            <input
              value={this.state.number}
              onChange={(event) => this.setState({number: event.target.value})}
              placeholder='Rapor Numarası'
              required/>
          </Table.Cell>
          <Table.Cell>
            <input
              value={this.state.name}
              onChange={(event) => this.setState({name: event.target.value})}
              placeholder='Rapor İsmi'
              required
            />
          </Table.Cell>
          <Table.Cell>
              <Popup 
                    content='Tarih aralığı için doğrulayın' 
                    trigger={<Checkbox 
                        onChange={(event) => {this.setState({date: !this.state.date})}}
                        className={'bigger-checkbox'}/>} />
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
                <Icon name='plus' /> Rapor Ekle
                </Button>
              </Table.Cell>
          </Table.Row>
        </Table>
    </Form>
    )
  }
}

export default ReportAddForm