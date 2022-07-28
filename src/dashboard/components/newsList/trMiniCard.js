import React, { Component } from 'react';
import {Card, Button, Image} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import {Link} from 'react-router-dom'

class TRMiniCard extends Component {
    constructor(props){
        super(props)
        this.onClickDelete = this.onClickDelete.bind(this)
      }

      onClickDelete(){
          agent.Aktiviteler.delete(this.props)
          .then(response => {
              response.status === 200 ?
              window.location.reload():
              console.log("API connection problem")
        })
      }

      render(){
        var year = this.props.date.slice(0, 4);
        var month = this.props.date.slice(5, 7);
        var day = this.props.date.slice(8, 10);

        return (
            <Card>
                <Card.Content>
                <Image
                    size='medium'
                    src={this.props.image}
                    style={{marginBottom: '20px'}}
                />
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Meta><h5>{day + "." + month + "." + year }</h5></Card.Meta>
                <p className={'truncate-overflow'}>{this.props.description}</p>
                <div className={"ui two buttons"}>
                    <Button 
                        as={Link}
                        to={`/do/edit/new/tr/${this.props.id}`}
                        color='yellow' basic>
                        Düzenle
                    </Button>
                    <Button 
                        onClick={this.onClickDelete}
                        color='red' basic>
                        Sil
                    </Button>
                </div>
                </Card.Content>
            </Card>
        )
    }
}
export {TRMiniCard}