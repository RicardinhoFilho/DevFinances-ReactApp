import React, { useState, useEffect } from "react";
import {formatVisualDate} from "./utils/formatVisualDate";
import { validTitle, validValue } from "./utils/formsValidate";
import axios from "axios";
import { Modal, Typography, TextField, Button } from "@material-ui/core";

const ModalEdit = ({ option, setModalEditState, item }) => {
  const [open, setOpen] = useState(option);
  useEffect(() => {
    if (open != option) {
      handleOpen();
    }
  });
  const [title, setTitle] = useState(item.title);
  const [_value, setValue] = useState(item._value);
  const [errorTitle, setErrorTitle] = useState({
    title: { valid: true, errorMessage: "" },
  });
  const [errorValue, setErrorValue] = useState({
    value: { valid: true, errorMessage: "" },
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalEditState(false);
  };

  const submit = () => {
    try {
      axios.patch(`http://localhost:8000/transactions/${item.id}`, {
        title,
        _value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <Typography variant="h6" align="center" id="title">
          Editar Transação
        </Typography>
        <form
          onSubmit={(event) => {
            if (
              errorTitle.title.valid == true &&
              errorValue.value.valid == true
            ) {
              submit();
            } else {
              event.preventDefault();
            }
          }}
        >
          <TextField
            value={title}
            margin="normal"
            required
            onBlur={(event) => {
              const valid = validTitle(title);
              setErrorTitle({ title: valid });
            }}
            error={!errorTitle.title.valid}
            helperText={errorTitle.title.errorMessage}
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <br />
          <TextField
            value={_value}
            margin="normal"
            required
            onBlur={(event) => {
              const valid = validValue(_value);
              setErrorValue({ value: valid });
            }}
            error={!errorValue.value.valid}
            helperText={errorValue.value.errorMessage}
            value={_value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <br />
          <TextField value={formatVisualDate(item._date)} margin="normal" required />
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
