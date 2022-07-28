import React, { Component } from 'react';
import {Card, Segment} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import {TRMiniCard} from './trMiniCard';

class TRNewsList extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }

      componentDidMount(){
          agent.Aktiviteler.list()
          .then(response => {
              this.setState({
                data: response.data
            })
        })
      }

      render(){
        const tableDatas = this.state.data.map((item)=> {
             return( <TRMiniCard 
                id={item.id}
                title={item.title} 
                date={item.date}
                description={item.description}
                image={item.image} />)})
        return(
            <Segment className={'paddingSideBar'}>
                <h2><b>Türkçe Haberler</b></h2>
                <Card.Group>
                        {tableDatas}
                </Card.Group>
            </Segment>
        )
    }
}

export {TRNewsList}