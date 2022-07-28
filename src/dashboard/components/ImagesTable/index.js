import React, { Component } from 'react';
import { Card , Segment, GridRow} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import { AddImage } from './AddImage';
import {ImageCard} from './ImageCard';
import LayoutLoader from '../layoutLoader';

class ImagesTable extends Component {
    constructor(props){
        super(props)
        this.state={
          data: [],
          wait: true
        }
      }

      componentDidMount(){
          agent.Photos.list()
          .then(response => {
              this.setState({
                data: response.data,
                wait: false
              })
            })
      }

      render(){
        const tableDatas = this.state.data.map((item)=> { return( <ImageCard url={item.url} id={item.id}/>)})
        return(
            <>
            <Segment className={'paddingSideBar'} style={{paddingRight: '25px'}}>
                <GridRow>
                    <AddImage/>
                </GridRow>
                <Card.Group>
                    {tableDatas}
                </Card.Group>
                {this.state.wait ? <Segment className={'paddingSideBar'} style={{ border: 'none', paddingBottom: '20px', paddingTop: '0px'}}><LayoutLoader/> </Segment>:null }
            </Segment>
            </>
        )
    }
}

export {ImagesTable}