import React,{useState} from "react";
import TextAboutApi from "./TextAboutApi";
import Card from "./Card/Card"
const TextA = () => {
 
  const[TextData]=useState(TextAboutApi);
   console.log(TextData);
  return (
  
    <div>
      {TextData.map((e)=>(
        <div>
           <br />
          <h1 className="HeadingText"> <strong>{e.title}</strong></h1>
          <br />
          <p className="ParaText">{e.info}</p>
        </div>
        
      ))}
       <Card/>
    </div>
  );
};

export default TextA;
