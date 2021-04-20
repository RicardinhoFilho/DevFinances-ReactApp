import React from "react";
import "./FirstPage.css";

import { Typography } from "@material-ui/core";

const Header = ()=>{

    return(
        <section>
           <Typography variant="h4" align="center" className="title"><strong><em>$</em></strong> DevFinances</Typography>
        </section>
    )
}

export default Header;