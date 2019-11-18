import React from "react";
import NavMenu from "./NavMenu";

const Header =()=> {
    let arr= [ 
        { name:"About as "},
        { name:"Career"},
        {name:"Département",
         drop:[
            "Marketing",
            "Customer Success & Sales",
            "IT, Product, Design & UX",
            "Finance & Administration"
        ]}
    ];
    
    
    return (
       <div >
        <div className="main-list">
       <div>
         <img
           class="logo-docplanner"
           src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1 " alt=""
        />
       </div>
       <div>
         <ul className="list-menu">
           {arr.map((el, key) => (
             <NavMenu name={el.name} drop={el.drop} key={key} />
           ))}
         </ul>
       </div>
     </div>
     
     <div className="article">
         
       <img className="img_lead" src="https://www.docplanner.com/img/sygnet.png" alt="kkk"/>
       <div className="title_docplanner">
         <h3>Making the healthcare experience more human</h3>
       </div>
       <div className="paragraph-docpalanner">
          
         <p className="para">
           We want patients to find the perfect doctor and book an appointment in the most easy way.The patient journey should be enjoyable, and that's why we are always next to them:to help
           them find the best possible care. Anytime,anywhere.
         </p>
         <p>
           We also help doctors to better manage their practice and build thei online reputation. With our integrated end-to-end solution,
           doctors are able not only to improve their online presence, but also
           to devote their time to what really matters: their patients.
         </p>
         
       </div>
     </div>


       </div>

    );};
export default Header;