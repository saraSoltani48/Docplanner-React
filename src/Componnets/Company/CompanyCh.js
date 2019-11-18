import React from "react";
import "./CompanyStyle.css";

const Global = ({Link1,Link2,Link4,Link3}) => {
    return (
        <div className="links">
         <a >{Link1}</a>
         <a>{Link2}</a>
         <a>{Link3}</a>
         <a>{Link4}</a>

        </div>
       
    );
   };

export default Global;