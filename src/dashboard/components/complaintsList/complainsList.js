import React, { Component } from 'react';
import {Segment, Table} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ComplaintsList extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }

      componentDidMount(){
          agent.ComplaintsForm.list()
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
                <Table.Cell>{item.date.substring(11,16)} | {item.date.substring(8,10)}.{item.date.substring(5,7)}.{item.date.substring(0, 4)}</Table.Cell>
                <Table.Cell>{item.nameSurname }</Table.Cell>
                <Table.Cell>{item.phoneNumber}</Table.Cell>
                <Table.Cell>{item.companyName}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.subject}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
              </Table.Row> )})
        return(
            <Segment className={'paddingSideBar'}>
                <h2>Anasayfa Contact Form</h2>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="Sikayet_listesi"
                    sheet="Sikayet_listesi"
                    buttonText="Excell İndir"/>
                <Table celled id="table-to-xls">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Tarih</Table.HeaderCell>
                      <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
                      <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Şirket</Table.HeaderCell>
                      <Table.HeaderCell>Konu</Table.HeaderCell>
                      <Table.HeaderCell>Açıklama</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{tableDatas}</Table.Body>
                </Table>
            </Segment>
        )
    }
}

export {ComplaintsList}