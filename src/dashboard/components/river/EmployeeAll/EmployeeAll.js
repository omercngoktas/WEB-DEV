import React, { Component } from 'react';
import {Segment, Table, Button,Input} from 'semantic-ui-react';
import agent from '../../../../axios/agent';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {Link} from 'react-router-dom'

class EmployeeAll extends Component {
    constructor(props){
        super(props)
        this.state={
          data: [],
          PageStatus : '',
          a : '',
          searchValue: ''
        }
      }
      
      componentDidMount(){
          agent.HRApplication.list()
          .then(response => {
              this.setState({
                data: response.data,
            })
        })
      }
      calculateAge = (BirthYear,BirthMounth) => {
        var today = new Date();
        var birthDate = new Date(BirthYear);  
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - BirthMounth;
   
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        return age_now;
      }

      render(){
        const { searchValue } = this.state
        const tableDatas = this.state.data.map((item)=> {
            let color = '';
            if(item.link === '0'){
                item.link = 'Yeni Başvuru Listesinde'
                color = '#02475e'
              }
              if(item.link === '1'){
                item.link = "Değerlendirme Listesinde"
                color = '#fea82f'
              }
              if(item.link === '2'){
                item.link = "Görüşülecekler Listesinde"
                color = '#ff6701'
              }
              if(item.link === '3'){
                item.link = "İşe Alınacaklar Listesinde"
                color = 'green'
              }
              if(item.link === '4'){
                item.link = "Uygun Bulunmayan Listesinde"
                color = 'red'
              }
              
             return(
              <Table.Row>
                <Table.Cell>
                  {item.creationDate.substring(11,16)} | {item.creationDate.substring(8,10)}.{item.creationDate.substring(5,7)}.{item.creationDate.substring(0, 4)}
                </Table.Cell>
                <Table.Cell>{item.pozitionFor}</Table.Cell>
                <Table.Cell>{item.nameSurname}</Table.Cell>
                <Table.Cell>{item.telNo}</Table.Cell>
                <Table.Cell> Yaş :{this.calculateAge(item.birthYear,item.birthMounth)} <br></br>Doğum Tarihi : {item.birthday}.{item.birthMounth}.{item.birthYear}</Table.Cell>
                <Table.Cell> Başvuru Durumu : <b style={{color : color}}>{item.link }</b></Table.Cell>
                <Table.Cell>
                    <Button variant="outline-info"  
                    as={Link}
                    to={`/do/HrList/${item.id}`}>
                    Detaylara Git
                    </Button>
                </Table.Cell>
              </Table.Row> )})
               const tableDatasSearch = this.state.data.map((item)=> {
                 let color= '';
                if(item.pozitionFor.toUpperCase().includes(searchValue.toUpperCase()) || item.nameSurname.toUpperCase().includes(searchValue.toUpperCase()))
                  {
                    if(item.link === '0'){
                      item.link = 'Yeni Başvuru Listesinde'
                      color = '#02475e'
                    }
                    if(item.link === '1'){
                      item.link = "Değerlendirme Listesinde"
                      color = '#fea82f'
                    }
                    if(item.link === '2'){
                      item.link = "Görüşülecekler Listesinde"
                      color = '#ff6701'
                    }
                    if(item.link === '3'){
                      item.link = "İşe Alınacaklar Listesinde"
                      color = 'green'
                    }
                    if(item.link === '4'){
                      item.link = "Uygun Bulunmayan Listesinde"
                      color = 'red'
                    }
                    return(
                      <Table.Row>
                      <Table.Cell>
                        {item.creationDate.substring(11,16)} | {item.creationDate.substring(8,10)}.{item.creationDate.substring(5,7)}.{item.creationDate.substring(0, 4)}
                      </Table.Cell>
                      <Table.Cell>{item.pozitionFor}</Table.Cell>
                      <Table.Cell>{item.nameSurname}</Table.Cell>
                      <Table.Cell>{item.telNo}</Table.Cell>
                      <Table.Cell> Yaş :{this.calculateAge(item.birthYear,item.birthMounth)} <br></br>Doğum Tarihi : {item.birthday}.{item.birthMounth}.{item.birthYear}</Table.Cell>
                      <Table.Cell> Başvuru Durumu : <b style={{color : color}}>{item.link }</b></Table.Cell>
                      <Table.Cell>
                          <Button variant="outline-info"  
                          as={Link}
                          to={`/do/HrList/${item.id}`}>
                          Detaylara Git
                          </Button>
                      </Table.Cell>
                    </Table.Row>)
                  }
                })
        return(
            <Segment className={'paddingSideBar'}>
                    <ReactHTMLTableToExcel 
                    id="test-table-xls-button"
                    className="success"
                    table="table-to-xls"
                    filename="İletisim_formu"
                    sheet="İletisim_formu"
                    buttonText="Excell İndir"
                    content='Primary'/>
                
                <Table celled id="table-to-xls">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Tarih</Table.HeaderCell>
                      <Table.HeaderCell>Başvurduğu Pozisyon</Table.HeaderCell>
                      <Table.HeaderCell>İsim Soyisim</Table.HeaderCell>
                      <Table.HeaderCell>Telefon</Table.HeaderCell>
                      <Table.HeaderCell>Yaş </Table.HeaderCell>
                      <Table.HeaderCell>Başvuru Durumu</Table.HeaderCell>
                      <Table.HeaderCell>
                      <Input
                        value={searchValue}
                        onChange={(event) => this.setState({searchValue: event.target.value})}
                        placeholder='Ara'/>
                      </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body> {searchValue ===  '' ? tableDatas : tableDatasSearch}</Table.Body>
               
                </Table>
            </Segment>
        )
    }
}

export {EmployeeAll}