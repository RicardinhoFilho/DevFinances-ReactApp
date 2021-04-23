import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderFinance from "./FirstPageComponents/HeaderFinance";
import TableFinance from "./FirstPageComponents/TableFinance";
import CardFinance from "./FirstPageComponents/CardFinance";
import AddTransactionButton from "./FirstPageComponents/AddTransactionButton";

const FirstPage = () => {
  const [data, setData] = useState([]);
  async function getTransactions() {
    try {
      const response = await axios.get("http://localhost:8000/transactions");

      setData(response.data);
      //console.log("Este", response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
   getTransactions();
    console.log("num deu" ,data)
  }, data)
  return (
    <div>
      <HeaderFinance />
      <CardFinance data={data}/>
      <AddTransactionButton />
      <TableFinance data={data} />
    </div>
  );
};

export default FirstPage;
