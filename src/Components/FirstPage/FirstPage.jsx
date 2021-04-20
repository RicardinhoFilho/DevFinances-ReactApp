import React from "react";
import  HeaderFinance  from "./FirstPageComponents/HeaderFinance";
import  TableFinance  from "./FirstPageComponents/TableFinance";
import  CardFinance  from "./FirstPageComponents/CardFinance";

const FirstPage = () => {
  return (
    <>
      <HeaderFinance />
      <CardFinance/>
      <TableFinance />
    </>
  );
};

export default FirstPage;
