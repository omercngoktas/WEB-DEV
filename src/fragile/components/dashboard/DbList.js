import React, {Component} from 'react';
import { Table, Container } from 'semantic-ui-react'
import agent from '../../../axios/agent';
import NewDepartmentAdd from './DepartmentAdd';
import NewProjectAdd from './ProjectAddModal';

class DashBoardList extends Component{
    constructor(props){
        super(props)
        this.state={
            data: []
        }
    }

    componentDidMount(){
        agent.FragileDepartmentAdd.list()
        .then(response => {
            this.setState({
                data: response.data
            })
        })
    }
    updatedList = (value) => {
        this.setState({
            data: [...this.state.data, value]
      })
    }

    render(){
        const departmentData = this.state.data.map((item)=>{
            return(
                <Table.Row>
                        <Table.Cell>
                            {item.departmentName}
                        </Table.Cell>
                </Table.Row>
            )
        })
        return(
            <Container style={{marginTop: '3em'}}>
                <NewDepartmentAdd updatedList = {this.updatedList}/>
                <NewProjectAdd/>
                <Table color='blue' key='blue' inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Departman</Table.HeaderCell>
                            <Table.HeaderCell>Yeni</Table.HeaderCell>
                            <Table.HeaderCell>Geliştiriliyor</Table.HeaderCell>
                            <Table.HeaderCell>Revizede</Table.HeaderCell>
                            <Table.HeaderCell>Tamamlanmış</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {departmentData}
                    </Table.Body>
                </Table>
            </Container>
        )}
    }

export {DashBoardList};
