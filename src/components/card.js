import React from "react";

const Card = ({name,flagimg,flagalttext})=>{
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
            width: "200px",
            height: "200px", 
        }}>
        <img src= {flagimg} alt={flagalttext} style={{width:"100px",height: "100px"}}/>
        <h2>{name}</h2>
        </div>
    );
}
export default Card;