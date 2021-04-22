import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import {
  Card,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const ModalAdd = ({option, setModalAddState}) => {
  const [open, setOpen] = useState(option);
  useEffect(() => {
    if (open != option) {
      setOpen(option);
    }
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalAddState(false);
  };

  return (
    
    <Modal  open={open}
    onClose={handleClose}>
      <div className="modal">
        <Typography variant="h6" align="center" className="title">
          Adicionar Transação!
        </Typography>
        <form>
          <TextField label="Título" margin="normal" required />
          <br />
          <TextField label="Valor" margin="normal" required />
          <br />
          <TextField
            id="date"
            label="Data Transação"
            type="date"
           
          />

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

export default ModalAdd;
