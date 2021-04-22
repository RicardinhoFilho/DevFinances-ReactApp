import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import {
  Card,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const ModalAdd = (option) => {
  const [defineModal, setDefineModal] = useState(false);

  useEffect(() => {
    if (defineModal != option) {
      setDefineModal(option);
    }
  }, {});
  const handleOpen = () => {
    setDefineModal(true);
  };


  const closeModal = ()=>{
    setDefineModal(false)
  }

  return (
    <Modal open={defineModal} onClose={!setDefineModal}>
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
                setDefineModal(false);
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
