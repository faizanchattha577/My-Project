import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AC.css";
import AcApi from "./AcApi";
const Ac = (props) => {
  const {CartHandler}=props;
  const [AcData] = useState(AcApi);
  //console.log(AcData);
  return (
    <div className="container-fluid c-row">
      <div className="row ">
        {AcData.map((e) => (
          <div className="col-12 col-md-4">
            <div class="card" style={{ width: "28rem" }}>
              <img style={{height:"200px"}} src={e.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">{e.title}</h2>
                <p class="card-text"> {e.info}</p>
                <Link to="#" onClick={()=>CartHandler(e)} class="btn btn-primary">
                  Add to Cart 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ac;
