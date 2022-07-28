import React, { Component } from 'react';
import GoogleChart from './googleChart';
import {countElemInArray} from '../../../helpers';

class AreaChart extends Component {
  render(){ 
    let arr = this.props.data.map(item => {
      return item.customerName
    })
    return (<GoogleChart chartType={this.props.chartType} name={this.props.name} parameter={this.props.parameter} data={countElemInArray(arr.sort())}/>)}
}

export default AreaChart 
