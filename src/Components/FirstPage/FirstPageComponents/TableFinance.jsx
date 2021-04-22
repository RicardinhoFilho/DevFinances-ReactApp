import React, { useState } from "react";
import "./FirstPage.css";
import editImage from "./Assets/Edit.svg";
import trashImage from "./Assets/Trash.svg";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const TableComponent = ( ) => {
  const [itemId, setItemId] = useState(0);
  const [modalEditState, setModalEditState] = useState(false);
  const [modalDeleteState, setModalDeleteState] = useState(false);

  

  const modalEditOpen = () => {
    if (modalEditState === true) {
      return <ModalEdit option={modalEditState} id={itemId} />;
    }
  };

  const modalDeleteOpen = () => {
    if (modalDeleteState === true) {
      return <ModalDelete option={modalDeleteState} id={itemId} />;
    }
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 1, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 2, 9.0, 37, 4.3),
    createData("Eclair", 3, 16.0, 24, 6.0),
    createData("Cupcake", 4, 3.7, 67, 4.3),
    createData("Gingerbread", 5, 16.0, 49, 3.9),
  ];

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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">
                  <button
                    className="edit-button"
                    onClick={(event) => {
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
                      console.log(modalDeleteState)
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
