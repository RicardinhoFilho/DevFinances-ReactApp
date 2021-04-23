import React,{useState, useEffect} from "react";
import { Typography } from "@material-ui/core";
import incomeImage from "./Assets/income.svg"
import expenseImage from "./Assets/expense.svg"
import totalMoney from "./Assets/money.svg"
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

        <Typography variant="h4" component="span" id="card-value" className="card">
        <img src={incomeImage}/><br/>
        {`R$${income}`} 
        </Typography>
      
      
        <Typography variant="h4" component="span" align="left" id="card-value" className="card">
        <img src={expenseImage}/><br/>
        {`R$${expense * -1}`}
        </Typography>

        <Typography variant="h4" component="span" align="left" id="card-value" className={total > 0 ? "positiveTotal" : "negativeTotal"}>
        <img  src={totalMoney} className="moneyImage"/><br/>
        {`R$${total.toFixed(2)}`}
        </Typography>
     
    </div>
  );
};

export default CardFinance;
