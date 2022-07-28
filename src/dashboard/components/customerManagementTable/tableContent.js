import { Button, Table, Input, Dropdown} from 'semantic-ui-react';
import React, {Component} from 'react';
import {stokGrup1, firmalar, raporlar} from './options';
import agent from '../../../axios/agent';

class TableContent extends Component{
  constructor(props){
    super(props)
    this.state={
      id: null,
      customerName: null,
      firmNo: null,
      firm: null,
      productType: null,
      reportType: null,
      allReports: null
    }
  }
  
  componentDidMount(){
    this.setState({
      id: this.props.id,
      customerName: this.props.customerName,
      firmNo: this.props.firmNo,
      firm: this.props.firm,
      productType: this.props.productType == null ? [] : this.props.productType.split(","),
      reportType: this.props.reportType == null ? [] : this.props.reportType.split(","),
      allReports: this.props.allReports
    })
  }

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      options: [ ...prevState.productType, { key: value, text: value, value: value }],
    }))
  }

  onClick = () => {
    const customer = {
      customerId: this.state.id,
      productType: this.state.productType.toString(),
      firmNo : this.state.firmNo,
      firm: this.state.firm,
      reportType: this.state.reportType.toString()
    }
    agent.Customers.update(customer)
    .then(response => {
      response.status === 200 ? 
      window.location.reload():console.log("API ERROR")
    })
  }

  onClickDelete = () => {
    const customer = {
      customerId: this.state.id
    }
    agent.Customers.delete(customer)
    .then(response => {
      response.status === 200 ? 
      window.location.reload():console.log("API ERROR")
    })
  }

  render(){
    let { productType, firmNo, firm ,reportType} = this.state
    return(
      <Table.Body>
          <Table.Row>
              <Table.Cell width={2}>
                {this.state.customerName}
              </Table.Cell>
              <Table.Cell width={5}>
                <Dropdown
                  options={stokGrup1}
                  search
                  selection
                  fluid
                  multiple
                  allowAdditions
                  value={productType}
                  onAddItem={this.handleAddition}
                  onChange={(e, { value }) => this.setState({ productType: value })}
                  placeholder='Stok Grubu 1 '
              />
              </Table.Cell>
              <Table.Cell>
                <Input
                    selection
                    value={firmNo}
                    onChange={(e) => this.setState({ firmNo: e.target.value })}
                    placeholder='Stok Grubu 2 '
                />
              </Table.Cell>
              <Table.Cell >
                <Dropdown  selection
                options={firmalar} 
                value={firm}
                onAddItem={this.handleAddition}
                onChange={(e, { value }) => this.setState({ firm: value })}
                placeholder='Firma' />
              </Table.Cell>
              <Table.Cell width={5}>
                <Dropdown
                options={raporlar} 
                search
                selection
                fluid
                multiple
                allowAdditions
                value={reportType}
                onAddItem={this.handleAddition}
                onChange={(e, { value }) => this.setState({ reportType: value })} />
              </Table.Cell>
              <Table.Cell width={1}>
              <Button 
                    size='small' 
                    color='green' 
                    onClick={this.onClick}
                    content='Kaydet'
                    style={{width:'100%'}}
                    />
                <Button 
                    size='small' 
                    color='red' 
                    onClick={this.onClickDelete}
                    content='Sil'
                    style={{width:'100%'}}
                    />
              </Table.Cell>
        </Table.Row> 
      </Table.Body>
    )
  }
}
export default TableContent