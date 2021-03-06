import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatVisualDate } from "./utils/formatVisualDate";
import { Modal } from "@material-ui/core";
import { Typography, TextField, Button } from "@material-ui/core";
const ModalDelete = ({ option, setModalDeleteState, item }) => {
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
  console.log(item.id);
  const toDelete = async () => {
    axios.delete(`http://localhost:8000/transactions/${item.id}`);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <Typography variant="h6" align="center" id="title">
          Deletar Transação
        </Typography>
        <Typography variant="h3" align="center" className="delete-text">
          {item.title}
        </Typography>

        <div className="delete-item-information">
        <TextField value={`R$${item._value}`} margin="normal" />
          <br />

          <TextField value={formatVisualDate(item._date)} margin="normal" />
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          id="button"
          onClick={() => {
            toDelete();
            document.location.reload();
          }}
        >
          Confirmar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
