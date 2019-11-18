import React from "react";
import Pays from "./CountrieChild";
import "./Countries.css";

let tab=[{image:'https://www.docplanner.com/images/warsaw.png',
        titre:"Warsaw",
        button:"SEE OPENINGS" },
    
        {image:'https://www.docplanner.com/images/barcelona.png',
        titre:"Barcelona",
        button:"SEE OPENINGS" },
    
        {image:'https://www.docplanner.com/images/istanbul.png',
        titre:"Istanbul",
        button:"SEE OPENINGS" },
        
        {image:'https://www.docplanner.com/images/rome.png',
        titre:"Rome",
        button:"SEE OPENINGS" },
    
        {image:'https://www.docplanner.com/images/mexico-city.png',
        titre:"Mexico City",
        button:"SEE OPENINGS" },

        {image:'https://www.docplanner.com/images/curitiba.png',
        titre:"Curitiba",
        button:"SEE OPENINGS" }];

        const Global = () => {
        return (
            <div>
        <div className="pays">
            {tab.map((el,i)=>
            <Pays
            key={i}
            image={el.image}
            titre={el.titre}
            button={el.button} 
            />
            )}


        </div>

        
<footer>
    <div class="countries">
        We are leaders in 10 countries: <a href=""> Poland</a>,<a href=""> Turkey </a>, <a href="">Spain</a>, <a href="">Italy</a>, <a href="">Czech Republic</a>,<a href=""> Mexico</a>,<a href="">Colombia</a>,<a href="">Brazil</a>, <a href="">Argentina</a> and <a href="">Chile</a>

        This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
        www.docplanner.com © 2019 
        </div>
    </footer>
       </div>
    );
   };
export default Global ;