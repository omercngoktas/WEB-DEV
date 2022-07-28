import React, {Component} from 'react';
import {Table, Input, Checkbox, Button, Popup} from 'semantic-ui-react';
import agent from '../../../axios/agent';

class EditReportForm extends Component{
    constructor(props){
        super(props)
        this.state={
            id: '',
            number:'',
            name:'',
            date: '',
            bool: undefined,
        }
        this.updateReport = this.updateReport.bind(this)
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            number: this.props.number,
            name: this.props.name,
            date: this.props.date,
        })
    }

    updateReport(){
        let report = {
            reportId: this.state.id,
            number: this.state.number,
            name: this.state.name,
            date: (!this.state.date).toString()
        }
        agent.Reports.update(report)
            .then(response => {
                if(response.status === 200)
                window.location.reload();
            })
    }

    render(){
        return(
            <Table.Row>
                <Table.Cell>
                    <Input 
                        value={this.state.number} 
                        onChange={(event) => this.setState({number: event.target.value})}
                        style={{width: '100%'}}/>
                </Table.Cell>
                <Table.Cell>
                    <Input 
                        value={this.state.name} 
                        onChange={(event) => this.setState({name: event.target.value})}
                        style={{width: '100%'}}/>
                </Table.Cell>
                <Table.Cell>
                <Popup 
                    content='Tarih aralığı için doğrulayın' 
                    trigger={<Checkbox 
                        checked={this.state.date}
                        onClick={(event) => {this.setState({date: !this.state.date})}}
                        className={'bigger-checkbox'}/>} />
                </Table.Cell>
                <Table.Cell>
                <Button 
                    size='small' 
                    color='red' 
                    style={{padding:'12px', float:'right'}}
                    content='İptal'
                    onClick={this.props.decline}
                    />
                <Button 
                    size='small' 
                    color='green' 
                    style={{padding:'12px', float:'right'}}
                    onClick={this.updateReport}
                    content='Onayla'
                    />
                </Table.Cell>
            </Table.Row>
        )
    }
}

export {EditReportForm}
