import React, {useState, useEffect} from 'react'
import Modal from "react-bootstrap/Modal";

const EditModal: React.FC<EditModalProps> = ({ modalView, handleModalClose }) => {
    return (
        <Modal size="xl" show={modalView} onHide={() => handleModalClose()}>
        <Modal.Body className="login-modal">
        <Modal.Header
                className="close-modal-login"
                closeButton
              ></Modal.Header>
        </Modal.Body>
      </Modal>
    )
}

interface EditModalProps {
    modalView: boolean;
    handleModalClose: any;
  }

export default EditModal
