import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Painter.css";
import PainterApi from "./PainterApi";
const Painter = (props) => {
  const {CartHandler}=props;
  const [PainterData] = useState(PainterApi);
  console.log(PainterData);
  return (
    <div className="container-fluid c-row">
      <div className="row ">
        {PainterData.map((e) => (
          <div className="col-12 col-md-4">
            <div class="Painterd" style={{ width: "28rem" }}>
              <img style={{height:"200px"}} src={e.image} class="Painterd-img-top" alt="..." />
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

export default Painter;
