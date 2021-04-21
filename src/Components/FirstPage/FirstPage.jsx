import React, { useState, useEffect } from "react";
import HeaderFinance from "./FirstPageComponents/HeaderFinance";
import TableFinance from "./FirstPageComponents/TableFinance";
import CardFinance from "./FirstPageComponents/CardFinance";
import ModalEdit from "./FirstPageComponents/ModalEdit";

const FirstPage = () => {
  
  return (
    <div>
      <HeaderFinance />
      <CardFinance />
      <TableFinance />
      {/* <ModalEdit option={modalEdit} id={6} /> */}
    </div>
  );
};

export default FirstPage;
