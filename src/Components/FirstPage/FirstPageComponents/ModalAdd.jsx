import React, { useState, useEffect } from "react";
import axios from "axios"
import { Modal } from "@material-ui/core";
import {
  Card,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const ModalAdd = ({option, setModalAddState}) => {
  const [open, setOpen] = useState(option);
  const [title, setTitle] = useState("");
  const [_value, setValue] = useState(0);
  const [_date, setDate] = useState("");
  const[error, setError] =useState();
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

  const submit = async()=>{
    try{
      console.log({title, _value, _date })
       axios.post("http://localhost:8000/transactions", {title, _value, _date });
    }catch(err){
      console.log(err);
    }
      
    
  }

  return (
    
    <Modal  open={open}
    onClose={handleClose}>
      <div className="modal">
        <Typography variant="h6" align="center" className="title">
          Adicionar Transação!
        </Typography>
        <form>
          <TextField label="Título" margin="normal" value={title} required onChange={(event)=>{
            setTitle(event.target.value);
          }}/>
          <br />
          <TextField label="Valor" margin="normal" required value={_value} onChange={(event)=>{
            setValue(event.target.value);
          }}/>
          <br />
          <TextField
            id="date"
            label="Data Transação"
            type="date"
           required
           value={_date}
           onChange={(event)=>{
             setDate(event.target.value)
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
          <Button type="submit" variant="contained" color="primary" id="button" onClick={()=>{
            submit();
            
          }}>
            Confirmar
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAdd;
