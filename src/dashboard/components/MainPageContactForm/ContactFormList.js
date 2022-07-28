import React, { Component } from 'react';
import {Segment, Table} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ContactFormList extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }

      componentDidMount(){
          agent.ContactFormList.list()
          .then(response => {
              this.setState({
                data: response.data
            })
        })
      }

      render(){
        const tableDatas = this.state.data.map((item)=> {
             return(
              <Table.Row>
                <Table.Cell>
                  {item.createdDate.substring(11,16)} | {item.createdDate.substring(8,10)}.{item.createdDate.substring(5,7)}.{item.createdDate.substring(0, 4)}
                </Table.Cell>
                <Table.Cell>{item.visitorEmail}</Table.Cell>
                <Table.Cell>{item.visitorSubject}</Table.Cell>
                <Table.Cell>{item.visitorMessage}</Table.Cell>
              </Table.Row> )})
        return(
            <Segment className={'paddingSideBar'}>
                <h2>Anasayfa Contact Form</h2>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="İletisim_formu"
                    sheet="İletisim_formu"
                    buttonText="Excell İndir"/>
                <Table celled id="table-to-xls">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Tarih</Table.HeaderCell>
                      <Table.HeaderCell>Ziyaretçi Email</Table.HeaderCell>
                      <Table.HeaderCell>Konu</Table.HeaderCell>
                      <Table.HeaderCell>Mesaj</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{tableDatas}</Table.Body>
                </Table>
            </Segment>
        )
    }
}

export {ContactFormList}