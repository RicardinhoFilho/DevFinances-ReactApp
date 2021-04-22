import React, { useState, useEffect } from "react";
import HeaderFinance from "./FirstPageComponents/HeaderFinance";
import TableFinance from "./FirstPageComponents/TableFinance";
import CardFinance from "./FirstPageComponents/CardFinance";
import AddTransactionButton from "./FirstPageComponents/AddTransactionButton";

const FirstPage = () => {
  return (
    <div>
      <HeaderFinance />
      <CardFinance />
      <AddTransactionButton />
      <TableFinance />
    </div>
  );
};

export default FirstPage;
