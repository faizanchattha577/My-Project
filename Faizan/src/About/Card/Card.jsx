import React, { useState } from "react";
import CardApi from "./CardApi";
const Card = () => {
  const [CardData] = useState(CardApi);
  console.log(CardData);
  return (
    <div className="container-fluid c-row">
      <div className="row ">
        {CardData.map((e) => (
          <div className="col-12 col-md-3">
            <div class="card" style={{ width: "28rem", height:"20rem" }}>
              <img style={{height:"200px"}} src={e.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">{e.title}</h2>
                <p class="card-text"> {e.info}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
