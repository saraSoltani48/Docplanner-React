import React from 'react';
import "./App.css";
import Header from "./Componnets/Header/Header";
import DoctorPatient from "./Componnets/Cards/DoctorPatient";
import CompanyParent from "./Componnets/Company/CompanyParent";
import HealthParent from "./Componnets/Platform/HealthParent";
import CountrieParent from "./Componnets/Countries/CountrieParent";
function App (){
  return(
  <div className="App">
    <Header/>
    <DoctorPatient />
    <CompanyParent/>
    <HealthParent/>
    <CountrieParent/>
  </div>
  );}
  export default App;