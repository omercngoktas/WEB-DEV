import React, { Component } from "react";
import {Table, Pagination} from 'semantic-ui-react';
import agent from '../../../../axios/agent';
import TableContent from './tableContent';
//import {DateToDaily} from '../../helpers';
import {BlockBarChart, BlockAreaChart} from './Charts';

class CustomerDocs extends Component{
    constructor(props){
        super(props)
        this.state={
          data: [],
          activePage: 1,
          dataLength : null,
          perItemForPage: 10
        }
    }

    componentDidMount(){
          agent.ReportClaim.list()
          .then(response => {
              this.setState({
                data: response.data
              })
        })
    }

    handleInputChange = (e, { value }) => this.setState({ activePage: value })
  
    handlePaginationChange = (e, { activePage }) => {
      const { perItemForPage} = this.state
      let dataLength = (activePage * perItemForPage) - perItemForPage
      this.setState({ activePage , dataLength})}
  
    render(){
        const { activePage ,data, dataLength} = this.state
        const tableDatas = data.slice((0 + dataLength),(10 + dataLength)).map((item)=> {
            return(
                <TableContent
                id={item.id}
                customerName={item.customerName}
                date={item.date}
                parameters={item.parameters}
                reportNumber={item.report_Number}
                fileType={item.fileType}
                />
            )})
        return(
          <>
          <h3>Müşteri Rapor Servisi</h3>
          <BlockAreaChart chartType={'Bar'} name={'Müşteri bazlı servis kullanımı'} parameter={'Müşteri'} data={data}/>
          <BlockBarChart chartType={'LineChart'} name={'Tarih bazlı servis kullanımı'} parameter={'Kullanım'} data={data}/>
          <Table selectable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Müşteri Adı</Table.HeaderCell>
                  <Table.HeaderCell>Tarih</Table.HeaderCell>  
                  <Table.HeaderCell>Saat</Table.HeaderCell>
                  <Table.HeaderCell>Core+ İşlemi</Table.HeaderCell>
                  <Table.HeaderCell>Rapor Numarası</Table.HeaderCell>
                  <Table.HeaderCell>İşlemler</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              {tableDatas}
            </Table>
            <Pagination defaultActivePage={activePage} totalPages={Math.ceil(data.length/10)} onPageChange={this.handlePaginationChange} activePage={activePage} style={{float: 'right'}}/>
          </>
          )
    }
}

export default CustomerDocs