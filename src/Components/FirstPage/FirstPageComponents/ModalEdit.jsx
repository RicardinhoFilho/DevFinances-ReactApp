import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import { Card, Typography, TextField, Button } from "@material-ui/core";

const ModalEdit = ({ option, id }) => {
  const [defineModal, setDefineModal] = useState(false);

  useEffect(() => {
    if (defineModal != option) {
      setDefineModal(option);
    }
  }, {});

  return (
    <Modal open={defineModal} onClose={!defineModal}>
      <div className="modal">
      <Typography variant="h6" align="center" className="title">Editar Transação</Typography>
        <form>
          <TextField value={"Pizza"} margin="normal" required /><br/>
          <TextField value={`R$${id}`} margin="normal" required /><br/>
          <TextField value={"15/02/2002"} margin="normal" required /><br/>
          <Button type="submit" variant="contained" color="secondary" id="button">
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
