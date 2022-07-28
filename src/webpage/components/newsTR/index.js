import React, {Component} from 'react';
import {CardDeck, Spinner} from 'react-bootstrap';
import New from './new';
import agent from '../../../axios/agent';
import {Link} from 'react-router-dom';

class News extends Component{
    constructor(props){
      super(props)
      this.state={
          first: [],
          second: [],
          firstDate: '',
          secondDate: '',
          loading: true,
      }
    }

    componentDidMount(){
      agent.Aktiviteler.list2().then((response)=> {
        response.status === 200 ?
        this.setState({
            loading: false,
            second: response.data[response.data.length - 1],
            secondDate: this.IsoToDate(response.data[response.data.length -1].date),
            first: response.data[response.data.length - 2],
            firstDate: this.IsoToDate(response.data[response.data.length -2].date)
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
      const {loading} = this.state
      return (
        <>
        <h2 style= {{textAlign:"center"}}>
        <Link to={'/tr/haberler'} style={{fontSize:"24px", color:"#777"}}>Haberler</Link>
        </h2>
        {
         loading ? 
         <div className={'text-center p-5 '}><Spinner animation="border"/></div>:
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
        }
        </>
      );
    }
}

export default News;
