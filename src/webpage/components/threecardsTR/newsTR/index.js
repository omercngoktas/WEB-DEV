import React, {Component} from 'react';
import {Row, CardDeck} from 'react-bootstrap';
import New from './new';
import agent from '../../../../../axios/agent';

class News extends Component{
    constructor(props){
      super(props)
      this.state={
          first: [],
          second: [],
          firstDate: '',
          secondDate: '',
      }
    }

    componentDidMount(){
      agent.Activities.list().then((response)=> {
        response.status == 200 ?
        response.data.length == 0 || response.data.length == 1 ? 
        console.log('Haber Sayısı en az 2 olmalı'):
        this.setState({
            first: response.data[response.data.length - 1],
            firstDate: this.IsoToDate(response.data[response.data.length -1].date),
            second: response.data[response.data.length - 2],
            secondDate: this.IsoToDate(response.data[response.data.length -2].date)
          })  
          :
          console.log('Error API')
      })
    }

    IsoToDate(date){
      let year = date.substring(0, 4);
      let month = date.substring(5, 7);
      let day = date.substring(8, 10);
      return (day + "."+ month + "." + year)
    }

    render(){
      return (
        <CardDeck>
          <New 
            id={this.state.first.id}
            link={this.state.first.link}
            image={this.state.first.image}
            title={this.state.first.title}
            date={(this.state.firstDate)}
            description={this.state.first.description}
          />
          <New 
            id={this.state.second.id}
            link={this.state.second.link}
            image={this.state.second.image}
            title={this.state.second.title}
            date={this.state.secondDate}
            description={this.state.second.description}
            />
        </CardDeck>
      );
    }
}

export default News;
