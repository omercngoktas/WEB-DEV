import React, {Component} from 'react';
import { Button, Table, Icon, Pagination, Segment} from 'semantic-ui-react';
import ReportAddForm from './reportRegisterForm';
import TableContent from './tableContent';
import agent from '../../../axios/agent';
import LayoutLoader from '../layoutLoader';

class ReportTable extends Component {
      constructor(props){
        super(props)
        this.state={
          visible: true,
          data: [],
          activePage: 1,
          dataLength : null,
          perItemForPage: 10,
          wait: true
        }
        this.setVisible = this.setVisible.bind(this);
      }

      componentDidMount(){
          agent.Reports.list()
          .then(response => {
              this.setState({
                data: response.data,
                wait: false
              })
        })
      }

      setVisible(){
          let visible = this.state.visible;
          this.setState({
            visible: !visible
          })
      }

      handleInputChange = (e, { value }) => this.setState({ activePage: value })
    
      handlePaginationChange = (e, { activePage }) => {
        const { perItemForPage} = this.state
        let dataLength = (activePage * perItemForPage) - perItemForPage
        this.setState({ activePage , dataLength})}

      render() {   
        const { activePage ,data, dataLength} = this.state
        const tableDatas = this.state.data.slice((0 + dataLength),(10 + dataLength)).map((item)=> { 
          return(
              <TableContent
              id={item.id}
              number={item.number}
              name={item.name}
              date={item.date}
              />
          )})
        return(
            <>
            {
              this.state.visible ?  
                <Button
                    floated='left'
                    icon
                    labelPosition='left'
                    primary
                    size='small'
                    onClick={this.setVisible}
                    className={'blockButton'}
                    style={{marginBottom:'18px'}}>
                <Icon name='plus' /> Rapor Ekle
                </Button>
                :<ReportAddForm />
            }
                <Table selectable celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Rapor Numarası</Table.HeaderCell>
                      <Table.HeaderCell>Rapor İsmi</Table.HeaderCell>
                      <Table.HeaderCell>Tarih Aralığı</Table.HeaderCell>
                      <Table.HeaderCell >İşlemler</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  {tableDatas}
                  </Table>
                  {
                    this.state.wait ? 
                    <Segment className={'paddingSideBar'} style={{border: 'none', paddingBottom: '0px', paddingTop: '0px'}}><LayoutLoader/> </Segment>:null
                  }
                  <Pagination defaultActivePage={activePage} totalPages={data.length/10} onPageChange={this.handlePaginationChange} activePage={activePage} style={{float: 'right'}}/>
            </>
        )
    }
}
export default ReportTable;