import React, { Component } from 'react';
import {EmployeDiscuss} from './EmployeeDiscuss';

class RiverIndex extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<EmployeDiscuss/>)}
}

export {RiverIndex}