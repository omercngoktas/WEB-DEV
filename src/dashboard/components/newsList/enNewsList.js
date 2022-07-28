import React, { Component } from 'react';
import {Card, Segment} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import {MiniCard} from './miniCard';

class ENNewsList extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }

      componentDidMount(){
          agent.Activities.list()
          .then(response => {
              this.setState({
                data: response.data
            })
        })
      }

      render(){
        const tableDatas = this.state.data.map((item)=> {
             return( <MiniCard 
                id={item.id}
                title={item.title} 
                date={item.date}
                description={item.description}
                image={item.image} />)})
        return(
            <Segment className={'paddingSideBar'}>
                <h2>İngilizce Haberler</h2>
                <Card.Group>
                        {tableDatas}
                </Card.Group>
            </Segment>
        )
    }
}

export {ENNewsList}