import { Button, Table} from 'semantic-ui-react';
import {EditReportForm} from './reportEditForm';
import React,{useState} from 'react';
import agent from '../../../axios/agent';

const TableContent = (props) => {
    const [Change, setChange] = useState(true);

    const deleteReport = (id) => {
      agent.Reports.delete(id)
          .then(response => {
            if(response.status === 200)
              window.location.reload();
        })
    }

    return(
        <Table.Body>
          {
            Change ?
            <Table.Row>
                <Table.Cell>
                  {props.number}
                </Table.Cell>
                <Table.Cell>
                  {props.name}
                </Table.Cell>
                <Table.Cell>
                  {props.date === "false" ? "Var" : "Yok"}
                </Table.Cell>
                <Table.Cell>
                <Button 
                      size='small' 
                      color='red' 
                      style={{padding:'12px', float:'right'}}
                      content='Sil'
                      onClick={() => deleteReport(props.id)}
                      />
                <Button 
                      size='small' 
                      color='yellow' 
                      style={{padding:'12px', float:'right'}}
                      onClick={()=> setChange(false)}
                      content='Düzenle'
                      />
                </Table.Cell>
          </Table.Row> :
          <EditReportForm 
            id={props.id}
            number={props.number}
            name={props.name}
            date={props.date}
            decline={()=> setChange(true)}
          />
          }
          
        </Table.Body>
    )
}
export default TableContent