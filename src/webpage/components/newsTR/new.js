import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { Flex, Box } from 'reflexbox';
import {Link} from 'react-router-dom';

class New extends Component  {
  render(){
    return (
          <Card as={Link} to={'/haberler/' + this.props.link } className={'shadow-sm hoverable'}>
            <Flex p={2} auto>
                <Box px={2} w={1/2} h={1} className={'box-image-area'} style={{minWidth: '28vh'}}>
                   <Card.Img className={'image-area'} alt={'Resim'} style={{ height: '25vh', width: '25vh'}} src={this.props.image} />
                </Box>
                <Box px={2} w={1/2} h={1} style={{maxHeight: '25vh'}}>
                    <p className={'baslik'} style={{padding: '0px', margin: '0px'}}>
                      {this.props.title }
                    </p>
                    <p style={{padding: '0px', margin: '0px'}}> 
                      {this.props.date}
                    </p>
                    <p className={'truncate-overflow'}>
                      {this.props.description}
                    </p>
                </Box>
            </Flex>
          </Card>
      )
  }
}

export default New;
