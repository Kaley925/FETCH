import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Favorites: React.FC<FavoritesProps> = ({
  modalView,
  handleCloseModal,
  favorites,
}) => {
  return (
    <Modal size="xl" show={modalView} onHide={() => handleCloseModal()}>
      <Modal.Body className="login-modal"></Modal.Body>
    </Modal>
  );
};

interface FavoritesProps {
  modalView: boolean;
  handleCloseModal: any;
  favorites: any;
}

export default Favorites;
