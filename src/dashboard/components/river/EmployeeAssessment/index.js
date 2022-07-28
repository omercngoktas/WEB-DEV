import React, { Component } from 'react';
import {EmployeeAssessment} from './EmployeeAssessment';

class RiverIndex extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<EmployeeAssessment/>)}
}

export {RiverIndex}