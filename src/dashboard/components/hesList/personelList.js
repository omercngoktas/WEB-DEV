import React, { Component } from 'react';
import {Segment, Table} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class PersonelList extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }

      componentDidMount(){
          agent.HESKod.list()
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
                <Table.Cell>{item.tcNo ? `${item.tcNo.substr(0,1)}*******${item.tcNo.substr(8,11)}` : null}</Table.Cell>
                <Table.Cell>{item.nameSurname ? item.nameSurname.toUpperCase() : null}</Table.Cell>
                <Table.Cell>{item.hesCode ? item.hesCode.toUpperCase() : null}</Table.Cell>
              </Table.Row> )})
        return(
            <Segment className={'paddingSideBar'}>
                <h2>Personel Bilgileri</h2>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="personel_bilgileri"
                    sheet="personel_bilgileri"
                    buttonText="Excell İndir"/>
                <Table celled id="table-to-xls">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Tc Kimilk Numarası</Table.HeaderCell>
                      <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
                      <Table.HeaderCell>Hes Kodu</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{tableDatas}</Table.Body>
                </Table>
            </Segment>
        )
    }
}

export {PersonelList}