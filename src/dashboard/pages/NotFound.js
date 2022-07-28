import React, { Component } from 'react';
import LoaderCircle from '../components/layoutLoader';
import {Segment} from 'semantic-ui-react';

class NotFound extends Component  { 
    constructor(props){
        super(props);
        this.state={
            token: localStorage.getItem("UserToken"),
            email: localStorage.getItem("UserEmail"),
            password: localStorage.getItem("Password"),
        }
    }

    componentDidMount(){
        if(!this.state.email && !this.state.password && !this.state.token)
            this.props.history.push('/login')
    }

    render(){
        setTimeout(function(){window.location.reload() }, 1000);
        return(
            <Segment onClick={() => {window.location.reload()}} style={{minHeight: '100vh'}}>
                 <LoaderCircle content={<a href="!#" onClick={() => {window.location.reload()}}>Sezon sonlandırıldı, Lütfen Bekleyiniz</a>}/>
            </Segment>
            )
        }
    }
export {NotFound};