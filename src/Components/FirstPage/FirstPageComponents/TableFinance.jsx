import React, { useState, useEffect} from "react";
import "./FirstPage.css";
import editImage from "./Assets/Edit.svg";
import trashImage from "./Assets/Trash.svg";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

//http://localhost:3333/transactions
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const TableComponent = ({data}) => {
  const [item, setItem] = useState([]);
  const [modalEditState, setModalEditState] = useState(false);
  const [modalDeleteState, setModalDeleteState] = useState(false);
  const [transactions, setTransactions] = useState(data);

  console.log("pqp",data)
  
  const modalEditOpen = () => {
    if (modalEditState === true) {
      return (
        <ModalEdit
          option={modalEditState}
          item={item}
          setModalEditState={setModalEditState}
        />
      );
    }
  };

  const modalDeleteOpen = () => {
    if (modalDeleteState === true) {
      return (
        <ModalDelete
          option={modalDeleteState}
          item={item}
          setModalDeleteState={setModalDeleteState}
        />
      );
    }
  };

  

  return (
    <div id="table-finance">
      <TableContainer component={Paper} className="table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell component="th" scope="row">
                  {transaction.title}
                </TableCell>
                <TableCell align="right">{transaction._value}</TableCell>
                <TableCell align="right">{transaction._date}</TableCell>
                <TableCell align="right">
                  <button
                    className="edit-button"
                    onClick={(event) => {
                      
                      setItem(transaction);
                     console.log(transaction)

                      setModalEditState(true);
                    }}
                  >
                    <img src={editImage} alt="Edit" />
                  </button>
                  <button
                    className="trash-button"
                    onClick={(event) => {
                      setItem(transaction);
                      setModalDeleteState(true);
                    }}
                  >
                    <img src={trashImage} alt="Delete" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {modalDeleteOpen()}
      {modalEditOpen()}
    </div>
  );
};
export default TableComponent;
