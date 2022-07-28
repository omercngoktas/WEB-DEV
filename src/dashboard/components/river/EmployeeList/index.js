import React, { Component } from 'react';
import {EmployeList} from './EmployeeList';

class RiverIndex extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<EmployeList/>)}
}

export {RiverIndex}