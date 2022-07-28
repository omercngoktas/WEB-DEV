import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ImageBox = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img variant="primary" onClick={handleShow} src={props.src} style={{ width: props.width }} alt='İş Sürekliliği Politikası' />
      <Modal size='xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><img variant="primary" onClick={handleShow} src={props.src} style={{ width: props.width }} alt='' /></Modal.Body>
      </Modal>
    </>
  )
}

export default ImageBox