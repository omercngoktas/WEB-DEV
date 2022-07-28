//import ReactPasswordStrength from 'react-password-strength';
import React, { Component} from 'react';
import {Button, Table, Form, Input}  from 'semantic-ui-react';
import agent from '../../../axios/agent';
import {NotificationWarn} from '../../../webpage/components/notification';
import {ToastContainer} from 'react-toastify';

class EmailChanger extends Component {
    constructor(props){
        super(props)
        this.state={
            firstEmail:null,
            secondEmail:null,
            userId:null,
            data:null,
            confirmText:null
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        const user = {
            Email: localStorage.getItem("UserEmail"),
            Password: localStorage.getItem("Password")
        }
        agent.User.list()
            .then(response=> {response.data.map(item => {
                if(item.email === user.Email)
                    agent.User.login(user)
                    .then(response => {
                    if(response.status === 200)
                    this.setState({
                        userId: item.id
                    }) 
                })
            })})
        }

    onClick = (e) => {
        e.preventDefault();
        if(this.state.userId)
        agent.User.edit({id: this.state.userId, password:localStorage.getItem("Password"), Email: this.state.firstEmail})
        .then(response => {
            if(response.status === 200)
            {
            this.setState({confirmText: "Emailiniz değiştirildi."})
            localStorage.clear()
            window.location.reload()
            }
            else this.setState({confirmText: "Emailiniz değiştirilemedi."})
        })
        .catch(error => {
            NotificationWarn("Email adresi sistemde kayıtlı, farklı bir mail adresi yazınız")
            throw error
        })
    }

    render(){
        return(
        <>
        <ToastContainer/>
         <Form>
            <Table style={{border: 'none', margin: '0px', padding: '0px'}}>
            <Table.Row style={{border: 'none', margin: '0px', padding: '0px'}}>
                <Table.Cell>
                    <Input 
                        className="customClass"
                        size='big' 
                        placeholder='Yeni Email' 
                        style={{width:'100%'}}
                        value={this.state.firstEmail} 
                        onChange={(event) => {this.setState({firstEmail: event.target.value})}} />
                </Table.Cell>
                <Table.Cell>
                    <Input 
                        className="customClass"
                        size='big' 
                        placeholder='Yeni Email Tekrar' 
                        style={{width:'100%'}}
                        value={this.state.secondEmail} 
                        onChange={(event) => {this.setState({secondEmail: event.target.value})}} />
                </Table.Cell>
                <Table.Cell>
                <Button floated='left'
                        color="green"
                        size='small'
                        onClick={e => this.onClick(e)}
                        disabled={this.state.firstEmail && this.state.firstEmail === this.state.secondEmail && this.state.firstEmail.includes("@") ? false : true}
                        style={{ padding:'10px',margin: '5px', width:'100%'}}>Email Değiştir
                        </Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                {this.state.firstEmail ? this.state.firstEmail === this.state.secondEmail ? null :  "Mailler Uyuşmuyor" : "Uygun bir mail adresi değil"}
                {this.state.confirmText}
            </Table.Row>
            </Table>
        </Form>
        </>
        )
    }
    
}

export {EmailChanger}
