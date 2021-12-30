import React,{useState} from "react";
import TextApi from "./TextApi";

const Text = () => {
 
  const[TextData]=useState(TextApi);
   //console.log(TextData);
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
    
    </div>
  );
};

export default Text;
