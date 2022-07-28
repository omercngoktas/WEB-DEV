import ReactPasswordStrength from 'react-password-strength';
import React, { Component} from 'react';
import {Button, Table, Form}  from 'semantic-ui-react';
import agent from '../../../axios/agent';

class PasswordChanger extends Component {
    constructor(props){
        super(props)
        this.state={
            firstPass:null,
            secondPass:null,
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
        agent.User.edit({id: this.state.userId, password: this.state.firstPass})
        .then(response => {
            if(response.status === 200)
            {
            this.setState({confirmText: "Şifreniz değiştirildi."})
            localStorage.clear()
            window.location.reload()
            }
            else this.setState({confirmText: "Şifreniz değiştirilemedi."})
        })
    }


    render(){
        return(
        <>
         <Form>
            <Table style={{border: 'none', margin: '0px', padding: '0px'}}>
            <Table.Row style={{border: 'none', margin: '0px', padding: '0px'}}>
                <Table.Cell>
                    <ReactPasswordStrength
                        className="customClass"
                        minLength={6}
                        minScore={1}
                        tooShortWord={'çok kısa'}
                        scoreWords={['kolay', 'uygun', 'iyi', 'güçlü', 'çok güçlü']}
                        changeCallback={(event) => {this.setState({confirmText: null,firstPass: document.getElementsByName("password_input")[0].defaultValue})}}
                        inputProps={{ name: "password_input", placeHolder:"Yeni Şifre",autoComplete: "off", className: "form-control" }}
                    />
                </Table.Cell>
                <Table.Cell>
                <ReactPasswordStrength
                    className="customClass"
                    minLength={6}
                    minScore={1}
                    tooShortWord={'çok kısa'}
                    scoreWords={['kolay', 'uygun', 'iyi', 'güçlü', 'çok güçlü']}
                    changeCallback={e => {this.setState({confirmText:null,secondPass: document.getElementsByName("password_input_2")[0].defaultValue})}}
                    inputProps={{ name: "password_input_2", placeHolder:"Yeni Şifre Tekrar",autoComplete: "off", className: "form-control" }}
                />
                </Table.Cell>
                <Table.Cell>
                <Button floated='left'
                        color="green"
                        size='small'
                        onClick={e => this.onClick(e)}
                        disabled={this.state.firstPass && this.state.firstPass.length >= 6  && this.state.firstPass === this.state.secondPass ? false : true}
                        style={{ padding:'10px',margin: '5px', width:'100%'}}> Şifre Değiştir
                        </Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                {this.state.firstPass && this.state.firstPass.length >= 6 ? this.state.firstPass === this.state.secondPass ? null :  "Şifreler Uyuşmuyor" : "Şifre uzunluğu en az 6 karakterli olmalıdır."}
                {this.state.confirmText}
            </Table.Row>
            </Table>
        </Form>
        </>
        )
    }
    
}

export {PasswordChanger}
