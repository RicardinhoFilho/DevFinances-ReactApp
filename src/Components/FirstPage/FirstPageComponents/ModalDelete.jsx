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
