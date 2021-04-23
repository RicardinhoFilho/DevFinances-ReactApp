import React, { useState, useEffect } from "react";
import axios from "axios";
import {validTitle, validValue} from "./utils/formsValidate";
import { Modal } from "@material-ui/core";
import { Card, Typography, TextField, Button } from "@material-ui/core";

const ModalAdd = ({ option, setModalAddState }) => {
  const [open, setOpen] = useState(option);
  const [title, setTitle] = useState("");
  const [_value, setValue] = useState(0);
  const [_date, setDate] = useState("");
  const [errorTitle, setErrorTitle] = useState({title: { valid: false, errorMessage: "" }})
  const [errorValue, setErrorValue] = useState ({value: { valid: false, errorMessage: "" }})
   
 
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

  const submit = async () => {
    try {
      //console.log({title, _value, _date })
      axios.post("http://localhost:8000/transactions", {
        title,
        _value,
        _date,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <Typography variant="h6" align="center" id="title">
          Adicionar Transação!
        </Typography>
        <form
          onSubmit={(event) => {
            if (errorTitle.title.valid == true && errorValue.value.valid == true  ) {
              submit();
            }else{
              event.preventDefault();
            }
          }}
        >
          <TextField
            label="Título"
            margin="normal"
            value={title}
            required
            onBlur={(event) => {
              const valid = validTitle(title);
              console.log("olha aqui", valid)
              setErrorTitle({ title:valid });
              console.log(!errorTitle.title.valid)
            }}
            error={!(errorTitle.title.valid)}
            helperText={errorTitle.title.errorMessage}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <br />
          <TextField
            label="Valor"
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
              let value =  event.target.value;
              value = value.replace(",", ".");
              setValue(value);
            }}
          />
          <br />
          <TextField
            id="date"
            label="Data Transação"
            type="date"
            required
            value={_date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="button"
            onClick={() => {}}
          >
            Confirmar
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAdd;
