import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Gyser.css";
import GyserApi from "./GyserApi";
const Gyser = (props) => {
  const {CartHandler}=props;
  const [GyserData] = useState(GyserApi);
  console.log(GyserData);
  return (
    <div className="container-fluid c-row">
      <div className="row ">
        {GyserData.map((e) => (
          <div className="col-12 col-md-4">
            <div class="Gyserd" style={{ width: "28rem" }}>
              <img style={{height:"200px"}} src={e.image} class="Gyserd-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">{e.title}</h2>
                <p class="card-text"> {e.info}</p>
                <Link to="#"onClick={()=>CartHandler(e)} class="btn btn-primary">
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

export default Gyser;
