import React from "react";
import "./HealthStyle.css";

const Healthcare = ({image,alt,titre,paragraphe}) => {
    return (
        <div className="leader">
           <img className="lead "  src={image}  alt={alt} />
           <h2>{titre}</h2>
            <p>{paragraphe}</p>
        </div>
       
    );
   };

export default Healthcare;