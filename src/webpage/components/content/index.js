import React, { Component } from 'react'
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import PageTitle from './pageTitle';
import TextRow from './textRow';
import 'react-tabs/style/react-tabs.css';
import {Segment} from 'semantic-ui-react';

class Content extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            pageName: window.location.pathname.toUpperCase().slice(1).replace("-"," & "),
            dataContext: []
        }
    }
    
    componentDidMount(){
        agent.Pages.list().then((response)=> {
          if(response.status === 200)
            {
                let dataContext = response.data.filter(page => page.pageName.toUpperCase() === this.state.pageName)
                this.setState({
                    dataContext: dataContext
                })  
            }
        })
    }

    render(){
      return(
            <>
                <Container style={{paddingTop:"10px"}}>
                    <PageTitle pageName={this.state.pageName}/>
                </Container>
                <Segment style={{padding:'0px'}}>
                    {this.props.map}
                    <Container>
                        {
                            this.state.dataContext.length === 0 ?
                            <div style={{margin:'400px 0px 400px 0px', border:'none', borderBottom: 'none'}}>
                            <Dimmer active inverted >
                                <Loader inverted/>
                            </Dimmer>
                            </div>
                            :
                            <TextRow data={this.state.dataContext}/>
                        }
                    </Container>
                </Segment>
              </>
      )
    }
}

export default Content

