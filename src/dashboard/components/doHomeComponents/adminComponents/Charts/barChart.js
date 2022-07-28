import React, { Component } from 'react';
import GoogleChart from './googleChart';
import {DateToDaily, countElemInArray} from '../../../helpers';

class BlockBarChart extends Component {
  render(){ 
    let arr = this.props.data.map(item => {
      return DateToDaily(item.date)
    })
    return (<GoogleChart chartType={this.props.chartType} name={this.props.name} parameter={this.props.parameter} data={countElemInArray(arr)}/>)}
}

export default BlockBarChart;