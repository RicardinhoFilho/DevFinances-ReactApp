import React,{useState, useEffect} from "react";
import  HeaderFinance  from "./FirstPageComponents/HeaderFinance";
import  TableFinance  from "./FirstPageComponents/TableFinance";
import  CardFinance  from "./FirstPageComponents/CardFinance";
import  ModalEdit  from "./FirstPageComponents/ModalEdit";

const FirstPage = () => {

  const [modal, setModal] = useState(false);
  


  return (
    <div>
      <HeaderFinance />
      <CardFinance/>
      <TableFinance />
      <ModalEdit option={false} id={6} />
    </div>
  );
};

export default FirstPage;
