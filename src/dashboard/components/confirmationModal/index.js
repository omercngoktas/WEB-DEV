import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ConfirmationModal = (props) => {
    return(
    <Modal trigger={props.confirmationButton} size='small' style={{height:'auto', left: '50vh', marginTop: '25vh'}}>
        <Modal.Header>{props.modalHeader}</Modal.Header>
        <Modal.Content>{props.modalContent}</Modal.Content>
        <Modal.Actions>
          <Button 
            icon='delete'
            negative
            content='No'
          />
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Yes'
          />
        </Modal.Actions>
      </Modal>
    )
}

export default ConfirmationModal

