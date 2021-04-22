import React, { useState, useEffect } from "react";
import imagePlus from "./Assets/Plus.svg";
import { Button } from "@material-ui/core";
import ModalAdd from "./ModalAdd"
import "./FirstPage.css";
const AddTransactionButton = (option) => {
  const [modalAddState, setModalAddState] = useState(false);


  const modalAddOpen = () => {
    if (modalAddState === true) {
      return <ModalAdd option={modalAddState} setModalAddState={setModalAddState} />;
    }
  };
  
  return (
    <>
    <Button
      variant="contained"
      color="primary"
      id="add-transaction-button"
      onClick={(event) => {
        setModalAddState(true);
      }}
    >
      <img src={imagePlus} alt="Edit" />
      Adicionar Transação
    </Button>

    {modalAddOpen()}
    {/* {setModalAddState(false)} */}
    </>
  );
};

export default AddTransactionButton;
