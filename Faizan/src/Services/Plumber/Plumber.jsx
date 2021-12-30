import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Plumber.css";
import PlumberApi from "./PlumberApi";
const Plumber = (props) => {
  const {CartHandler}=props;
  const [PlumberData] = useState(PlumberApi);
  console.log(PlumberData);
  return (
    <div className="container-fluid c-row">
      <div className="row ">
        {PlumberData.map((e) => (
          <div className="col-12 col-md-4">
            <div class="Plumberd" style={{ width: "28rem" }}>
              <img style={{height:"200px"}} src={e.image} class="Plumberd-img-top" alt="..." />
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

export default Plumber;
