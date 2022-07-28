import React, { Component } from 'react';
import {PersonelList} from './personelList';

class HESList extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<PersonelList/>)}
}

export {HESList}