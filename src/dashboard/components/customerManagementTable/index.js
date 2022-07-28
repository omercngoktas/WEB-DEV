import React, {Component} from 'react';
import { Table, Popup, Icon, Segment, Input} from 'semantic-ui-react';
import agent from '../../../axios/agent';
import TableContent from './tableContent';
import LayoutLoader from '../../components/layoutLoader';

class CustomerManagementTable extends Component {
      constructor(props){
        super(props)
        this.state={
          data: [],
          wait: true,
          searchValue: ''
        }
      }

      componentDidMount(){
          agent.Customers.list()
          .then(response => {
            this.setState({
              data: response.data,
              dataLength: response.data.length,
              wait: false
            })
          })
      }

      render() {  
        const {searchValue} = this.state
        const tableDatas = this.state.data.map((item)=> {
          if(item.customerName.toUpperCase().includes(searchValue.toUpperCase()))          
            return(<TableContent 
            id= {item.id}
            customerName={item.customerName}
            productType= {item.productType}
            firmNo= {item.firmNo}
            firm= {item.firm}
            reportType = {item.reportType}/>)
          })
        return(
            <>
                <Table selectable celled structured >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Müşteri Adı</Table.HeaderCell>
                      <Table.HeaderCell >Ürün Türü 
                      <Popup 
                          content='Core+ Stok Grubu 1 ' 
                          trigger={ 
                            <Icon name='question circle outline' size='large' style={{marginLeft: '10px', color: 'green'}}/>} />
                      </Table.HeaderCell>
                      <Table.HeaderCell >Firma Numarası
                      <Popup 
                          content='Core+ Stok Grubu 2 ' 
                          trigger={ 
                            <Icon name='question circle outline' size='large'  style={{marginLeft: '10px', color: 'green'}}/>} />
                        </Table.HeaderCell>
                      <Table.HeaderCell>Firma</Table.HeaderCell>
                      <Table.HeaderCell>Rapor Tipleri</Table.HeaderCell>
                      <Table.HeaderCell>
                      <Input
                        value={searchValue}
                        onChange={(event) => this.setState({searchValue: event.target.value})}
                        placeholder='Ara'/>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  {tableDatas}
                  </Table>
                  {
                    this.state.wait ? 
                    <Segment className={'paddingSideBar'} style={{border: 'none', paddingBottom: '0px', paddingTop: '0px'}}><LayoutLoader/> </Segment>:null
                  }
            </>
        )
    }
}
export default CustomerManagementTable;