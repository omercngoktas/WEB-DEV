import React, { Component } from 'react';
import {EmployeeAll} from './EmployeeAll';

class RiverIndex extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<EmployeeAll/>)}
}

export {RiverIndex}