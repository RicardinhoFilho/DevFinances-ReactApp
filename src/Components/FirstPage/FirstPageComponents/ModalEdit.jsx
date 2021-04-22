import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import { Card, Typography, TextField, Button } from "@material-ui/core";

const ModalEdit = ({ option, setModalEditState, item }) => {
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
    setModalEditState(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <Typography variant="h6" align="center" className="title">
          Editar Transação
        </Typography>
        <form>
          <TextField value={item.title} margin="normal" required />
          <br />
          <TextField value={`R$${item._value}`} margin="normal" required />
          <br />
          <TextField value={item._date} margin="normal" required />
          <br />
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
        </form>
      </div>
    </Modal>
  );
};

export default ModalEdit;
