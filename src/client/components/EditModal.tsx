import React, {useState, useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const EditModal: React.FC<EditModalProps> = ({
   modalView,
   handleModalClose,
   handleModalChange,
   }) => {
    return (
        <Modal size="sm" show={modalView} onHide={() => handleModalClose()}>
        <Modal.Body className="login-modal">
          <div className="modal-row row">
            <div className="col-lg-6 col-12 modal-form-col">
            <Button
                    onClick={handleModalChange}
                    className="signup-modal-btn w-100 mb-3"
                    type="submit"
                  >
                    Signup
                  </Button>
            </div>
          </div>
        <Modal.Header
                className="close-modal-login"
                closeButton
              ></Modal.Header>
        </Modal.Body>
      </Modal>
    )
};

interface EditModalProps {
    modalView: boolean;
    handleModalClose: any;
    handleModalChange: any;
  }

export default EditModal;
