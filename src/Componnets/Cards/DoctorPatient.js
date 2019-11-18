import React from "react";
import CardPatientDoctor from "./CardPatientDoctor";
import "./PatientDoctor.css";
let arr = [
 {
   name: "For patient",
   title: "Find a doctor, book a visit and solve any health-related doubt",
   select: [
     "Choose country",
     "Argentina",
     "Australia",
     "Brazil",
     "Chile",
     "Colombia",
     "Czech",
     "France",
     "Italy",
     "Mexico"
   ],
   image: "https://www.docplanner.com/img/screen-marketplace@2x.png"},
 {
   name: "For Doctors",
   title: "Find a doctor, book a visit and solve any health-related doubt",
   image: "https://www.docplanner.com/img/screen-saas@2x.png"


 }
];
const DoctorPatient = () => {
 return (
   <div className="patient-doctor">
     {arr.map((el, index) => (
       <CardPatientDoctor
         key={index}
         name={el.name}
         select={el.select}
         image={el.image}
         title={el.title}
       />
     ))}
   </div>
 );
};
export default DoctorPatient;
