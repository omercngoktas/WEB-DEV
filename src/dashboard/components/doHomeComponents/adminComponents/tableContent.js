import {Table, Button} from 'semantic-ui-react';
import React from 'react';
import agent from '../../../../axios/agent';

const DateFormatTime = (date) => {
  let hour = date.substring(11,13);
  let minutes = date.substring(14,16);
  //Server Location on Digital Ocean FRA GMT +00.00 İstanbul GMT +03.00
  let time = (parseInt(hour)+3) + "." + minutes
  return (time)
}

const DateToFormat = (date) => {
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  return (day + "."+ month + "." + year)
}

const TableContent = (props) => {
    const onClickDelete = (e) => {
      e.preventDefault();
      agent.ReportClaim.delete(props.id)
      .then(response => {
        response.status === 200 ? 
        window.location.reload():console.log("API ERROR")
      })
    }
    return(
        <Table.Body>
            <Table.Row>
                <Table.Cell>
                  {props.customerName}
                </Table.Cell>
                <Table.Cell>
                  {DateToFormat(props.date)}
                </Table.Cell>
                <Table.Cell>
                  {DateFormatTime(props.date)}
                </Table.Cell>
                <Table.Cell>
                  {props.parameters}
                </Table.Cell>
                <Table.Cell>
                  {props.reportNumber}
                </Table.Cell>
                <Table.Cell>
                  {"Müşteri " + props.fileType + " dökümanı aldı"}
                    <Button 
                      size='small' 
                      circular
                      onClick={(e) => onClickDelete(e)}
                      icon='close'
                      style={{float:'right'}}
                    />
                </Table.Cell>
          </Table.Row> 
        </Table.Body>
    )
}
export default TableContent