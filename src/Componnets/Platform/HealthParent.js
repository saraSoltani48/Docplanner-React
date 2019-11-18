import React from "react";
import Healthcare from "./HealthChild";
import "./HealthStyle.css";

let arr=[{image:'https://www.docplanner.com/img/flag.png',
        alt: 'flag',
        titre:"Leader in 10 countries",
        paragraphe:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile" },

        { image: "https://www.docplanner.com/img/visits.png",
           alt: 'visits',
            titre:"1.5 million appointments",
            paragraphe:"booked last month"},

            {image:"https://www.docplanner.com/img/patients.png",
            alt: 'patients',
            titre:"30 million unique patients",
            paragraphe:"us every month "},

            {image:"https://www.docplanner.com/img/doctors.png",
            alt: 'doctors',
            titre:"2 million active doctors",
            paragraphe:"trust in our solutions"} 
        ];




const Health = () => {
    return (
        <div>
     <div className="biggest ">
            <div className="world">
        
                <h1>The world's biggest healthcare platform</h1>
                
                <p> We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>           
                <img  className=" logo-doc" src="https://www.docplanner.com/img/logo.png" alt="logo"/>
             </div>
        
             <div className="health">
             
            {arr.map((el, index) => (
       <Healthcare
         key={index}
         image={el.image}
         alt={el.alt}
         titre={el.titre}
         paragraphe={el.paragraphe}
        />
     ))}
             </div>

    </div>
         <div  className="live">
         <h2>Improve the lives of millions.Change yours forever</h2>
         <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops</p>
             </div>       

    </div> 
    );
   };

export default Health;