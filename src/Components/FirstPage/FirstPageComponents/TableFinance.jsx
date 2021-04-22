import React, { useState, useEffect } from "react";
import "./FirstPage.css";
import editImage from "./Assets/Edit.svg";
import trashImage from "./Assets/Trash.svg";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import axios from "axios";

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

const TableComponent = () => {
  const [itemId, setItemId] = useState(0);
  const [modalEditState, setModalEditState] = useState(false);
  const [modalDeleteState, setModalDeleteState] = useState(false);
  const [data, setData] = useState([]);

  const modalEditOpen = () => {
    if (modalEditState === true) {
      return (
        <ModalEdit
          option={modalEditState}
          id={itemId}
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
          id={itemId}
          setModalDeleteState={setModalDeleteState}
        />
      );
    }
  };

  async function getTransactions() {
    try {
      const response = await axios.get("http://localhost:8000/transactions");

      setData(response.data);
      console.log("Este", response.data);
      return response.data;
      //console.log(JSON.stringify(response))
    } catch (err) {
      console.log(err);
    }
  }

  function createData(id, title, _value, _date) {
    console.log("id=>", id);
    return { id, title, _value, _date };
  }

  

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
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row._value}</TableCell>
                <TableCell align="right">{row._date}</TableCell>
                <TableCell align="right">
                  <button
                    className="edit-button"
                    onClick={(event) => {
                      console.log("cliquei");
                      setItemId(1);

                      setModalEditState(true);
                    }}
                  >
                    <img src={editImage} alt="Edit" />
                  </button>
                  <button
                    className="trash-button"
                    onClick={(event) => {
                      setItemId(2);
                      setModalDeleteState(true);
                      console.log(modalDeleteState);
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
