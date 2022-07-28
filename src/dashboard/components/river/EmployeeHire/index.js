import React, { Component } from 'react';
import {EmployeHire} from './EmployeeHire';

class RiverIndex extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<EmployeHire/>)}
}

export {RiverIndex}