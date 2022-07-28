import React, { Component } from 'react';
import {ComplaintsList} from './complainsList';

class ComplaintsListForm extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<ComplaintsList/>)}
}

export {ComplaintsListForm}