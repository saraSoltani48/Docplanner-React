import React from "react";
import "./Countries.css";



const Pays = ({image,titre,button}) => {
    return (
        <div className="ville">
         <img className="photos-pays "  src={image} alt="..." />
        <a className="titre"> {titre}</a>
        <button className="see-openings"><a>{button}</a></button>
        </div>
       
    );
   };
export default Pays ;