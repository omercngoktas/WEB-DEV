import React, { Component } from 'react';
import {ContactFormList} from './ContactFormList';

class MainPageContactForm extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<ContactFormList/>)}
}

export {MainPageContactForm}