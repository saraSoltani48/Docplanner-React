import React from "react";
import "./PatientDoctor.css";




const CardPatientDoctor = ({ name, select, image, title }) => {
 return (
    
   <div className={select? 'card card1':'card card2'}>
     <p className="transparent">{name}</p>
     <h3 className="patient_doctors"> {title} </h3>
     {select &&
       <select className="select">
           
        {select.map((el,key)=>
           <option   className="transparent" key={key}>{el}</option>
        )}
        
       </select>}
     
     <img className="img-patient-doctors " src={image} alt="..." />
   </div>
 );
};
export default CardPatientDoctor;