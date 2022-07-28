import { Button, Table} from 'semantic-ui-react';
import React from 'react';
import agent from '../../../axios/agent';
import {NotificationSuccess} from '../../../webpage/components/notification';
import {ToastContainer} from 'react-toastify';

const TableContent = (props) => {
    //const [Hidden, setHidden] = useState(true);

    const deleteUser = (id) => {
      agent.User.delete(id)
        .then(response => {
              if(response.status === 200)
                    window.location.reload();
            })
      }

      const recoverPassword = (id) => { 
        agent.User.edit({id: id, password: 'Pa$$w0rd'})
        .then(response => {
            if(response.status === 200)
              NotificationSuccess("Şifre sıfırlandı")
        })
      }

    return(
        <Table.Body>
          <ToastContainer/>
          <Table.Row>
                <Table.Cell>
                  {props.username}
                </Table.Cell>
                <Table.Cell>
                  {props.companyName}
                  </Table.Cell>
                <Table.Cell>
                  {props.email}
                </Table.Cell>
                <Table.Cell>
                  <Button size='small' fluid style={{padding:'12px', float:'right'}} onClick={() => recoverPassword(props.id)} content="Şifreyi Sıfırla"/>
                </Table.Cell>
                <Table.Cell>{props.rol.replace(/\d+/g, '').split('.').join("")}</Table.Cell>
                <Table.Cell width={1}>
                  <Button size='small' fluid style={{padding:'12px', float:'right'}} onClick={() => deleteUser(props.id)} color='red' content='Sil'/>
                </Table.Cell>
          </Table.Row>
        </Table.Body>
    )
}
export default TableContent