import React, {Component} from 'react';
import { Button, Table, Icon, Pagination, Segment, Input} from 'semantic-ui-react';
import UserRegisterForm from '../userRegisterForm';
import TableContent from './tableContent';
import agent from '../../../axios/agent';
import LayoutLoader from '../layoutLoader';

class DoTable extends Component {
      constructor(props){
        super(props)
        this.state={
          visible: true,
          data: [],
          activePage: 1,
          dataLength : null,
          perItemForPage: 10,
          wait: true,
          searchValue: ''
        }
        this.setVisible = this.setVisible.bind(this);
      }

      componentDidMount(){
          agent.User.list()
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
        const { activePage ,data, dataLength, searchValue } = this.state
        let start = 0 + dataLength;
        let end = 10 + dataLength;
        const tableDatas = this.state.data.slice(start,end).map((item)=> { 
              return(
                <TableContent
                id={item.id}
                username={item.displayName}
                companyName={item.companyName}
                email={item.email}
                password={item.passwordHash}
                rol={item.userName}
              />)
          })
          const tableDatasSearch = this.state.data.map((item)=> { 
            if(item.displayName.toUpperCase().includes(searchValue.toUpperCase()))
              {
                return(
                  <TableContent
                  id={item.id}
                  username={item.displayName}
                  companyName={item.companyName}
                  email={item.email}
                  password={item.passwordHash}
                  rol={item.userName}
                />)
              }
            })
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
                    style={{marginBottom:'18px', display:'block !important'}}>
                <Icon name='plus' /> Kullanıcı Ekle
                </Button>
                :<UserRegisterForm />
            }
              <Table selectable celled>
                <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Kullanıcı Adı</Table.HeaderCell>
                      <Table.HeaderCell>Şirket</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Şifre</Table.HeaderCell>
                      <Table.HeaderCell>Rol</Table.HeaderCell>
                      <Table.HeaderCell>
                      <Input
                        value={searchValue}
                        onChange={(event) => this.setState({searchValue: event.target.value})}
                        placeholder='Ara'/>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  {searchValue ===  '' ? tableDatas : tableDatasSearch}
                  </Table>
                  {
                    this.state.wait ? 
                    <Segment className={'paddingSideBar'} style={{border: 'none', paddingBottom: '0px', paddingTop: '0px'}}><LayoutLoader/> </Segment>:null
                  }
                {searchValue ===  '' ? 
                <Pagination 
                  defaultActivePage={activePage} 
                  totalPages={Math.ceil(data.length/10)} 
                  onPageChange={this.handlePaginationChange} 
                  activePage={activePage} 
                  style={{float: 'right'}}/>: null }
            </>
        )
    }
}
export default DoTable;