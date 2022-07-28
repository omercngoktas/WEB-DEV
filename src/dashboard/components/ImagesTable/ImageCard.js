import React, { Component } from 'react';
import {Card, Button, Image} from 'semantic-ui-react';
import agent from '../../../axios/agent';

class ImageCard extends Component {
    constructor(props){
        super(props)
        this.onClickSubmit = this.onClickSubmit.bind(this)
      }

      onClickSubmit(){
          agent.Photos.delete(this.props.id)
          .then(response => {
              response.status === 200 ?
              window.location.reload():
              console.log("API Error")
        })
      }

      render(){
        return (
            <Card>
                <Card.Content>
                <Image
                    size='big'
                    src={this.props.url}
                />
                </Card.Content>
                <Button 
                    onClick={this.onClickSubmit}
                    basic color='red'>
                    Sil
                </Button>
        </Card>
        )
    }
}
export {ImageCard}