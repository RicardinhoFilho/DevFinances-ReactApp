import React from "react";
import { Card, Typography } from "@material-ui/core";
import "./FirstPage.css";

const CardFinance = () => {
  return (
    <div className="cards">
     
        <Typography variant="h4" component="span" id="card-value">
          200
        </Typography>
      
      
        <Typography variant="h4" component="span" align="left" id="card-value">
          300
        </Typography>
     
    </div>
  );
};

export default CardFinance;
