import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import WebPopUp from './web-pop-up.jpg';

class StartModal extends Component {
    constructor(props){
        super(props)
        this.state={
            show:true
        }
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose(){
        this.setState({
            show: false
        })
    }

    render(){
        return(
            <>
                <Modal 
                size={'lg'} 
                show={this.state.show} 
                onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Body><img src={WebPopUp} style={{width:'100%'}} alt=''/></Modal.Body>
                </Modal.Header>
                </Modal>
            </>
        )
    }
}

export {StartModal}