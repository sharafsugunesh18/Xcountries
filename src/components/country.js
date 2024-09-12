import { useEffect, useState } from "react";
import Card from "./card";
import React from "react";
const Country = ()=>{
    const [flags,setflags] = useState([]);
    
        useEffect(() => {
            fetch('https://xcountries-backend.azurewebsites.net/all')
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                console.log(data);
                setflags(data);
              });
          }, []);
   

    return(
        <div style={{
            display:"flex",
            flexWrap:"wrap",
        }}>
            {flags.map((flag)=>(
                <Card key ={flag.abbr} name={flag.name} flagalttext={flag.abbr} flagimg={flag.flag}/>
            ))}

        </div>
    );
}
export default Country;

