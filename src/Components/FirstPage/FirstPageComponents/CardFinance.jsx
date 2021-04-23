import React,{useState, useEffect} from "react";
import { Card, Typography } from "@material-ui/core";
import "./FirstPage.css";


const CardFinance = ({data}) => {

  useEffect(() => { 
    sum()
    setIncome(testIncome)
    setExpense(testExpense)
    calcTotal()
    testIncome = 0
    testExpense = 0;
    
  })

  const[income, setIncome] = useState(0);
  const[expense, setExpense] = useState(0);
  const[total, setTotal] = useState(0);
  
  let testIncome = 0;
  let testExpense = 0;

  

  const sum = ()=>{
    data.map((transaction)=>{
      if(transaction._value > 0){
        //testaIncome = 0;
        testIncome += parseFloat(transaction._value)
      }else{
        testExpense += parseFloat(transaction._value)
      }
    })
  }

  const calcTotal= ()=>{
    setTotal(testIncome + testExpense);
  }
  
  

  

  return (
    <div className="cards">
     
        <Typography variant="h4" component="span" id="card-value">
        {`R$${income}`}
        </Typography>
      
      
        <Typography variant="h4" component="span" align="left" id="card-value">
        {`R$${expense}`}
        </Typography>

        <Typography variant="h4" component="span" align="left" id="card-value">
        {`R$${total}`}
        </Typography>
     
    </div>
  );
};

export default CardFinance;
