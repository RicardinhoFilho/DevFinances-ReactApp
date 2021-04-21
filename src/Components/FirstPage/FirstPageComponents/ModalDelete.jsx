import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import { Card, Typography, TextField, Button } from "@material-ui/core";

const ModalDelete = ({ option, id }) => {
  const [defineModal, setDefineModal] = useState(false);

  useEffect(() => {
    if (defineModal != option) {
      setDefineModal(option);
    }
  }, {});

  return (
    <Modal open={defineModal} onClose={!defineModal}>
      <div className="modal">
        <Typography variant="h6" align="center" className="title">
          Deletar Transação
        </Typography>
        <Typography variant="h6" align="center">
          Pizza
        </Typography>
        <Typography variant="h6" align="center">
          R$40
        </Typography>
        <Typography variant="h6" align="center">
          "12/12/2012"
        </Typography>
        <Typography variant="h6" align="center">
          "Pizza"
        </Typography>

        <Button type="submit" variant="contained" color="secondary" id="button">
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
