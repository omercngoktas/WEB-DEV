import React, { Component } from 'react';
import {Segment, Button, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {TRNewsList} from './trNewsList';
import {ENNewsList} from './enNewsList';

class NewsList extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }

      render(){
        return(
            <>
            <Segment className={'paddingSideBar'}>
                <Button icon as={Link} to="/do/add/new" labelPosition='left' primary size='small'>
                <Icon name='plus' /> Yeni Haber Ekle</Button>
            </Segment>
            <ENNewsList/>
            <TRNewsList/>
            </>
        )
    }
}

export {NewsList}