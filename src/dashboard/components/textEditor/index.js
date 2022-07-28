import React, { Component } from 'react'
import agent from '../../../axios/agent';
import {Editor} from './Editor';
import {EditorTR} from './EditorTR';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Table, Segment, Flag} from 'semantic-ui-react';

class TextEditor extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            dataTR:[]
        }
    }

    componentDidMount(){
        agent.Pages.list().then((response)=> {
          response.status === 200 ?
            this.setState({
              data: response.data
            }):
            console.log('Error API')
        })
        agent.Sayfalar.list().then((response)=> {
          response.status === 200 ?
            this.setState({
              dataTR: response.data
            }):
            console.log('Error API')
        })
    }

    render(){
      const dataTab = this.state.data.map((page) => <Tab>{page.pageName}</Tab>)
      const dataEditor = this.state.data.map((page) => <TabPanel><Editor pageId={page.pageId} pageText={page.pageText}/></TabPanel>)

      const dataTabTR = this.state.dataTR.map((page) => <Tab>{page.pageName}</Tab>)
      const dataEditorTR = this.state.dataTR.map((page) => <TabPanel><EditorTR Id={page.id} pageText={page.pageText}/></TabPanel>)
      return(
        <>
        <Segment>
          <Tabs>
            <TabList>
              <Table.Header>
                <Table.Row>
                  <Flag name='uk' />
                  {dataTab}
                </Table.Row>
              </Table.Header>
            </TabList>
              {dataEditor}
          </Tabs>
        </Segment>
        
        <Segment>
          <Tabs>
          <TabList>
            <Table.Header>
              <Table.Row>
                <Flag name='tr' />
                {dataTabTR}
              </Table.Row>
            </Table.Header>
          </TabList>
            {dataEditorTR}
        </Tabs>
        </Segment>
      </>
      )
    }
}

export {TextEditor}