import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import {Typography, TextField, Button } from "@material-ui/core";
const ModalDelete = ({ option, setModalDeleteState, id }) => {
  const [open, setOpen] = useState(option);
  useEffect(() => {
    if (open != option) {
      handleOpen();
    }
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalDeleteState(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <Typography variant="h6" align="center" className="title">
          Deletar Transação
        </Typography>
        <Typography variant="h3" align="center" className="delete-text">
          Pizza
        </Typography>

        <div className="delete-item-information">
          <Typography variant="h4" className="delete-text">
            R$ 60
          </Typography>

          <Typography variant="h4" className="delete-text">
            15/12/2019
          </Typography>
        </div>

        <Button
          variant="contained"
          color="secondary"
          id="button"
          onClick={(event) => {
            handleClose();
          }}
        >
          Cancelar
        </Button>
        <Button type="submit" variant="contained" color="primary" id="button">
          Confirmar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
