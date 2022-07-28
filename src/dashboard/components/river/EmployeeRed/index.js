import React, { Component } from 'react';
import {EmployeRed} from './EmployeeRed';

class RiverIndex extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<EmployeRed/>)}
}

export {RiverIndex}